import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";

const CATEGORIES = ["All", "Men's Clothing", "Women's Clothing", "Electronics", "Jewelery"];

export function ProductsContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category.toLowerCase()));
    }
  };

  return (
    <ProductsList
      products={filteredProducts}
      loading={loading}
      categories={CATEGORIES}
      onFilter={handleFilter}
      selectedCategory={selectedCategory}
    />
  );
}
