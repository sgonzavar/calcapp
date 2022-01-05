import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const renderButtons = (onClickNumber) => {
    const renderButton = (number) => {
        <Buttons text={number.toString()} clickHandler={onClickNumber} />
    }
    return numbers.map(renderButton)
}
const Numbers = ({ onClickNumber} ) => {
    return (
        <section className="numbers">
            {
                renderButtons(onClickNumber)  
            }
            {/* <Buttons text="1" clickHandler={onClikcNumber} />
            <Buttons text="2" clickHandler={onClikcNumber} />
            <Buttons text="3" clickHandler={onClikcNumber} />
            <Buttons text="4" clickHandler={onClikcNumber} />
            <Buttons text="5" clickHandler={onClikcNumber} />
            <Buttons text="6" clickHandler={onClikcNumber} />
            <Buttons text="7" clickHandler={onClikcNumber} />
            <Buttons text="8" clickHandler={onClikcNumber} />
            <Buttons text="9" clickHandler={onClikcNumber} />
            <Buttons text="0" clickHandler={onClikcNumber} /> */}
        </section>
    )
}

Numbers.prototype= {onClikcNumber: PropTypes.func.isRequired}

export default Numbers
