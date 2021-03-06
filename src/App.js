import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "./modules/navigation/Menu/Menu.js";
import "./App.scss";
import "./adaptiveApp.scss";
import loadUser from "./modules/ReduxApp/FetchUser";
import List from "./modules/List/List";
import Footer from "./modules/footer/Footer";
const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, cards, shoppingCart } = useSelector((store) => ({
    cards: store.reducerApp.cards,
    shoppingCart: store.reducerApp.shoppingCart,
    isLoading: store.reducerApp.isLoading,
    error: store.reducerApp.error,
  }));
  useEffect(() => {
    dispatch(loadUser("/simple-phone-store/products.json"));
  }, []);
  const itemsCart = cards
    .filter((product) => {
      return shoppingCart.find(
        (item) => product.vendorCode === item.vendorCode
      );
    })
    .map((product) => {
      return {
        ...product,
        count: shoppingCart.find(
          (item) => product.vendorCode === item.vendorCode
        ).count,
      };
    });

  return (
    <div className={"app-container"}>
      <Menu itemsCart={itemsCart} />
      {error && <div>{error}</div>}
      {isLoading && (
        <div className="wrapperLoader">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {!isLoading && cards.length && (
        <React.Fragment>
          <List /> <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
