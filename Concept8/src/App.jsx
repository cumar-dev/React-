import React from 'react'
import Navlinks from './Components/Navlinks';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
   <>
   <Navlinks />
   <div className='p-5'>
    <Outlet />
   </div>
   </>
  )
}

export default App;