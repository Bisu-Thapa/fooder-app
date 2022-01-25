import React from "react";
import "./Cart.css";

const CartItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;
  return (
    <li className="cart-items">
      <div className="items-info">
        <h3>{props.name}</h3>
        <div className="item-price">
          <span>{price}</span>
          <span>X {props.amount}</span>
        </div>
      </div>

      <div className="add-remove">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
