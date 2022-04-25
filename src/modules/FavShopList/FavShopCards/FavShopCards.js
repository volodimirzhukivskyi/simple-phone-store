import React from "react";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { addShopForm } from "../../ReduxApp/ModalReducer/modalAction";
import Counter from "../../Counter/Counter";

const FavShopCards = (props) => {
  const {
    card,
    onClickMinus,
    onClickPlus,
    onClickDelete,
    onClickAddToCart,
    mapActions,
    splitValue,
  } = props;

  const dispatch = useDispatch();
  return (
    <div
      className="favCardsBlock"
      style={{ borderBottom: "1px solid #cccccc" }}
    >
      <img src={card.src} alt="Смартфон" />
      <div className="contentTextWrapper">
        <p className="cardsWrapper__title">
          Модель : <br />
          {card.name}
        </p>
        <span className="cardsWrapper__price">
          Цена :{" "}
          {onClickDelete
            ? splitValue(card.price * card.count)
            : splitValue(card.price)}
          ₴
        </span>
      </div>
      {onClickDelete && (
        <Counter
          onClickPlus={() => onClickPlus(card.vendorCode)}
          onClickMinus={() => onClickMinus(card.vendorCode)}
          counter={card.count}
        />
      )}
      <div className="buttonWrapper">
        <Button
          className="CloseButtonModal"
          backgroundColor={"none"}
          onClick={() => {
            mapActions
              ? mapActions(card.vendorCode)
              : onClickDelete(card.vendorCode);
          }}
          text={"X"}
        />
        <Button
          className={mapActions ? "cardsWrapper__button" : "hide-block"}
          style={{ background: "#cccccc" }}
          key={card.vendorCode}
          onClick={() => {
            mapActions
              ? onClickAddToCart(card.vendorCode)
              : dispatch(addShopForm(true));
          }}
          text={"В корзину"}
        />
      </div>
    </div>
  );
};
export default FavShopCards;
