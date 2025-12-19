import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
const Navlinks = () => {
  const {logout, isAuthanticted } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = ()=> {
    logout();
    navigate('/logIn');
  }
  return (
    <div className='bg-gray-50 py-6 px-6'>
        <header className='bg-white w-full shadow-md p-6'>
         <div className='max-w-4xl mx-auto'>
         <div className='flex justify-between items-center'>
         <div>
            <h1 className='text-2xl font-bold '>my logo</h1>
         </div>
         <nav className='flex items-center gap-3'>
        <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='login'>Login</NavLink>
        {
          isAuthanticted  && (
            <>
            <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='course'>Courses</NavLink>
        <button onClick={handleLogout} className='bg-orange-600 text-white py-2 px-3 rounded w-[100px] cursor-pointer'>LogOut</button>
        </>
          )
        }
        
         </nav>
         </div>
         </div>
        </header>
    </div>
  )
}

export default Navlinks