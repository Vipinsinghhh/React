import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20){
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // agar hum soche ki iss tarah se ek bar me 4 increment karenge to ye kaam nahi karega kyuki react me state update asynchronous hota hai aur ye previous state ke basis pe hi update hota hai. isliye agar hum ek hi function me multiple times setCounter call karenge to wo sirf last wale call ko consider karega aur pehle wale calls ko ignore karega. isliye agar hume ek hi function me multiple times state update karna hai to hume functional update ka use karna chahiye jisme hum previous state ko access karke new state calculate karte hai. jaise ki niche diya gaya hai.


    setCounter((prevCounter) => {
      let counter = prevCounter + 1
      return counter

    })
    setCounter((prevCounter) => {return prevCounter + 1}) //short form of above code.
    setCounter((prevCounter) => prevCounter + 1) // 2nd short form of above code.
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)

    //the reason is react is tarah ke same operations ko batch kar deta hai aur ek hi state update ke liye multiple times call karne se wo sirf last wale call ko consider karega aur pehle wale calls ko ignore karega. isliye agar hume ek hi function me multiple times state update karna hai to hume functional update ka use karna chahiye jisme hum previous state ko access karke new state calculate karte hai. jaise ki niche diya gaya hai.

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
