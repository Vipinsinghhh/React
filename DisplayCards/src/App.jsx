import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])


  return (      
    <>
      <div className="m-4 border border-purple-400">
        {cards.map(card => (
          <div key={card.id} className='m-4 border border-pink-300 '>
            <button>
              Card no.{card.id}
            </button>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </>
          
  )
}

export default App
