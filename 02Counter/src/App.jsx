import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
    

     <h1>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>footer: {counter}</p>

     
    </>
  )
}

export default App
