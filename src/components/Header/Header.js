import React, { Fragment, useContext } from "react";
import "./Header.css";
import Food from "./food.jpg";
import CartContext from "../Context/cartContext";

const Header = (props) => {
  // When we use useContext, Header component is re-evaluated by React whenever context changes
  const cartCntxt = useContext(CartContext);
  // Using reduce(), that allows to convert array of data to single value
  // It takes 2 arguments: 1st is function,  2nd is starting value
  // The 1st argument function itself receive 2 arguments: current value & item where it is currently looking into
  const nummberOfCartItems = cartCntxt.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <header className="header-nav">
        <h1 className="header-h1">Fooder App</h1>
        <button className="button" onClick={props.onShowCart}>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </span>

          <span className="cart-title">Your cart</span>

          <span className="badge">{nummberOfCartItems}</span>
        </button>
      </header>

      <div className="image-box">
        <img src={Food} alt="Collection of raw foods" />
      </div>
    </Fragment>
  );
};

export default Header;
