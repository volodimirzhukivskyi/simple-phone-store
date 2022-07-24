import { Route, Switch } from "react-router-dom";
import {
  deleteFromShopping,
  actionConfirm,
  addFavProductsIds,
  addShoppingCart,
} from "../ReduxApp/AppReducer/actionsApp";
import React from "react";
import GeneralList from "../GeneralList/GeneralList";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import CardProductList from "../CardProductList/CardProductList";
import FavShopList from "../FavShopList/FavShopList";

const List = (props) => {
  const { cards, shoppingCart, favProductsIds, actionToConfirm } = useSelector(
    (store) => ({
      cards: store.reducerApp.cards,
      shoppingCart: store.reducerApp.shoppingCart,
      favProductsIds: store.reducerApp.favProductsIds,
      actionToConfirm: store.reducerApp.actionToConfirm,
    })
  );
  const dispatch = useDispatch();

  const onChangedFavProducts = (ids) => {
    dispatch(addFavProductsIds(ids));
  };

  const mapActions = (ids) => {
    const found = favProductsIds.includes(ids);
    if (found) {
      onChangedFavProducts(favProductsIds.filter((n) => n !== ids));
    } else {
      onChangedFavProducts([...favProductsIds, ids]);
    }
  };
  const mapCarWithFavorites = (product) => {
    return {
      ...product,
      isFavorite: favProductsIds.includes(product.vendorCode),
    };
  };
  const splitValue = (value) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <main className={"container"}>
      <Switch>
        <Route exact path={"/"} render={() => <GeneralList />} />
        <Route
          exact
          path={"/simple-phone-store/"}
          render={() => <GeneralList />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          render={() => <GeneralList />}
        />

        <Route
          exact
          path={"/phone"}
          render={() => (
            <CardProductList
              cards={cards.map(mapCarWithFavorites)}
              mapActions={mapActions}
              onClickAddToCart={(vendorCode) => {
                dispatch(
                  actionConfirm({
                    actionType: "add",
                    vendorCode: vendorCode,
                  })
                );
              }}
              splitValue={splitValue}
            />
          )}
        />
        <Route
          path={"/fav"}
          render={() => (
            <FavShopList
              cards={cards
                .filter((product) =>
                  favProductsIds.includes(product.vendorCode)
                )
                .map(mapCarWithFavorites)}
              mapActions={mapActions}
              onClickAddToCart={(vendorCode) => {
                dispatch(
                  actionConfirm({
                    actionType: "add",
                    vendorCode: vendorCode,
                  })
                );
              }}
              splitValue={splitValue}
            />
          )}
        />
        <Route
          path={"/shopping"}
          render={() => (
            <FavShopList
              cards={cards
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
                })}
              onClickDelete={(vendorCode) => {
                dispatch(
                  actionConfirm({
                    actionType: "delete",
                    vendorCode: vendorCode,
                  })
                );
              }}
              splitValue={splitValue}
            />
          )}
        />
      </Switch>
      {actionToConfirm && (
        <Modal
          header=""
          closeButton={true}
          click={() => {
            dispatch(actionConfirm(null));
          }}
          text={
            actionToConfirm.actionType === "add"
              ? "Добавить товар в корзину в корзину?"
              : "Вы точно хотите удалить товар из корзины?"
          }
          actions={
            <div className="containerButton">
              <Button
                className="modalButtonOne"
                backgroundColor={"#b3382c"}
                text={
                  actionToConfirm.actionType === "add" ? "Добавить" : "Удалить"
                }
                onClick={() => {
                  actionToConfirm.actionType === "add"
                    ? dispatch(addShoppingCart(actionToConfirm.vendorCode))
                    : dispatch(deleteFromShopping(actionToConfirm.vendorCode));
                  dispatch(actionConfirm(null));
                }}
              />
              <Button
                className="modalButtonOne"
                backgroundColor={"#b3382c"}
                text={"Закрыть"}
                onClick={() => {
                  dispatch(actionConfirm(null));
                }}
              />
            </div>
          }
        />
      )}
    </main>
  );
};
export default List;
