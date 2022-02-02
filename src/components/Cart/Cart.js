import React, { useContext, useState, Fragment } from "react";
import "./Cart.css";
import Modal from "./Modal";
import CartContext from "../Context/cartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  // useState
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // submit data when order is clicked
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // submit data to the backend
    await fetch(
      "https://food-order-app-8c46e-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartContext.clearCart();
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

  const cartModalContent = (
    <Fragment>
      <div className="cartItem-container">{cartItems}</div>
      <h3 className="total-amount">
        Total amount:{" "}
        <p style={{ color: "maroon", marginLeft: "5px" }}> {totalAmount}</p>
      </h3>

      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onCancel} />
      )}
      <div className="button-box">{!isCheckout && modalActions}</div>
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const isSubmittedModalContent = (
    <Fragment>
      <p>Your order has been sent. Thank you!</p>
      <button className="cancel" onClick={props.onCancel}>
        Close
      </button>
    </Fragment>
  );
  // rendering
  return (
    <Modal onClick={props.onCancel}>
      {!isSubmitting && !isSubmitted && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && isSubmitted && isSubmittedModalContent}
    </Modal>
  );
};

export default Cart;
