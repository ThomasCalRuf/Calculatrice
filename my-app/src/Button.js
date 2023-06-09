import React from "react";

function Button( {value , onClick} ){
    return (
        <button value={value} onClick={onClick}>{value}</button>
    )
}

export default Button;