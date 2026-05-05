export default function ShopLoading() {
  return (
    <div className="mnb-shop">
      <main className="mnb-shop-main">
        <div className="mnb-loading-hero">
          <div />
          <div />
        </div>
        <div className="mnb-loading-grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
