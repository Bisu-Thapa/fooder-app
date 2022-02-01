import React, { useEffect, useState } from "react";
import ItemsInfo from "./ItemsInfo";
import "./Style.css";

const MenuList = () => {
  //useState
  const [menu, setMenu] = useState([]);
  //useEffect: here we want our fetch only runs at the beginning
  useEffect(() => {
    // fetch: get data from API
    const fetchMenu = async () => {
      const response = await fetch(
        "https://food-order-app-8c46e-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      const responseData = await response.json();
      const loadedMenu = [];
      // for loop to go to all keys in responseData Object
      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMenu(loadedMenu);
    };
    fetchMenu();
  }, []);

  // used map()
  const menuList = menu.map((item) => (
    <ItemsInfo
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return <ul>{menuList}</ul>;
};

export default MenuList;
