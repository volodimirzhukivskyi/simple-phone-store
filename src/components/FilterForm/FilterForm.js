import {useState} from "react";

const FilterForm = (props) => {
    const [priceTo, setPriceTo] = useState("");
    const [priceFrom, setPriceFrom] = useState("");

    const {
        filter: {filter},
        setFilter,
    } = props;

    const handleSubmitFilter = (e) => {
        e.preventDefault();
        if (filter) {
            localStorage.removeItem("price");
            setPriceTo("");
            setPriceFrom("");

        } else {
            localStorage.setItem("price", JSON.stringify({priceTo, priceFrom}));
        }
        setFilter({filter: !filter});

    };
    return (<div className={'filterForm-wrapper'}>
            <h2 className={'filterForm-title'}><span className={'title-el'}>фильтр</span> товаров</h2>
            <form className={'filterForm'} onSubmit={handleSubmitFilter}>

                <input
                    className={"priceFrom "}
                    type="text"
                    name={"priceFrom"}
                    disabled={filter}
                    placeholder={"Price from"}
                    onChange={(e) => {
                        setPriceFrom(e.target.value);
                    }}
                    value={priceFrom}
                />
                <input
                    className={"priceTo"}
                    type="text"
                    name={"priceTo"}
                    disabled={filter}
                    placeholder={"Price to"}
                    onChange={(e) => {
                        setPriceTo(e.target.value);
                    }}
                    value={priceTo}
                />

                <input className={'filterForm-button'} type="submit" value={filter ? "очистить" : "фильтровать"}/>
            </form>
        </div>

    );
};
export default FilterForm;
