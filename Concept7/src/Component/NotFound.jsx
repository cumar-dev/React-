import React from 'react'
import { useRouteError } from 'react-router-dom'
const NotFound = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Error</h1>
        <p>This is causing fatal error ${error}</p>
    </div>
  )
}

export default NotFound