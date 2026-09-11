import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //interview question: why we are using single state instead of multiple state in this example?
  //yha par multiple state ka use karne ki jgh single state use ki he kyuki every change in value will automatically update the multiplied value as well.

  const [value, setValue] = useState(1)
  // const [MultipliedValue, setMultipliedValue] = useState(1)   
  let MultipliedValue = value * 5
  
  const multiplyByFive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplyByFive}>click to multiply by 5</button>
      <h2>Multiplied value: {MultipliedValue}</h2>
    </>
  )
}

export default App
