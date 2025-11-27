import React, { useEffect } from 'react'

const Timer = () => {
    useEffect(()=> {
        const timer = setInterval(()=> {
            console.log("Running ...", timer);
        }, 1000)
        return()=> {
            clearInterval(timer);
            console.log("clean is done", timer);
        }
    }, [])
  return (
    <>
    <h2>Timer</h2>
    </>
  )
}

export default Timer