import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { state, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.category === category);

  if (loading) return <h2>Загрузка...</h2>;

  return (
    <div>
      <h2>Категории</h2>
      <div>
        {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const itemInCart = state.cart.find((item) => item.id === product.id);

          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.category}</p>
              <h3>${product.price}</h3>

              {itemInCart ? (
                <div>
                  <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: product.id, quantity: itemInCart.quantity - 1 } })}>-</button>
                  <span>{itemInCart.quantity}</span>
                  <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: product.id, quantity: itemInCart.quantity + 1 } })}>+</button>
                </div>
              ) : (
                <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
                  Добавить в корзину
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
