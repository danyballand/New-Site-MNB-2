import { mockProducts } from "@/lib/shopify/mock-products";
import {
  SHOPIFY_API_VERSION,
  type ShopifyCartLineInput,
  type ShopBadge,
  type ShopDataResult,
  type ShopImage,
  type ShopProduct,
  type ShopProductType,
  type ShopProductVariant,
} from "@/lib/shopify/types";
import { filterProducts } from "@/lib/shopify/utils";

type ShopifyConfig = {
  domain: string;
  token: string;
};

type ShopifyMoney = {
  amount: string;
  currencyCode: string;
};

type ShopifyImage = {
  url: string;
  altText: string | null;
  width: number | null;
  height: number | null;
};

type ShopifyVariantNode = {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  selectedOptions: { name: string; value: string }[];
};

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  totalInventory: number | null;
  priceRange: { minVariantPrice: ShopifyMoney };
  compareAtPriceRange: { minVariantPrice: ShopifyMoney };
  featuredImage: ShopifyImage | null;
  images: { edges: { node: ShopifyImage }[] };
  variants: { edges: { node: ShopifyVariantNode }[] };
};

type ShopifyProductsResponse = {
  products: {
    edges: { node: ShopifyProductNode }[];
  };
};

type ShopifyProductResponse = {
  product: ShopifyProductNode | null;
};

type ShopifyCartCreateResponse = {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
      totalQuantity: number;
      cost: {
        subtotalAmount: ShopifyMoney;
        totalAmount: ShopifyMoney;
      };
    } | null;
    userErrors: {
      field: string[] | null;
      message: string;
    }[];
  };
};

class ShopifyConfigurationError extends Error {
  constructor() {
    super("Variables Shopify manquantes.");
    this.name = "ShopifyConfigurationError";
  }
}

const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment MnbProduct on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    availableForSale
    totalInventory
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 6) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          availableForSale
          quantityAvailable
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

const PRODUCTS_QUERY = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}

  query MnbProducts($first: Int!, $query: String) {
    products(first: $first, query: $query, sortKey: CREATED_AT, reverse: true) {
      edges {
        node {
          ...MnbProduct
        }
      }
    }
  }
`;

const PRODUCT_QUERY = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}

  query MnbProduct($handle: String!) {
    product(handle: $handle) {
      ...MnbProduct
    }
  }
`;

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation MnbCartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export function isShopifyConfigured() {
  return Boolean(process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN);
}

export async function getShopProducts(filters: { type?: ShopProductType; query?: string } = {}): Promise<
  ShopDataResult<ShopProduct[]>
> {
  const configured = isShopifyConfigured();

  if (!configured) {
    return {
      data: filterProducts(mockProducts, filters),
      source: "mock",
      configured,
    };
  }

  try {
    const response = await shopifyFetch<ShopifyProductsResponse>(PRODUCTS_QUERY, {
      first: 50,
      query: filters.query ? `title:*${filters.query.trim()}*` : undefined,
    });
    const products = response.products.edges.map(({ node }) => mapProduct(node));

    return {
      data: filterProducts(products, { type: filters.type }),
      source: "shopify",
      configured,
    };
  } catch (error) {
    return {
      data: filterProducts(mockProducts, filters),
      source: "mock",
      configured,
      error: error instanceof Error ? error.message : "Connexion Shopify indisponible.",
    };
  }
}

export async function getShopProduct(handle: string): Promise<ShopDataResult<ShopProduct | null>> {
  const configured = isShopifyConfigured();

  if (!configured) {
    return {
      data: mockProducts.find((product) => product.handle === handle) ?? null,
      source: "mock",
      configured,
    };
  }

  try {
    const response = await shopifyFetch<ShopifyProductResponse>(PRODUCT_QUERY, { handle });

    return {
      data: response.product ? mapProduct(response.product) : null,
      source: "shopify",
      configured,
    };
  } catch (error) {
    return {
      data: mockProducts.find((product) => product.handle === handle) ?? null,
      source: "mock",
      configured,
      error: error instanceof Error ? error.message : "Produit Shopify indisponible.",
    };
  }
}

