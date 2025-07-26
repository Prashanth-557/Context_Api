import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const ParentComponent = () => {
const [count,setCount]=useState(0)
  return (
    <div>
        <h2>ParentComponent</h2>
        <hr/>
        <ChildA count={count}/>
        <ChildB setCount={setCount}/>
    </div>
  )
}

export default ParentComponent