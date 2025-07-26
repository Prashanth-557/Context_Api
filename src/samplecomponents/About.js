import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
const navigate=useNavigate();
const handleClick =()=>{
    const userData={name:'siddu',email:'siddu@gmail.com'};
    navigate('/Contacts',{state:userData})
}
  return (
    <div>
        <h2>About</h2>
        <button onClick={handleClick}>send data to contact</button>
    </div>
  )
}

export default About