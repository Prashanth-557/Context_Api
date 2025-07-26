import React, { useRef } from 'react'
const UseRefComponent = () => {
const inputRef=useRef(null);
const handleClick=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor='yellow';
}
  return (
    <div>
        <h2>UseRefComponent:</h2>
        <input type="text" ref={inputRef} placeholder='click on button to focus'/>
        <button onClick={handleClick}>click to focus</button>
    </div>
  )
}

export default UseRefComponent