import React, { useContext } from 'react'
import CommonContext from "./CommonContext"
const ToggleComponent = () => {
    const {state, dispatch} = useContext(CommonContext); 
  return (
    <>
   <div
      className={`p-6 rounded-xl text-center transition-colors duration-300 ${
        state.theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      <p className="text-xl font-semibold mb-4">Current Theme: {state.theme}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={() => dispatch({ type: "toggleTheme" })}
      >
        Toggle Theme
      </button>
    </div>
    </>
  )
}

export default ToggleComponent