import { useState } from 'react'
// import Newsletter from './components/newsletter'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400 text-black p-2 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Newsletter/> */}
      <Card name = 'Bessy' image = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
      <Card name = 'Hammad' image = 'https://avatars.githubusercontent.com/u/163362079?v=4' />
    </>
  )
}

export default App
