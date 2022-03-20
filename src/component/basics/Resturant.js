import React,{ useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import { Navbar}  from "./Navbar";
const uniqueList =[
  ... new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })

  ),
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filteritem =(category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
    <Navbar filteritem={filteritem}/>
    < MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;