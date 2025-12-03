import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
  return (
    <div>
       <h2>Profile Page</h2>
    <p>current path: {location.pathname}</p>
    <p>query: {location.search}</p>
    </div>
  )
}

export default Home