'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Wrapper React autour du web-component <model-viewer> de Google.
 *
 * Layouts supportés :
 *   - "row"      (défaut) : flex row, viewers répartis horizontalement.
 *   - "triangle" (3 modèles) : composition asymétrique avec un modèle
 *                  AU PREMIER PLAN au centre-bas, et deux modèles
 *                  derrière lui à gauche/droite. Donne une profondeur
 *                  "vitrine" sans avoir besoin d'un vrai compositing
 *                  3D unifié.
 *
 * Mouse tracking :
 *   On n'utilise PAS `auto-rotate`. Chaque viewer écoute la position
 *   globale de la souris et oriente sa caméra pour donner l'illusion
 *   que la figurine "regarde" le curseur. Le calcul est local à chaque
 *   viewer (chaque figurine se base sur SA propre position dans la
 *   viewport), donc trois figurines vont toutes les trois suivre le
 *   curseur en restant indépendantes.
 *
 *   Le lerp progressif (8 % par frame) évite les saccades quand le
 *   curseur passe brusquement d'un côté à l'autre.
 *
 *   Convention model-viewer : phi = 90° = caméra au niveau "équateur"
 *   (vue horizontale). phi < 90° = caméra au-dessus du modèle (on voit
 *   le dessus du crâne, le modèle paraît "regarder vers le bas").
 *   phi > 90° = caméra sous le modèle (on voit le menton, le modèle
 *   paraît "regarder vers le haut"). Pour que la souris vers le HAUT
 *   fasse RELEVER les yeux du modèle, on doit donc INCRÉMENTER phi
 *   quand relY est négatif → formule `phi = base - relY * range`.
 */
interface ModelEntry {
  src: string;
  label?: string;
}

interface HeroModelViewerProps {
  src?: string;
  models?: ModelEntry[];
  alt?: string;
  className?: string;
  layout?: 'row' | 'triangle';
}

const TRACK_THETA_MAX = 28;     // ±28° yaw — net mais naturel
const TRACK_PHI_BASE = 88;      // baseline légèrement sous l'horizontal pour voir un soupçon de chin
const TRACK_PHI_RANGE = 14;     // ±14° pitch — laisse le modèle pencher la tête sans forcer
const TRACK_REFERENCE_FRAC = 0.5;

// Positions pré-calculées pour le layout triangle. Chaque entrée
// décrit un viewer en pourcentage du conteneur, avec son z-index pour
// l'ordre d'empilement (HK devant, les deux autres derrière).
//   slot 0 = front center-bottom (modèle "héros")
//   slot 1 = back-left
//   slot 2 = back-right
//
// Espacement : on a écarté les arrière-plans en allant en NÉGATIF sur
// left/right (ils débordent légèrement du conteneur, pas grave parce
// qu'on les laisse couper, ça renforce l'effet "vitrine"). Vertical :
// les back sont plus haut, le front descend plus bas → triangle net.
const TRIANGLE_POSITIONS = [
  // HK devant : centré, légèrement plus petit que dans la version
  // initiale pour ne plus écraser totalement les back.
  { left: '28%', top: '20%', width: '44%', height: '80%', zIndex: 20 },
  // Penguin (back-left) : pousse vers l'extérieur (left négatif) pour
  // créer un vrai écart entre lui et HK. Plus haut et plus petit.
  { left: '-6%', top: '-2%', width: '46%', height: '64%', zIndex: 10 },
  // Kuromi (back-right) : symétrique.
  { right: '-6%', top: '-2%', width: '46%', height: '64%', zIndex: 10 },
] as const;

// Paramètres ressort/amortissement par viewer. Chaque mascotte a sa
// propre "personnalité" cinétique :
//   - stiffness (raideur) : plus c'est haut, plus la tête réagit vite.
//   - damping (amortissement) : <1, plus c'est BAS, plus la vélocité
//     se conserve → mouvement avec inertie qui peut overshooter.
// HK est la plus vive (raideur ↑, damping ↓) ; Penguin lent et
// pondéré ; Kuromi entre les deux. Combinaison choisie pour que
// quand la souris bouge, les 3 ne convergent pas en même temps —
// HK arrive en premier, Penguin traîne, Kuromi suit.
const SPRING_PARAMS: { stiffness: number; damping: number }[] = [
  { stiffness: 0.085, damping: 0.78 },  // HK (front) — vive
  { stiffness: 0.045, damping: 0.86 },  // Penguin (back-left) — pondérée
  { stiffness: 0.062, damping: 0.82 },  // Kuromi (back-right) — intermédiaire
];

