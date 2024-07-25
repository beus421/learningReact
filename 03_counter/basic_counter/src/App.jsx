import { useState } from 'react'
import './App.css'

function App() {
  // hook, special kind of var(count) whose
  // value can only be changed with a function(setCount())
  // and default value is 0(useState(0)) 

  let [count, setCount] = useState(0)

  const incCount = () => {
    setCount(count+1)
    console.log('incCounter')
  }

  const decCount = () =>{
    setCount(count-1)
    console.log('decCounter')
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Count: <span>{count}</span></h2>
      <button onClick={incCount}>+</button>
      <br />
      <button onClick={decCount}>-</button>
    </>
  )
}

export default App
