import React from "react";
import Tab from "../Tab/Tab";
import { ReactSVG } from "react-svg";

const Menu = (props) => {
  const { itemsCart } = props;
  return (
    <header className="head">
      <div className="head-wrapper container">
        <Tab
          className={"block-logo"}
          elUrlNav="/"
          text={
            <>
              <ReactSVG
                className="img-logo"
                src="./phones/smartphone_79223.svg"
              />

              <h3 className="logo">Моби лайф</h3>
            </>
          }
        />

        <nav className="hero-navigation">
          <ul className="hero-navigation__list">
            <li className="list-item">
              <Tab elUrlNav="/" text={"Главная"} className="link-navigation" />
            </li>
            <li className="list-item">
              <Tab
                elUrlNav="/phone"
                text={"Товары"}
                className="link-navigation"
              />
            </li>
            <li className="list-item">
              <Tab
                elUrlNav="/fav"
                text={"Избранное"}
                className="link-navigation"
              />
            </li>
          </ul>
        </nav>
        <Tab
          elUrlNav="/shopping"
          text={
            <ReactSVG
              className={itemsCart.length ? "img-shop--red" : "img-shop"}
              src="./phones/shoppingcart3_114877.svg"
            />
          }
        />
      </div>
    </header>
  );
};
export default Menu;
