import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Интернет-магазин</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;