import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header"
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'

function App() {
  const [count, setCount] = useState(0)

  return (

  <div className="">
    <Header/>

    <Slider/>

    <ProductionHouse/>
  </div>
    
  )
}

export default App
