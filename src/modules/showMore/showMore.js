import React, {useState} from "react";
import Button from "../Button/Button";


const ShowMore = (props) => {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    const arr = props.descr.split(" ");
    const numberOfItems = showMore ? arr.length : 5;

    return (
       <p className="post__descr">
            {arr.splice(0, numberOfItems).map((strItems) => {
                return ` ${strItems}`;
            })}
           <Button className={'showButton'} text={!showMore ? "...show more" : ' hide more'} onClick={() => handleClick()}/>
        </p>


    );
};

export default ShowMore;
