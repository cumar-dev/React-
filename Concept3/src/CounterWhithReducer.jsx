import React, { useReducer } from 'react'
const initialState = {count: 0};
function reducer(state, action) {
switch(action.type) {
    case "incriment":
        return {count: state.count + 1};
    case "decrement":
        return {count: state.count - 1};
    case "reset":
        return initialState;
    default:
        return state;            
}
}
const CounterWhithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h2>Count: {state.count}</h2>
    <button onClick={()=> dispatch({type: "incriment"})}>incriment</button>
    <button onClick={()=> dispatch({type: "decrement"})}>decrement</button>
    <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
    </>
  )
}

export default CounterWhithReducer