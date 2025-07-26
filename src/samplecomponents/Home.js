import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
const navigate=useNavigate()
const handleClick=()=>{
    navigate('/about')
}
  return (
    <div>
        <h2>Home</h2>
        <hr/>
        <button onClick={handleClick}>go to About</button>
    </div>
  )
}

export default Home