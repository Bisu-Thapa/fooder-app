import React from "react";
import ItemsInfo from "./ItemsInfo";
import "./Style.css";

// This is a hardcoded dummy menu
const Dummy_Menu = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Burritos",
    description: "A mexican specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "cheese, ananas, chicken, salami",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Momo",
    description: "Nepalese dumplings with spicy pickle",
    price: 16.99,
  },
  {
    id: "m5",
    name: "Chicken soup bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MenuList = () => {
  // used map()
  const menuList = Dummy_Menu.map((menu) => (
    <ItemsInfo
      key={menu.id}
      id={menu.id}
      name={menu.name}
      description={menu.description}
      price={menu.price}
    />
  ));
  return <ul>{menuList}</ul>;
};

export default MenuList;
