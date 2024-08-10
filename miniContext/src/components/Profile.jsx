import React,  { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user || user.username === ''){
        return(
            <div className='bg-red-500 p-24 flex justify-center'>
                <div>Please Login</div>
            </div>
        )
    }
    else{
        return(
            <div className='bg-red-500 p-24 flex justify-center'>
                <div>Welcome, {user.username}</div><br/>
                <div>Your password: {user.password}</div>
            </div>
        )
    }
}

export default Profile