import React, { useState } from 'react'
import UserContext from './UserContext';
const UserProvider = ({children}) => {
    const [user, setUser] = useState('omar');
    const handleChange = (newName) => {
        setUser(newName);
    }
  return (
<>
<UserContext.Provider value={{user, handleChange}}>
    {children}
</UserContext.Provider>
</>
)
}

export default UserProvider