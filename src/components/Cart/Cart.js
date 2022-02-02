import React, { useContext, useState } from "react";
import "./Cart.css";
import Modal from "./Modal";
import CartContext from "../Context/cartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  // useState
  const [isCheckout, setIsCheckout] = useState(false);

  // used useContext
  const cartContext = useContext(CartContext);

  // Set totalAmount
  const totalAmount = `€${cartContext.totalAmount.toFixed(2)}`;

  // I want to show order button only when there is item in the cart
  const cartHasItems = cartContext.items.length > 0;

  // I want to add handler to add and remove items from the cart
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  // Order handler
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)} //bind pre-configure the arguments for the future execution
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const modalActions = (
    <div className="actions-box">
      {cartHasItems && (
        <button className="order" onClick={orderHandler}>
          Order
        </button>
      )}
      <button className="cancel" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  );

  // rendering
  return (
    <Modal>
      <div className="cartItem-container">{cartItems}</div>
      <h3 className="total-amount">
        Total amount:{" "}
        <p style={{ color: "maroon", marginLeft: "5px"}}> {totalAmount}</p>
      </h3>

      {isCheckout && <Checkout onCancel={props.onCancel} />}
      <div className="button-box">{!isCheckout && modalActions}</div>
    </Modal>
  );
};

export default Cart;
