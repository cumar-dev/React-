import React from 'react'
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Error Page</h1>
        <p>this page is error page and it's ${error} </p>
    </div>
  )
}

export default NotFound;