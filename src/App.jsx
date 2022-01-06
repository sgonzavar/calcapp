/* esLint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words';

//components
import Results from './components/Results';
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

//styles
import './styles/App.css'

const App = () => {
    const [stack, setStack] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g );
    const value =items.length > 0 ? items[items.length -1] : 0;

    return (
        <main className='react-calculator'>
            <Results value={value} />
            <Numbers 
                onClickNumber={number => {console.log("number", number)
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={content => {console.log("content", content)
                setStack('')
            }}
                onDelete={del => {
                if (stack.length > 0) {
                    console.log("Delete", del)
                    const newStack = stack.substring(0, stack.length - 1);
                    setStack(newStack)
                }
            }}
            />
            <MathOperations 
                onClickOperation={op => {console.log("ope: ", op)
                setStack(`${stack}${op}`)
            }} 
                onClickEqual={eq => {console.log("equal: ", eq)
                // eslint-disable-next-line no-eval
                setStack(eval(stack).toString())
            }} 
            />
        </main>
    )
}

export default App