import React from 'react'

const Header = () => {

    const handleCodeExecution=()=>{
        console.log("Working")
    }
  return (
    <nav className='nav'>
        <button onClick={handleCodeExecution}>Run</button>
    </nav>
  )
}

export default Header