import React, { Fragment } from "react";
import Info from "./Info";
import "./Style.css";

import MenuList from "./MenuList";

const Menu = () => {
  return (
    <Fragment>
      <div className="menu">
        <Info />
        <MenuList />
      </div>
    </Fragment>
  );
};

export default Menu;
