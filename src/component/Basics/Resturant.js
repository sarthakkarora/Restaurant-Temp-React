import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import useMenuList from "./useMenuList";
import Navbar from "./Navbar";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuList = useMenuList(Menu);

  const filterItem = useCallback((category) => {
    setIsLoading(true);
    setTimeout(() => {
      if (category === "All") {
        setMenuData(Menu);
      } else {
        const updatedList = Menu.filter((curElem) => curElem.category === category);
        setMenuData(updatedList);
      }
      setIsLoading(false);
    }, 500);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`restaurant ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Navbar filterItem={filterItem} menuList={menuList} />
      {isLoading ? <div className="spinner">Loading...</div> : <MenuCard menuData={menuData} />}
    </div>
  );
};

export default Resturant;