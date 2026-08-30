import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)
  console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
  console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID)

  return (
    <>
      <h1>welcome to my blog app by appwrite</h1>
    </>
  )
}

export default App
