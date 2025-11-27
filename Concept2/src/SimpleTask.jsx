import React, { useEffect, useState } from 'react'

const SimpleTask = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log(`the component is rendered ${count}`)
    }, [count]);
    function increase() {
        setCount(count + 1);
    }
  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={increase}>increase</button>
    </>
  )
}

export default SimpleTask;