import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = ()=> {
    login();
    navigate('/course');
  }
  return (
    <>
    <div className='max-w-4xl mx-auto my-3'>
      <div className='max-w-[400px] shadow-md rounded-md p-5'>
        <h2 className='text-2xl text-center text-gray-800 font-bold py-2'>Login Page</h2>
        <p className='text-gray-500 py-2 text-md'>Register The Login page as to go the course page</p>
        <button onClick={handleChange} className='bg-red-800 text-white rounded-md py-2 px-3 w-full mt-2 mb-2'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login;