import React from 'react'
import { Outlet } from 'react-router'
import NavLinks from './Components/NavLinks'

const App = () => {
  return (
    <>
    <NavLinks />
    <main>
    <Outlet />
    </main>
    
    </>
  )
}

export default App