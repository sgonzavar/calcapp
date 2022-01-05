import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Numbers = ({onClikcNumber}) => {
    return (
        <section className="numbers">
            <Buttons text="1" clickHandler={onClikcNumber} />
            <Buttons text="2" clickHandler={onClikcNumber} />
            <Buttons text="3" clickHandler={onClikcNumber} />
            <Buttons text="4" clickHandler={onClikcNumber} />
            <Buttons text="5" clickHandler={onClikcNumber} />
            <Buttons text="6" clickHandler={onClikcNumber} />
            <Buttons text="7" clickHandler={onClikcNumber} />
            <Buttons text="8" clickHandler={onClikcNumber} />
            <Buttons text="9" clickHandler={onClikcNumber} />
            <Buttons text="0" clickHandler={onClikcNumber} />
        </section>
    )
}

Numbers.prototype= {onClikcNumber: PropTypes.func.isRequired}

export default Numbers
