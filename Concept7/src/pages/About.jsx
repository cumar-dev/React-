import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
  return (
    <div>
        <h1>About</h1>
        <div>
       <h2>Profile Page</h2>
    <p>current path: {location.pathname}</p>
    <p>query: {location.search}</p>
    </div>
    </div>
  )
}

export default About