export async function createShopifyCheckout(lines: ShopifyCartLineInput[]) {
  if (!isShopifyConfigured()) {
    throw new ShopifyConfigurationError();
  }

  const response = await shopifyFetch<ShopifyCartCreateResponse>(
    CART_CREATE_MUTATION,
    {
      input: {
        lines: lines.map((line) => ({
          merchandiseId: line.merchandiseId,
          quantity: line.quantity,
        })),
        attributes: [
          {
            key: "source",
            value: "my-nice-bracelet-next-shop",
          },
        ],
      },
    },
    { cache: "no-store" },
  );

  const errors = response.cartCreate.userErrors;
  if (errors.length > 0) {
    throw new Error(errors.map((error) => error.message).join(" "));
  }

  if (!response.cartCreate.cart?.checkoutUrl) {
    throw new Error("Shopify n'a pas retourne d'URL de checkout.");
  }

  return response.cartCreate.cart;
}

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown>,
  options: { cache?: "no-store" } = {},
): Promise<T> {
  const config = getShopifyConfig();
  const endpoint = `${config.domain}/api/${SHOPIFY_API_VERSION}/graphql.json`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.token,
    },
    body: JSON.stringify({ query, variables }),
    ...(options.cache === "no-store" ? { cache: "no-store" as const } : { next: { revalidate: 60 } }),
  });

  if (!response.ok) {
    throw new Error(`Shopify Storefront API ${response.status}`);
  }

  const payload = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join(" "));
  }

  if (!payload.data) {
    throw new Error("Reponse Shopify vide.");
  }

  return payload.data;
}

function getShopifyConfig(): ShopifyConfig {
  const rawDomain = process.env.SHOPIFY_STORE_DOMAIN?.trim();
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim();

  if (!rawDomain || !token) {
    throw new ShopifyConfigurationError();
  }

  const withoutProtocol = rawDomain.replace(/^https?:\/\//, "").replace(/\/+$/, "");

  return {
    domain: `https://${withoutProtocol}`,
    token,
  };
}

function mapProduct(product: ShopifyProductNode): ShopProduct {
  const variants = product.variants.edges.map(({ node }) => mapVariant(node));
  const firstVariant = variants[0];
  const featuredImage = mapImage(product.featuredImage, product.title);
  const images = product.images.edges.map(({ node }) => mapImage(node, product.title));

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    productType: product.productType,
    category: inferCategory(product.productType, product.tags),
    tags: product.tags,
    badges: inferBadges(product.tags),
    availableForSale: product.availableForSale,
    totalInventory: product.totalInventory,
    price: firstVariant?.price ?? product.priceRange.minVariantPrice,
    compareAtPrice: firstVariant?.compareAtPrice ?? product.compareAtPriceRange.minVariantPrice,
    featuredImage,
    images: images.length > 0 ? images : [featuredImage],
    variants,
  };
}

function mapVariant(variant: ShopifyVariantNode): ShopProductVariant {
  return {
    id: variant.id,
    title: variant.title,
    availableForSale: variant.availableForSale,
    quantityAvailable: variant.quantityAvailable,
    price: variant.price,
    compareAtPrice: variant.compareAtPrice,
    selectedOptions: variant.selectedOptions,
  };
}

function mapImage(image: ShopifyImage | null, fallback: string): ShopImage {
  return {
    url: image?.url ?? "/shop/products/mnb_perle_cube_transparent_vert_v1_2048.png",
    altText: image?.altText ?? fallback,
    width: image?.width ?? 2048,
    height: image?.height ?? 2048,
  };
}

function inferCategory(productType: string, tags: string[]): ShopProductType {
  const source = `${productType} ${tags.join(" ")}`.toLowerCase();

  if (
    source.includes("pack") ||
    source.includes("kit") ||
    source.includes("coffret") ||
    source.includes("bundle") ||
    source.includes("atelier maison")
  ) {
    return "packs";
  }

  if (source.includes("drop") || source.includes("petite serie") || source.includes("small batch")) {
    return "drops";
  }

  if (source.includes("recharge") || source.includes("fil") || source.includes("fermoir") || source.includes("essentiel")) {
    return "recharges";
  }

  if (source.includes("perle") || source.includes("bead")) {
    return "perles";
  }

  if (
    source.includes("pierre") ||
    source.includes("stone") ||
    source.includes("semi-precieuse") ||
    source.includes("semi precieuse") ||
    source.includes("semi-precious") ||
    source.includes("amethyste") ||
    source.includes("turquoise")
  ) {
    return "pierres";
  }

  if (source.includes("figurine") || source.includes("kawaii")) {
    return "figurines";
  }

  return "perles";
}

function inferBadges(tags: string[]): ShopBadge[] {
  const source = tags.join(" ").toLowerCase();
  const badges: ShopBadge[] = [];

  if (source.includes("selection") || source.includes("atelier")) {
    badges.push("Selection atelier");
  }

  if (source.includes("facile") || source.includes("easy")) {
    badges.push("Facile a composer");
  }

  if (source.includes("petit-stock") || source.includes("low-stock")) {
    badges.push("Petit stock");
  }

  if (source.includes("nouveaute") || source.includes("new")) {
    badges.push("Nouveaute");
  }

  if (source.includes("edition") || source.includes("limited") || source.includes("limitee")) {
    badges.push("Edition limitee");
  }

  if (source.includes("best-seller") || source.includes("bestseller") || source.includes("best seller")) {
    badges.push("Best-seller");
  }

  return badges;
}
