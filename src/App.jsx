import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Carousel from './Components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Carousel</h1> */}
      <Carousel />
    </div>
  )
}

export default App
