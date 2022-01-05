import React, {useState} from 'react'

//components
import Results from './components/Results';
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

//styles
import './styles/App.css'

const App = () => {
    // const [text, setText] = useState();
    // const clickHandlerFunction = (label) => {setText(label);}

    return (
        <main className='react-calculator'>
            <Results value="0" />
            <Numbers onClickNumber={number => {console.log("number", number);}}/>
            <Functions 
                onContentClear={content => {console.log("content", content)}}
                onDelete={del => {console.log("Delete", del)}}
            />
            <MathOperations 
                onClickOperation={op => {console.log("ope: ", op)}} 
                onClickEqual={eq => {console.log("equal: ", eq)}} 
            />
        </main>
    )
}

export default App