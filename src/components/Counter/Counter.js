import React from "react";




const Counter=(props)=>{
    const{onClickPlus,onClickMinus,counter}=props
return <div className="counterWrapper">
    <button onClick={onClickPlus}>+</button>
    <p>{counter}</p>
    <button onClick={onClickMinus}>-</button>
</div>
}
export default Counter