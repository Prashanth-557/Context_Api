import React, { useEffect, useMemo } from 'react';
function Calculate({ number }) {
  const slowFunction = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 10000; i++) {} 
    return num * 2;
  };
  useEffect(()=>{
    console.log("hello")
  },[number])
  const doubled = useMemo(() => slowFunction(number), [number]);

  return <div>Result: {doubled}</div>;
}

export default Calculate;
