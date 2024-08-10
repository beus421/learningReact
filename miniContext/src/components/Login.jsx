import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <>
    <div className='w-full flex justify-center'>
        <div className='bg-gray-600 shadow font-mono flex flex-col gap-1 px-5'>
            <h1>Login Page</h1>
            <input className='px-1' type="text" placeholder='username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            <input className='px-1' type="text" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button className='bg-orange-500 rounded mb-1' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Login