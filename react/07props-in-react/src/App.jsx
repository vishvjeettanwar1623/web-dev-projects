import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


function App() {

  let age = 21;
  

  return (
    <>
    
      <Card username = "Vishvjeet"  age = {age}/>
      <Card />
      

    </>
  )
}

export default App
