import React from 'react'
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    
    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold text-red-600">Error Page</h1>
           
            <p className="mt-4">
                This page encountered an error: 
                <span className="italic ml-1">
                    {error.statusText || error.message}
                </span>
            </p>
        </div>
    )
}

export default NotFound;