import React from 'react'

const Button = ({type, text, clickHandler}) => {

    const clickHandlerButton = (text) => {
        console.log("click");
        clickHandler(text);
    }
    return (
        <button className={type} onClick={clickHandlerButton}>
            <span>{text}</span>
        </button>
    )
}

export default Button
