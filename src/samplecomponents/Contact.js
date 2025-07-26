import React from 'react'
import { useLocation } from 'react-router-dom'
const Contact = () => {
const location=useLocation();
const {name,email}=location.state || {};
  return (
    <div>
        <h2>Contact</h2>
        <hr/>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
    </div>
  )
}

export default Contact