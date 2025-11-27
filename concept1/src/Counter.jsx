import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0);
    const increase = ()=> {
        setCount(Count + 1);
    }
    const Decrease = ()=> {
        setCount(Count - 1);
    }
    const Reset = ()=> {
        setCount(0);
    }
  return (
    <>
    <p>Count: {Count}</p>
   <button onClick={increase}>Increase</button>
   <button onClick={Decrease}>Decrease</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Counter;