export function HeroModelViewer({ src, models, alt = '', className, layout = 'row' }: HeroModelViewerProps) {
  const entries: ModelEntry[] = models && models.length > 0 ? models : src ? [{ src }] : [];

  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  // État ressort par viewer : position courante + vélocité (en deg/frame).
  // La cible est recalculée chaque frame depuis la position souris ;
  // la vélocité agit comme un filtre passe-bas qui crée l'inertie.
  const currentOrbits = useRef<{ theta: number; phi: number }[]>([]);
  const orbitVelocities = useRef<{ theta: number; phi: number }[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    import('@google/model-viewer').catch(() => {});
  }, []);

  useEffect(() => {
    currentOrbits.current = entries.map(() => ({ theta: 0, phi: TRACK_PHI_BASE }));
    orbitVelocities.current = entries.map(() => ({ theta: 0, phi: 0 }));
  }, [entries.length]);

  useEffect(() => {
    if (entries.length === 0) return;

    function onMove(e: MouseEvent) {
      mousePos.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener('mousemove', onMove);
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    let raf = 0;
    function tick() {
      const { x: mx, y: my } = mousePos.current;
      const refX = window.innerWidth * TRACK_REFERENCE_FRAC;
      const refY = window.innerHeight * TRACK_REFERENCE_FRAC;

      wrapperRefs.current.forEach((wrapper, i) => {
        if (!wrapper) return;
        const mv = wrapper.querySelector('model-viewer');
        if (!mv) return;

        const rect = wrapper.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const relX = Math.max(-1, Math.min(1, (mx - cx) / refX));
        const relY = Math.max(-1, Math.min(1, (my - cy) / refY));

        // Cible : où la mascotte VEUT regarder. Recalculée chaque frame
        // depuis la position souris.
        //   theta < 0 quand la souris est à droite → caméra à gauche
        //     → modèle tourne la tête à droite ✓
        //   phi > base quand la souris est en haut → caméra plus bas
        //     → modèle lève les yeux ✓
        const targetTheta = -relX * TRACK_THETA_MAX;
        const targetPhi = TRACK_PHI_BASE - relY * TRACK_PHI_RANGE;

        // Système ressort par viewer : la vélocité accumule la force
        // de rappel vers la cible (× stiffness) puis subit un
        // amortissement (× damping). Résultat : chaque mascotte a sa
        // propre cinétique — HK réagit vif, Penguin pondéré, Kuromi
        // entre les deux. Casse le synchronisme zombi.
        const cur = currentOrbits.current[i];
        const vel = orbitVelocities.current[i];
        const params = SPRING_PARAMS[i % SPRING_PARAMS.length]!;

        vel.theta = vel.theta * params.damping + (targetTheta - cur.theta) * params.stiffness;
        vel.phi = vel.phi * params.damping + (targetPhi - cur.phi) * params.stiffness;
        cur.theta += vel.theta;
        cur.phi += vel.phi;

        mv.setAttribute('camera-orbit', `${cur.theta.toFixed(2)}deg ${cur.phi.toFixed(2)}deg auto`);
      });

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [entries.length]);

  if (entries.length === 0) return null;

  const isTriangle = layout === 'triangle' && entries.length === 3;

  function buildViewerMarkup(entry: ModelEntry) {
    // Note : pas de `camera-controls`. On s'occupe nous-mêmes du
    // camera-orbit dans la boucle de mouse tracking — laisser
    // camera-controls activé permettrait à l'utilisateur de drag le
    // modèle avec la souris, ce qui se mélange désagréablement avec
    // notre tracking automatique (le modèle "fight" entre l'input
    // utilisateur et notre logique). On désactive tout, le hero est
    // strictement contemplatif.
    //
    // pointer-events:none sur le model-viewer fait que le wrapper
    // div capte le click (pas le canvas WebGL), donc l'animation de
    // saut au clic se déclenche correctement.
    return `
      <model-viewer
        src="${entry.src}"
        alt="${(alt + (entry.label ? ' — ' + entry.label : '')).replace(/"/g, '&quot;')}"
        interaction-prompt="none"
        shadow-intensity="0.55"
        shadow-softness="0.9"
        exposure="1.05"
        environment-image="neutral"
        camera-orbit="0deg ${TRACK_PHI_BASE}deg auto"
        style="width:100%;height:100%;background:transparent;--poster-color:transparent;pointer-events:none;"
      ></model-viewer>
    `;
  }

  // Click handler : déclenche l'animation de saut sur le wrapper.
  // On retire la classe puis force un reflow (lecture de offsetHeight)
  // avant de la rajouter — pattern standard pour redémarrer une
  // animation CSS sur clic répété sans avoir à attendre la fin du
  // cycle précédent.
  function handleViewerClick(i: number) {
    const wrapper = wrapperRefs.current[i];
    if (!wrapper) return;
    wrapper.classList.remove('mnb-mascotte-jump');
    void wrapper.offsetHeight;
    wrapper.classList.add('mnb-mascotte-jump');
  }

  if (isTriangle) {
    // Triangle : positionnement absolu pour empiler la figurine de
    // devant par-dessus celles de derrière. Chaque viewer reste
    // indépendant pour le mouse tracking (chacun calcule depuis son
    // propre centre, donc ils bougent en parallèle mais avec des
    // angles différents selon leur position).
    //
    // Structure 2 niveaux : outer div = `className` du caller intact
    // (en pratique `absolute inset-0` pour remplir la colonne hero) ;
    // inner div = `relative w-full h-full` qui établit le contexte
    // de positionnement pour les enfants `absolute`. Si on mélange
    // `relative` + `absolute inset-0` sur le même élément, Tailwind
    // applique l'une ou l'autre selon l'ordre des règles dans le
    // bundle et la div peut se collapser à 0×0 — bug observé.
    return (
      <div className={className}>
        <div className="relative w-full h-full">
          {entries.map((entry, i) => {
            const pos = TRIANGLE_POSITIONS[i];
            if (!pos) return null;
            return (
              <div
                key={entry.src}
                ref={(el) => { wrapperRefs.current[i] = el; }}
                onClick={() => handleViewerClick(i)}
                className="absolute cursor-pointer"
                style={pos}
                dangerouslySetInnerHTML={{ __html: buildViewerMarkup(entry) }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Layout par défaut : row centrée, items-end pour aligner les pieds.
  return (
    <div className={className}>
      <div
        className={cn(
          'relative flex h-full w-full',
          entries.length === 1 ? 'items-center justify-center' : 'items-end justify-center gap-1 md:gap-2',
        )}
      >
        {entries.map((entry, i) => (
          <div
            key={entry.src}
            ref={(el) => { wrapperRefs.current[i] = el; }}
            onClick={() => handleViewerClick(i)}
            className="relative flex-1 h-full min-w-0 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: buildViewerMarkup(entry) }}
          />
        ))}
      </div>
    </div>
  );
}
