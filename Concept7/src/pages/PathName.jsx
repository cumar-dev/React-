import React from 'react'
import { useLocation } from "react-router-dom"
const PathName = () => {
    // const {pathname} = useLocation();
    const location = useLocation();
  return (
    <>
    <h2>Profile Page</h2>
    <p>current path: {location.pathname}</p>
    <p>query: {location.search}</p>
    </>
  )
}

export default PathName;