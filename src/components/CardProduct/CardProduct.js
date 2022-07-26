import React from "react";
import { ReactSVG } from "react-svg";
import "./CardProduct.module.css";
import PropTypes from "prop-types";
import Star from "../starSVG/Star";
import Button from "../Button/Button";

const CardProduct = (props) => {
  const { mapActions, onClickAddToCart, card, splitValue } = props;
  return (
    <div className="cardsWrapper">
      <img
        className="cardsWrapper__img"
        onClick={() => {}}
        src={process.env.PUBLIC_URL + card.src}
        alt={""}
      />
      <div className="elementsWrapper">
        <div className="starsWrapper">
          <ReactSVG src="./phones/star_77949.svg" />
          <span className="spanElement">4,5</span>
        </div>
        <div>
          <span style={{ background: card.color }} className="colorBlock">
            <p className="missingText">
              Цвет:
              <br /> {card.color}
            </p>
          </span>
          <span className="spanElement">Код:{card.vendorCode} </span>
        </div>
      </div>
      <p className="cardsWrapper__title">{card.name}</p>
      <span className="cardsWrapper__price">{splitValue(card.price)} 💲</span>
      <div key={card.vendorCode}>
        <Button
          className="cardsWrapper__button"
          style={{ background: "#cccccc" }}
          onClick={() => {
            onClickAddToCart(card.vendorCode);
          }}
          text="В корзину"
        />
      </div>
      <div
        className="starWrapper"
        onClick={() => {
          mapActions(card.vendorCode);
        }}
      >
        <Star
          style={{
            fill: card.isFavorite ? "gold" : "white",
          }}
        />
      </div>
      <p className={"cardsWrapper__hide-block"}>{card.txt}</p>
    </div>
  );
};

CardProduct.propTypes = {
  checkFavCards: PropTypes.func,
};
CardProduct.defaultProps = {
  btnModal: "#b3382c",
};
export default CardProduct;
