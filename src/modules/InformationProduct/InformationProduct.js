import React, { useState } from "react";
import FormShop from "../../components/FormShop/FormShop";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
const CURRENT_PRODUCT = "iPhone 12";
const InformationProduct = () => {
  const { cards } = useSelector((store) => ({
    cards: store.reducerApp.cards,
  }));
  const showcaseSample = cards.find(
    (product) => product.name === CURRENT_PRODUCT
  );

  const { color, txt, img, price, name } = showcaseSample;
  const [activeNumber, setActiveNumber] = useState(0);
  const [activeColor, setActiveColor] = useState(null);
  const handleChange = (event) => {
    const elIndex = Number(event.target.attributes.value.value);
    setActiveNumber({ clickEl: img[elIndex] });
  };

  const renderImages = (number) => {
    const imageElements = [];
    for (let i = 0; i < number; i++) {
      const imageSrc = img[i];
      imageElements.push(
        <img
          className="pic-products"
          value={i}
          key={i}
          src={process.env.PUBLIC_URL + imageSrc}
          onClick={handleChange}
          alt="телефон"
        />
      );
    }
    return imageElements;
  };
  return (
    <div>
      <h2 className={"informationProduct-title"}>
        Специальное предложение - <span>{name}</span>
      </h2>
      <div className="block-products-card container">
        <div>
          <div className="block-pic-slider">
            <div className="block-pic">{renderImages(3)}</div>
            <div className="block-active-pic">
              <img
                className="active-pic"
                src={
                  activeNumber.clickEl
                    ? process.env.PUBLIC_URL + activeNumber.clickEl
                    : process.env.PUBLIC_URL + img[activeNumber]
                }
                onChange={handleChange}
                alt="телефон"
              />
            </div>
          </div>
          <div className={"podInformation__content"}>
            <div className="color-block-container">
              <p className={"color-text"}>
                Цвет: <span>{activeColor}</span>
              </p>
              <div className={"wrapperButtons"}>
                {color.map((color, i) => (
                  <div
                    className={
                      activeColor === color
                        ? "wrapperButton active-button "
                        : "wrapperButton"
                    }
                  >
                    <Button
                      onClick={() => setActiveColor(color)}
                      backgroundColor={color}
                      className={"colorDiv"}
                    ></Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="block-products-text">
              <h3 className="products-title">Краткое описание товара</h3>
              <p>{txt}</p>
            </div>
          </div>
        </div>
        <div className={"hero-block__form"}>
          <div className={"price-information"}>
            <div className="block-price">
              <p className={"price-number"}>
                <b className={"price-text"}>ЦЕНА : </b>
                {price}
              </p>
            </div>
          </div>
          <FormShop card={showcaseSample} />
        </div>
      </div>
    </div>
  );
};
export default InformationProduct;
