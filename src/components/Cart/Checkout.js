import React, { useRef, useState } from "react";

// Validation helper function
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length < 5;

const Checkout = (props) => {
  // useState to give user error message if form isNotValid
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  // useRef to get input values
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  // Form handler
  const confirmHandler = (event) => {
    event.preventDefault();
    const userInputName = nameInputRef.current.value;
    const userInputStreet = streetInputRef.current.value;
    const userInputCity = cityInputRef.current.value;
    const userInputPostal = postalInputRef.current.value;

    // Validating form inputs
    const userInputNameIsValid = !isEmpty(userInputName);
    const userInputStreetIsValid = !isEmpty(userInputStreet);
    const userInputCityIsValid = !isEmpty(userInputCity);
    const userInputPostalIsValid = !isFiveChars(userInputPostal);

    setFormValidity({
      name: userInputNameIsValid,
      street: userInputStreetIsValid,
      city: userInputCityIsValid,
      postalCode: userInputPostalIsValid,
    });

    const formIsValid =
      userInputNameIsValid &&
      userInputStreetIsValid &&
      userInputCityIsValid &&
      userInputPostalIsValid;

    // conditions
    if (!formIsValid) {
      // error message to the user
    } else {
      //submit confirm data
      props.onConfirm({
        name: userInputName,
        street: userInputStreet,
        city: userInputCity,
        postalCode: userInputPostal,
      });
    }
  };

  return (
    <form onSubmit={confirmHandler} className="form-checkout">
      <div className="input-container">
        <label htmlFor="name">Your Name:</label>
        <input id="name" type="text" ref={nameInputRef} />
        {formValidity.name ? (
          ""
        ) : (
          <p className="input-error">Please enter a valid name!</p>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="street">Street:</label>
        <input id="street" type="text" ref={streetInputRef} />
        {formValidity.street ? (
          ""
        ) : (
          <p className="input-error">Please enter a valid street name!</p>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="city">City:</label>
        <input id="city" type="text" ref={cityInputRef} />
        {formValidity.city ? (
          ""
        ) : (
          <p className="input-error">Please enter a valid city name!</p>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="postalCode">Postal Code: </label>
        <input id="postalCode" type="text" ref={postalInputRef} />
        {formValidity.postalCode ? (
          ""
        ) : (
          <p className="input-error">
            Please enter a valid postal code (5 characters)!
          </p>
        )}
      </div>

      <div className="button-container">
        <button className="order">Confirm</button>
        <button type="button" onClick={props.onCancel} className="cancel">
          Cancel
        </button>
      </div>
    </form>
  );
};
export default Checkout;
