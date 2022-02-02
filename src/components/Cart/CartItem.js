import React from "react";
import "./Cart.css";

const CartItem = (props) => {
  const price = `€${props.price.toFixed(2)}`;
  return (
    <section className="cartItem-list">
      <div className="items-info">
        <div className="name-price">
          <p>{props.name}</p>
          <p style={{color:"maroon"}}>{price}</p>
        </div>
        <div className="amount">
          <span>X {props.amount}</span>
        </div>
      </div>

      <div className="add-remove">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </section>
  );
};

export default CartItem;
