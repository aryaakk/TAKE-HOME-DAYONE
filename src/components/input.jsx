import React from "react";

const Input = (props) =>{
    return (
        <input autoFocus={props.autoFocus} type={props.type} className = {props.class} onChange={props.fungsi} onClick={props.fungsiClick} value ={props.value}/>
    );
}

export default Input