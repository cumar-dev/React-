import React, { useReducer } from 'react'
const initialState = {count: 0};
const reducer = (state, action)=> {
switch(action.type) {
    case "incriment":
        return{...state, count: state.count + 1};
    case "reset":
        return initialState;
    default:
        return state;        
}
}
const LikeCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <p>Like {state.count} ❤️ </p>
    <button onClick={()=> dispatch({type: "incriment"})}>increase</button>
    <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
    </>
  )
}

export default LikeCounter