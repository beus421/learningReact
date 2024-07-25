import React from 'react'

export default function Buttons() {
    function colorChange(e){
        document.body.style.backgroundColor = e.target.id
    }

  return (
    <>
    <div className="row py-1 bg-white rounded-md absolute top-3/4 left-1/3 right-1/3">
        <button id='blue' className='btn p-6 bg-blue-700 ml-2 border-white' onClick={colorChange}></button>
        <button id='red' className='btn p-6 bg-red-700 m-2 border-white' onClick={colorChange}></button>
        <button id='green' className='btn p-6 bg-green-700 border-white' onClick={colorChange}></button>
        <button id='purple' className='btn p-6 bg-purple-700 m-2 border-white' onClick={colorChange}></button>
    </div>
    </>
  )
}
