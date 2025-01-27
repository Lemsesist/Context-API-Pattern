import { ProductCard } from "./ProductCard";

export function ProductsList({ products, loading, categories, onFilter, selectedCategory }) {
  return (
    <div>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
