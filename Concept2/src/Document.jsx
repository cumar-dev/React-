import React, { useEffect, useState } from 'react'

const Document = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `you clicked ${count}`
    }, [count]);
    function increase() {
        setCount(count + 1);
    }
    function Reset() {
        setCount(0);
    }
  return (
    <>
    <button onClick={increase}>increase</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Document;