import React from "react";
import { ReactSVG } from "react-svg";
import Tab from "../../components/Tab/Tab";

const Menu = (props) => {
  const { itemsCart } = props;
  const navigation = [
    { id: 1, title: "Главная", path: `${process.env.PUBLIC_URL}/` },
    { id: 2, title: "Товары", path: `${process.env.PUBLIC_URL}/phone` },
    { id: 3, title: "Избранное", path: `${process.env.PUBLIC_URL}/fav` },
  ];
  return (
    <header className="head">
      <div className="head-wrapper container">
        <Tab
          className={"block-logo"}
          elUrlNav={`${process.env.PUBLIC_URL}/`}
          text={
            <>
              <ReactSVG
                className="img-logo"
                src={`${process.env.PUBLIC_URL}/img/phones/smartphone_79223.svg`}
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
          elUrlNav={`${process.env.PUBLIC_URL}/shopping`}
          text={
            <ReactSVG
              className={itemsCart.length ? "img-shop--red" : "img-shop"}
              src={`${process.env.PUBLIC_URL}/img/phones/shoppingcart3_114877.svg`}
            />
          }
        />
      </div>
    </header>
  );
};
export default Menu;
