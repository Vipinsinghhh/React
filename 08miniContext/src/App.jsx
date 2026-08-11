import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context API Project</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
