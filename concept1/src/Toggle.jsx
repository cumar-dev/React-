import React, { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(true);
    const toggle = ()=> {
        setShow(!show);
    }
  return (
    <>
    <p></p>
    <button onClick={toggle}>{show ? "Hide" : "Show"}</button>
    {show && <h2>Hello, Omar!</h2>}
    </>
  )
}

export default Toggle;