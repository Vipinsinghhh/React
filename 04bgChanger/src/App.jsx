import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  //-----------------aap iss tarah se bhi ek hi function bana ke usme color pass kar sakte ho----------------
  // const changeBGcolor = (color) => {
  //   document.body.style.backgroundColor = color
  // }
  //-----------------------------------------------------------------------------------------------



  //---------------aap iss tarah se bhi each button ke liye alag function bana sakte ho--------------
  // const bgRed = () => {
  //   document.body.style.backgroundColor = "red"
  //   // setColor("red")
  // }

  // const bgGreen = () => {
  //   document.body.style.backgroundColor = "green"
  // }

  // const bgBlue = () => {
  //   document.body.style.backgroundColor = "blue"
  // }

  // const bgOlive = () => {
  //   document.body.style.backgroundColor = "Olive"
  // }

  // const bgGray = () => {
  //   document.body.style.backgroundColor = "Gray"
  // }

  // const bgyellow = () => {
  //   document.body.style.backgroundColor = "yellow"
  // }

  // const bgPink = () => {
  //   document.body.style.backgroundColor = "pink"
  // }

  // const bgPurple = () => {
  //   document.body.style.backgroundColor = "purple"
  // }

  // const bgLavender = () => {
  //   document.body.style.backgroundColor = "lavender"
  // }

  // const bgBlack = () => {
  //   document.body.style.backgroundColor = "black"
  // }

  // const bgWhite = () => {
  //   document.body.style.backgroundColor = "white"
  // }
  // -------------------------------------------------------------------------------------


  return (
    <>

      {/* <h1 className="text-3xl font-bold mb-4 text-maven">Background Changer Project</h1>

      <button className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("red")}>Red</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("green")}>Green</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("blue")}>Blue</button>
      <button className="bg-olive-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("olive")}>Olive</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("gray")}>Gray</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("yellow")}>Yellow</button>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("pink")}>Pink</button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("purple")}>Purple</button>
      <button className="bg-lavender-500 text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("lavender")}>Lavender</button>
      <button className="bg-black text-white px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("black")}>Black</button>
      <button className="bg-white text-black px-4 py-2 rounded-md m-2"
      onClick={() => changeBGcolor("white")}>White</button> */}

      {/* improved logic and code  */}

      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >Olive</button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >Gray</button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >Pink</button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >Purple</button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >Lavender</button>

            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >White</button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >Black</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
