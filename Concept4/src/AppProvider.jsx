import React, { useReducer } from 'react'
import {reducer, initialState} from "./ReducerApp"
import CommonContext from "./CommonContext"
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <CommonContext.Provider value={{state, dispatch}}>
     {children}
    </CommonContext.Provider>
    </>
  )
}

export default AppProvider