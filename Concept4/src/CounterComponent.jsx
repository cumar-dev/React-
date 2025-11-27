import React, { useContext } from 'react';
import CommonContext from "./CommonContext";

const CounterComponent = () => {
  const { state, dispatch } = useContext(CommonContext);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "incriment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterComponent;
