/*
In this component, we are using React Portals to create overlay.
Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
This way is more effective, coz overlay is outside of parent "root" DOM and doesn't affect parent components.
*/

import React, { Fragment } from "react";
// To use portals we need DOM
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="overlay">
      <div className="overlay-items">
        <div className="cart-container">{props.children}</div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const getElement = document.getElementById("overlay");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, getElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        getElement
      )}
    </Fragment>
  );
};

export default Modal;
