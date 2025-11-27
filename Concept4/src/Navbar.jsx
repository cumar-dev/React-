import React, { useContext } from 'react'
import UserContext from './UserContext';
const Navbar = () => {
    const {user} = useContext(UserContext)
  return (
<>
   <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <h3>Welcome, {user}!</h3>
    </nav>
</>
)
}

export default Navbar