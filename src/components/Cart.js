import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Корзина</h2>

      {state.cart.length === 0 ? <p>Корзина пуста</p> : (
        <div>
          {state.cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <h3>${item.price}</h3>

              <div>
                <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}>+</button>
              </div>

              <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                Удалить
              </button>
            </div>
          ))}

          <h2>Общая стоимость: ${totalPrice.toFixed(2)}</h2>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Очистить корзину</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
