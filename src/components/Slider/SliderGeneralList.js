import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
const img = [
  <img
    key={1}
    src={`${process.env.PUBLIC_URL}/img/sliderImg/informationBanner.png`}
    alt="картинки магазина "
  />,
  <img key={2} src={`${process.env.PUBLIC_URL}/img/sliderImg/youngWoman.jpg`} alt="картинки магазина " />,
  <img key={3} src={`${process.env.PUBLIC_URL}/img/sliderImg/Shop.jpg`} alt="картинки магазина " />,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        return current === img.length - 1 ? 0 : current + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const prevIndexEl = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgEl = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <Button
        className="buttonSliderPrev"
        backgroundColor={"black"}
        text={"<"}
        onClick={() => {
          setActiveIndex(prevIndexEl);
        }}
      />
      <div className="slider-img slider-img-prev" key={prevIndexEl}>
        {img[prevIndexEl]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgEl}>
        {img[nextImgEl]}
      </div>
      <Button
        className="buttonSliderNext"
        backgroundColor={"black"}
        text={">"}
        onClick={() => {
          setActiveIndex(nextImgEl);
        }}
      />
    </div>
  );
};
export default Slider;
