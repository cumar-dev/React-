import React from 'react'
import { Outlet } from 'react-router-dom';
import Navlinks from './Component/Navlinks';

const App = () => {
  return (
    <>
    <Navlinks />
    {/* <div className='mt-6'>
      <Outlet />
    </div> */}
    </>
  )
}

export default App;