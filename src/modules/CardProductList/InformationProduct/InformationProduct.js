import React, { useState } from "react";
import FormShop from "../../FormShop/FormShop";
import { useSelector } from "react-redux";
import ShowMore from "../../showMore/showMore";

const InformationProduct = () => {
  const { cards } = useSelector((store) => ({
    cards: store.reducerApp.cards,
  }));
  const showcaseSample = cards
    .filter((product) => product.name === "iPhone 12")
    .map((filterProduct) => {
      return {
        ...filterProduct,
        count: 1,
      };
    });

  const { color, txt, img, price, name } = showcaseSample[0];
  const [activeNumber, setActiveNumber] = useState(0);
  console.log(img);
  const handleChange = (event) => {
    const elIndex = Number(event.target.attributes.value.value);
    setActiveNumber({ clickEl: img[elIndex] });
  };
  const renderColorDiv = (number) => {
    const colorDiv = [];
    for (let i = 0; i < number; i++) {
      const divBgStyle = color[i];
      colorDiv.push(
        <div
          key={color[i]}
          className="colorDiv"
          style={{
            background: divBgStyle,
          }}
        >
          <div className="color-block" style={{ background: divBgStyle }}>
            <p className="color-block-text">
              <b>Цвет</b> : {divBgStyle}
            </p>
          </div>
        </div>
      );
    }

    return colorDiv;
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
          src={`${imageSrc}`}
          onClick={handleChange}
          alt="телефон"
        />
      );
    }
    return imageElements;
  };
  return (
    <>
      <div className="block-products-card container">
        <div className="podInformation__wrapper">
          <div className="block-pic-slider">
            <div className="block-pic">{renderImages(3)}</div>
            <div className="block-active-pic">
              <img
                className="active-pic"
                src={
                  activeNumber.clickEl
                    ? activeNumber.clickEl
                    : img[activeNumber]
                }
                onChange={handleChange}
                alt="телефон"
              />
            </div>
          </div>
          <div className={"podInformation__content"}>
            <div className="color-block-container">
              <h2>{name} есть вналичие в таких цветах:</h2>
              <div className="div-color-render">{renderColorDiv(3)}</div>
            </div>
            <div className="block-products-text">
              <h3 className="products-title">Краткое описание товара</h3>
              <ShowMore descr={txt} />
            </div>
          </div>
        </div>
        <div className={"hero-block__form"}>
          <div className={"price-information"}>
            <p className="text-order-block">
              Купите этот товар <span className={"red-word"}>сейчас</span> и
              получите в подарок : скидку в раз мере{" "}
              <span className={"red-word"}>1000 грн</span> на покупки в нашем
              магазине.
            </p>
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
    </>
  );
};
export default InformationProduct;
