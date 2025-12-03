import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Navlinks = () => {
  return (
    <>
   <div className='bg-gray-50 py-6 px-6'>
     <header className='bg-white w-full shadow-md p-5'>
     <div className='max-w-4xl mx-auto'>
       <div className='flex items-center justify-between'>
        <div>
            <h1 className='text-2xl font-bold text-gray-800'>My logo</h1>
        </div>
        <nav className='flex items-center gap-5'>
            <NavLink to={'/'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Home</NavLink>
             <NavLink to={'/about'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>About</NavLink>
             <NavLink to={'/product'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Products</NavLink>
             <NavLink to={'/path'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Path_Name</NavLink>
             <NavLink to={'/dashboard'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Dashboard</NavLink>
             <NavLink to={'/nav'} className={({isActive}) => isActive ? "text-green-700 underline" : undefined}>Navbar</NavLink>
        </nav>
       </div>
     </div>
     </header>
     <div className='mt-5'>
        <Outlet />
     </div>
   </div>
    </>
  )
}

export default Navlinks;