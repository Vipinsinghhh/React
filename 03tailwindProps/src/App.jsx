import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myObject = {
    name: "John Doeeee",
    age: 30,
    city: "New York"
  }

  const myArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-500 text-red-500 p-4 rounded-xl mb-4'>Tailwind CSS</h1>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-4">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/38809716/pexels-photo-38809716.jpeg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      <Card username="John Doe" btnText="Get Started" myObj={myObject} />
      <Card username="Jane Smith" btnText="Learn More" myArr={myArray} />  

      {/*like username and buttontext we can also pass objects and arrays as props and use the value of obj and array in cards using optional chaining */}

    </>
  )
}

export default App
