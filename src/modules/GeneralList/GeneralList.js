import "../../App.scss";
import Slider from "../../components/Slider/SliderGeneralList";
import InformationProduct from "../InformationProduct/InformationProduct";

const GeneralList = () => {
  return (
    <div>
      <h1 className={"titleHero"}>
        МЫ РАДЫ ПРИВЕТСТВОВАТЬ ВАС В НАШЕМ ИНТЕРНЕТ-МАГАЗИНЕ!
      </h1>
      <Slider />
      <InformationProduct />
    </div>
  );
};
export default GeneralList;
