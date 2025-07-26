import React, { useEffect, useRef, useState } from 'react'

const UseRefEample2 = () => {
const [count,setCount]=useState(0);
const prevCount=useRef(0)
useEffect(()=>{
    prevCount.current=count
})
  return (
    <div>
        <h2>UseRefEample2</h2>
        <hr/>
        <h3>Now:{count},Before:{prevCount.current}</h3>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default UseRefEample2