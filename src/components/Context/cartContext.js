// Context provides a way to pass data through the component tree without having to pass -
// - props down manually at every level.
import React from "react";

// after importing React, now we can call React.createContext() and
// initialize default data into context. data are dummy data

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cartContext;
