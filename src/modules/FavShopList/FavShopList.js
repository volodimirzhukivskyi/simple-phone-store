import React from "react";
import FavShopCards from "../../components/FavShopCards/FavShopCards";
import { changedCountItem } from "../ReduxApp/AppReducer/actionsApp";
import {
  addShopForm,
  addShopModal,
} from "../ReduxApp/ModalReducer/modalAction";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import FormShop from "../../components/FormShop/FormShop";

const FavShopList = (props) => {
  const {
    cards,
    onClickDelete,
    onClickAddToCart,
    mapActions,
    splitValue,
  } = props;
  const { shoppingCart, shopModal, shopForm } = useSelector((store) => ({
    cards: store.reducerApp.cards,
    shoppingCart: store.reducerApp.shoppingCart,
    favProductsIds: store.reducerApp.favProductsIds,
    actionToConfirm: store.reducerApp.actionToConfirm,
    shopModal: store.reducerModal.shopModal,
    shopForm: store.reducerModal.shopForm,
  }));
  const dispatch = useDispatch();
  const changedCardItemCount = (vendorCode, increment = true) => {
    const shopItems = shoppingCart.map((item) => {
      if (item.vendorCode === vendorCode) {
        return {
          vendorCode: vendorCode,
          count: increment ? item.count + 1 : item.count - 1,
        };
      }
      return item;
    });
    const validateForm = shopItems.filter((item) => item.count);
    dispatch(changedCountItem(validateForm));
  };

  return (
    <div className="favContentWrapper">
      <h1 className="titleHero">{mapActions ? "Избранное" : "Корзина"}</h1>
      <div className="favCardsWrapper">
        {cards && !cards.length && (
          <div className="style-title">
            Пока в{mapActions ? " Избранном" : " Корзине"} нет товаров...
          </div>
        )}

        {cards.map((card) => (
          <FavShopCards
            key={card.vendorCode}
            card={card}
            onClickMinus={(code) => changedCardItemCount(code, false)}
            onClickAddToCart={onClickAddToCart}
            onClickPlus={(code) => changedCardItemCount(code, true)}
            mapActions={mapActions}
            onClickDelete={onClickDelete}
            splitValue={splitValue}
          />
        ))}
        {!mapActions && (
          <div className={"total-price"}>
            <p className={"total-price__text"}>
              К ОПЛАТЕ:
              <span className={"total-price__el"}>
                {cards.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.count * +currentValue.price,
                  0
                )}
              </span>
            </p>

            <Button
              className={cards.length ? "cardsWrapper__button" : "hide-block"}
              style={{ background: "#cccccc" }}
              onClick={() => {
                !mapActions && dispatch(addShopForm(true));
              }}
              text={"Купить"}
            />
          </div>
        )}
        {!mapActions && shopForm && (
          <div className={"containerModal"}>
            <FormShop
              card={cards.map((card) => card)}
              click={() => dispatch(addShopForm(false))}
            />
          </div>
        )}
        {shopModal && (
          <Modal
            header="Спасибо за сотрудничество!!! "
            closeButton={true}
            click={() => dispatch(addShopModal(false))}
            text="Ваш заказ принят на обробку.С вами свяжется менеджер"
            actions={
              <div className="containerButton">
                <Button
                  className="modalButtonOne"
                  backgroundColor={"#b3382c"}
                  text={"Закрыть"}
                  onClick={() => dispatch(addShopModal(false))}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};
export default FavShopList;
