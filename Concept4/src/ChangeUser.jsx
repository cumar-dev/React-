import React, { useContext, useState } from 'react'
import UserContext from './UserContext';
const ChangeUser = () => {
    const {handleChange} = useContext(UserContext);
    const [name, setName] = useState('');
  return (
    <>
    <div>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='enter your name'/>
        <button onClick={()=> handleChange(name)}>ChangeUser</button>
    </div>
    </>
  )
}

export default ChangeUser;