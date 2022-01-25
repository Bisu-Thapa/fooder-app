import React, { useReducer } from "react";
import CartContext from "./cartContext";

// declaring new variable to store default object state that Reducer takes
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// Set conditions
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //
    const itemsAlreadyInCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // findIndex() finds index of an item in an array
    const existingItemInCart = state.items[itemsAlreadyInCartIndex];
    let updatedItems;
    // Setting condition
    if (existingItemInCart) {
      const updatedItem = {
        ...existingItemInCart,
        amount: existingItemInCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemsAlreadyInCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); // concat gives new array
    }
    // returning new state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // Remove
  if (action.type === "REMOVE") {
    const itemsAlreadyInCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //
    const existingItem = state.items[itemsAlreadyInCartIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemsAlreadyInCartIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // Now call useReducer and destructure
  // first value is always state snapshot, second is a function which allows to dispatch an action to the reducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // Adding item to the cart
    dispatchCartAction({ type: "ADD", item: item }); // Now go to reducer and add logic to add items
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  // declaring CartContext helper, and this will be the concrete value that we update
  // now using useReducer to update cartContext
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
