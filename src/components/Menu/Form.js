import React, { useRef, useState } from "react";
import "./Style.css";

const Form = (props) => {
  // useRef called and stored in a variable
  const inputAmountRef = useRef();

  // set useState to check if form is valid or not
  const [validAmount, setValidAmount] = useState(true);

  // Form Handler
  const submitHandler = (event) => {
    event.preventDefault();
    // with the help of useRef, stored user amount in a variable
    const userAmountStr = inputAmountRef.current.value; // This value is always a string
    const userAmount = +userAmountStr; // converted string to number
    // Set condition for user amount
    if (userAmountStr.trim().length === 0 || userAmount < 1 || userAmount > 5) {
      // used trim to remove any whitespaces from string
      setValidAmount(false);
      return;
    } else {
      props.onAddToCart(userAmount);
    }
  };

  // rendering
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-input">
        <label htmlFor="amount">Amount</label>
        <input
          ref={inputAmountRef}
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button className="form-btn">Add</button>
      {!validAmount && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};

export default Form;
