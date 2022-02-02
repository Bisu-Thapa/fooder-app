const Checkout = (props) => {
  // Form handler
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler} className="form-checkout">
      <div className="input-container">
        <label htmlFor="name">Your Name:</label>
        <input id="name" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="address">Street:</label>
        <input id="address" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="city">City:</label>
        <input id="city" type="text" />
      </div>
      <div className="input-container">
        <label htmlFor="postalcode">Postal Code: </label>
        <input id="postalcode" type="text" />
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
