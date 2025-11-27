import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
    const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  useEffect(()=> {
 async function fetchUsers() {
    try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);        
    }
        const response = await result.json();
        setUsers(response);
        setLoading(false);
    } catch (error) {
        setError(error.message);
        setLoading(false);
    }
 }
 fetchUsers();
  }, [])
  
  if(loading) return <p>Loading Users .....</p>
  if(error) return <p>Error: {error}</p>
  return (
    <>
    <div>
        <h2>User Lists</h2>
        <ul>
            {
                users.map((user)=> (
                    <li key={user.id}>
                         <strong>{user.name}</strong> — {user.email}
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default Fetchapi;