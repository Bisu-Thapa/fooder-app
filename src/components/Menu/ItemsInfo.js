import React, { useContext } from "react";
import Form from "./Form";
import "./Style.css";
import CartContext from "../Context/cartContext";

const ItemsInfo = (props) => {
  // call useContext
  const cartContext = useContext(CartContext);

  // Defined addToCartHandler
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <div className="items-box">
      <li className="list">
        <p className="menu-name">{props.name}</p>
        <p className="menu-description">{props.description}</p>
        <p className="menu-price">€{props.price}</p>
      </li>
      <Form onAddToCart={addToCartHandler} />
    </div>
  );
};

export default ItemsInfo;
