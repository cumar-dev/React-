import React, { useEffect, useState } from 'react'

const TmerComponent = () => {
   const [number, setNumber] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=> {
        let timerId;
        if(isRunning) {
            timerId = setInterval(()=> {
                setTimeLeft((prev)=> {
                    if(prev > 0) return prev -1
                    setIsRunning = (false);
                    return 0;
                })
            }, 1000)
           
        }
         return()=> clearInterval(timerId);
    }, [isRunning])

    function handleStart() {
        if(timeLeft > 0) setIsRunning(true);
    }
    function handleStop() {
        setIsRunning(false)
    }
    function Reset() {
     setIsRunning(false);
     setTimeLeft(number);
    }
  return (
    <>   
    <h1>Countdown Timer</h1>
    <input type="number" value={number} onChange={(e) => {
        const value = (e.target.value);
        setNumber(value);
        setTimeLeft(value);
    }} />
    <p>time left {timeLeft} seconds</p>
    <button disabled = {number === 0} onClick={handleStop}>stop</button>
    <button disabled = {number === 0} onClick={handleStart}>Start</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default TmerComponent;