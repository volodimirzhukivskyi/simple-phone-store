import "../../App.scss";
import Slider from "./SliderGeneralList/SliderGeneralList";
import InformationProduct from "../CardProductList/InformationProduct/InformationProduct";

const GeneralList = (props) => {
  const { showcaseSample } = props;
  console.log(showcaseSample)
  return (
    <div>
        <h1 className={'titleHero'}>
          МЫ РАДЫ ПРИВЕТСТВОВАТЬ ВАС В НАШЕМ ИНТЕРНЕТ-МАГАЗИНЕ!
        </h1>
        <Slider />
        <InformationProduct  />

    </div>
  );
};
export default GeneralList;
