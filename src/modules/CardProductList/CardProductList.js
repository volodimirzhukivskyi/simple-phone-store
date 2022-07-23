import React, { useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import FilterForm from "../../components/FilterForm/FilterForm";

const CardProductList = (props) => {
  const [filter, setFilter] = useState(false);
  const { mapActions, cards, onClickAddToCart, splitValue } = props;
  const FILTER_PRICE = JSON.parse(localStorage.getItem("price"));
  const filterProduct = () => {
      return cards.filter((card) => +FILTER_PRICE.priceFrom < card.price && +FILTER_PRICE.priceTo > card.price)
  }
  return (
    <div className="wrapperList">
      <h1 className="titleHero">Популярные модели телефонов</h1>
      <div className={"wrapperContent"}>
        <FilterForm filter={filter} setFilter={setFilter} />
        <div className="phonesWrapper">
            {FILTER_PRICE !== null ? <div className="phonesWrapper">{filterProduct().length?
                        filterProduct().map((card) => {
                               return  <CardProduct
                                    key={card.vendorCode}
                                    card={card}
                                    onClickAddToCart={onClickAddToCart}
                                    mapActions={mapActions}
                                    splitValue={splitValue}
                                />
                            }
                        ):<p className={'filter-message'}>Нет товаров <br/>по
                        заданому фильтру</p>}</div>

          :
            cards.map((card) => (
              <CardProduct
                key={card.vendorCode}
                card={card}
                onClickAddToCart={onClickAddToCart}
                mapActions={mapActions}
                splitValue={splitValue}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default CardProductList;
