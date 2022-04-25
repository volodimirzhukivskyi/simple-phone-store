import React from "react";
import Tab from "../Tab/Tab";
import { ReactSVG } from "react-svg";

const Menu = (props) => {
  return (
    <header className="head">
      <div className="head-list">
        <a className="block-logo">
          <ReactSVG className="img-logo" src="./phones/smartphone_79223.svg" />

          <h3 className="logo">Моби лайф</h3>
        </a>
        <div className="list-navigation">
          <Tab elUrlNav="/" text={"Главная"} className="link-navigation" />
          <Tab elUrlNav="/fav" text={"Избранное"} className="link-navigation" />
        </div>
        <Tab
          elUrlNav="/shopping"
          text={
            <ReactSVG
              className="img-shop"
              src="./phones/shoppingcart3_114877.svg"
            />
          }
        />
      </div>
    </header>
  );
};
export default Menu;
