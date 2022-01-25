import React, { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Context/CartProvider";

const App = () => {
  // Defining useState to control overlay display i.e cart
  const [cartIsShown, setCartIsShown] = useState(false);

  // Defining handler function for cart display if setCartIsShown is true
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // Defining handler function for cart display if setCartIsShown is false
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCancel={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
};

export default App;
