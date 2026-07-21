import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  

  // let counter = 10;

  const addValue =() => {
    // console.log('Value Incremented', Math.random());
    // counter ++
    // counter += 1
    // counter = counter +1 
    setCounter(counter+1)
    console.log('Counter', counter)
  }
  
  const decreaseValue=() => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Understanding Hooks in React Today !!</h1>

      <h3>Counter: {counter}</h3>

      <button onClick={addValue}>Increment by 1</button>
      <button onClick={decreaseValue}>Decrement by 1</button>
    </>
  )
}

export default App
