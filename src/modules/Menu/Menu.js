import React from "react";
import { ReactSVG } from "react-svg";
import Tab from "../../components/Tab/Tab";

const Menu = (props) => {
  const { itemsCart } = props;
  const navigation = [
    { id: 1, title: "Главная", path: "/simple-phone-store/" },
    { id: 2, title: "Товары", path: "/simple-phone-store/phone" },
    { id: 3, title: "Избранное", path: "/simple-phone-store/fav" },
  ];
  return (
    <header className="head">
      <div className="head-wrapper container">
        <Tab
          className={"block-logo"}
          elUrlNav="/simple-phone-store/"
          text={
            <>
              <ReactSVG
                className="img-logo"
                src="img/phones/smartphone_79223.svg"
              />

              <h3 className="logo">Моби лайф</h3>
            </>
          }
        />

        <nav className="hero-navigation">
          <ul className="hero-navigation__list">
            {navigation.map(({ id, title, path }) => (
              <li key={id} className="list-item">
                <Tab elUrlNav={path} text={title} className="link-navigation" />
              </li>
            ))}
          </ul>
        </nav>
        <Tab
          elUrlNav="/simple-phone-store/shopping"
          text={
            <ReactSVG
              className={itemsCart.length ? "img-shop--red" : "img-shop"}
              src="img/phones/shoppingcart3_114877.svg"
            />
          }
        />
      </div>
    </header>
  );
};
export default Menu;
