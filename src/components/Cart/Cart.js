import React, { useContext } from "react";
import "./Cart.css";
import Modal from "./Modal";
import CartContext from "../Context/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
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
  // rendering
  return (
    <Modal>
      <ol className="ol">{cartItems}</ol>
      <h3 className="total-amount">
        Total amount: <p className="totalAmount">{totalAmount}</p>
      </h3>
      <div className="button-box">
        {cartHasItems && <button className="order">Order</button>}
        <button className="cancel" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
