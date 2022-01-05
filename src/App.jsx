import React, {useState} from 'react'

//components
import Results from './components/Results';
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

//styles
import './styles/App.css'

const App = () => {
    const [stack, setStack] = useState("");

    return (
        <main className='react-calculator'>
            <Results value={stack} />
            <Numbers 
                onClickNumber={number => {console.log("number", number)
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={content => {console.log("content", content)
                setStack('')
            }}
                onDelete={del => {console.log("Delete", del)
                const newStack = stack.substring(0, stack.length - 1);
                setStack(newStack)
            }}
            />
            <MathOperations 
                onClickOperation={op => {console.log("ope: ", op)
                setStack(`${stack}${op}`)
            }} 
                onClickEqual={eq => {console.log("equal: ", eq)
                setStack(`${stack}${eq}`)
            }} 
            />
        </main>
    )
}

export default App