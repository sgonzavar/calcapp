import React from 'react'

//components
import Result from './components/Result';
import Button from './components/Button';

//styles
import './styles/App.css'

const App = () => {

    const clickHandlerFunction = (text) => {
        console.log("button.clickhandler", text)
    }

    return (
        <main className='react-calculator'>
            <Result value="hola" />
            <div className="numbers">
                <Button type="" text="1" clickHandler={clickHandlerFunction}/>
                <Button type="" text="2" />
                <Button type="" text="3" />
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>
                    clear
                </button>
                <button>
                    r
                </button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>
    )
}

export default App