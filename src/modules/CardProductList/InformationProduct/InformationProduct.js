import React, { useState } from "react";
import FormShop from "../../FormShop/FormShop";
import { useDispatch } from "react-redux";
import ShowMore from "../../showMore/showMore";

const InformationProduct = (props) => {
  const {showcaseSample } = props;
  const data = {
    color: ["black", "red", "green"],
    txt: 'Экран (6.7", OLED (Super Retina XDR), 2778x1284) / Apple A14 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 14',
    img: [
      "/imagesGeneralList/phones/iphone12/iphone12.jpg",
      "/imagesGeneralList/phones/iphone12/iphone12.3.jpg",
      "/imagesGeneralList/phones/iphone12/iphone12.4.jpg",
    ],
  };

  const {  color, txt, img } = data;
  const [activeNumber, setActiveNumber] = useState(0);

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
        <div className='podInformation__wrapper'>
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
          <div className={'podInformation__content'}>
            <div className="color-block-container">
              <h2>{showcaseSample[0].name} есть вналичие в таких цветах:</h2>
              <div className="div-color-render">{renderColorDiv(3)}</div>
            </div>
            <div className="block-products-text">
              <h3 className="products-title">Краткое описание товара</h3>
              <ShowMore descr={txt}/>
            </div>
          </div>
        </div>
        <div className={'hero-block__form'} >
          <div className={'price-information'}><p className="text-order-block">
            Купите этот товар <span className={"red-word"}>сейчас</span> и
            получите в подарок : скидку в раз мере{" "}
            <span className={"red-word"}>1000 грн</span> на покупки в нашем
            магазине.
          </p>
            <div className="block-price">
              <p className={'price-number'}>
                <b className={'price-text'}>ЦЕНА : </b>
                {showcaseSample[0].price}
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
