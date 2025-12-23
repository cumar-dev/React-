import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navlinks = () => {
  const {logout, isAuthanticted } = useContext(AuthContext);
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = ()=> {
    logout();
    navigate('/logIn');
  }
  return (
    <div className='bg-gray-50 py-6 px-6'>
        <header className='bg-white w-full shadow p-6'>
         <div className='max-w-4xl mx-auto'>
         <div className='flex justify-between items-center'>
         <div>
            <h1 className='text-2xl font-bold '>my logo</h1>
         </div>
         <nav className='flex items-center gap-3 hidden sm:ml-6 sm:flex sm:space-x-8'>
        <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='/login'>Login</NavLink>
        {
          isAuthanticted  && (
            <>
            <NavLink className={({isActive}) => isActive ? "text-green-700 font-bold underline" : undefined} to='/course'>Courses</NavLink>
        <button onClick={handleLogout} className='bg-orange-600 text-white py-2 px-3 rounded w-[100px] cursor-pointer'>LogOut</button>
        </>
          )
        }
        
         </nav>
         </div>
         </div>
         {/* mobile menue */}
         {
          isMenueOpen && (
            <div className='relative'>
            <div className='sm:hidden absolute top-full left-0 w-full bg-white z-40'>
              <div className='mt-2 space-y-2 rounded-lg shadow-md  ring-1 ring-black/5'>
                    <NavLink className={({ isActive }) =>
        `block px-4 py-3 text-sm font-medium rounded-md border-l-4 border-orange-500 text-base font-medium
        ${
          isActive
            ? "bg-orange-50 text-orange-600"
            : "text-gray-700 hover:bg-gray-100"
        }`
      } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
        `block px-4 py-3 text-sm font-medium rounded-md border-l-4 border-orange-500 text-base font-medium
        ${
          isActive
            ? "bg-orange-50 text-orange-600"
            : "text-gray-700 hover:bg-gray-100"
        }`
      } to='/login'>Login</NavLink>
        {
          isAuthanticted  && (
            <>
            <NavLink className={({ isActive }) =>
        `block px-4 py-3 text-sm font-medium rounded-md border-l-4 border-orange-500 text-base font-medium
        ${
          isActive
            ? "bg-orange-50 text-orange-600"
            : "text-gray-700 hover:bg-gray-100"
        }`
      } to='/course'>Courses</NavLink>
        <button onClick={handleLogout} className='block px-4 py-3 text-sm font-medium rounded-md border-l-4 border-orange-500 text-base font-medium hover:bg-gray-100 w-full text-start'>LogOut</button>
        </>
          )
        }
              </div>
            </div>
            </div>
          )
         }

         {/* hambrger */}
         <div className='sm:hidden relative mr-2 flex items-center'>
          <div className='absolute right-0 top-[-30px] '>
          <button className='inline-flex size={24} items-center justify-center
           p-2 rounded-md text-gray-400hover:text-gray-600 focus:outline-none 
           focus:ring-2 focus:ring-inset focus:ring-orange-500"' onClick={() => setIsMenueOpen(prev => !prev)}>
            {
              isMenueOpen ? <IoCloseOutline className="w-6 h-6 block" /> : <CiMenuBurger className="w-6 h-6 block" />
            }
           </button>
          </div>
         </div>
        </header>
    </div>
  )
}

export default Navlinks