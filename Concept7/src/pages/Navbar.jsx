import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <div className='bg-blue-800 w-full p-5 text-white'>
      <nav className='flex justify-center items-center gap-5'>
        <a className={pathname === "/" ? "active" : undefined} href="/">Home</a>
        <a className={pathname === "/dashboard" ? "active": undefined} href="/dashboard">Dashboard</a>
        <a className={pathname === "/product" ? "active" : undefined} href="/product">Products</a>
      </nav>
    </div>
  )
}

export default Navbar;