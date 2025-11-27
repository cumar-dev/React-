import React from 'react'
import ThemeProvider from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import UserProvider from './UserProvider'
import Navbar from './navbar'
import ChangeUser from './ChangeUser'
import AppProvider from './AppProvider'
import CounterComponent from './CounterComponent'
import ToggleComponent from './ToggleComponent'
const App = () => {
  return (
    <>
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
    <UserProvider>
      <Navbar />
      <ChangeUser />
    </UserProvider>
    <AppProvider>
      <CounterComponent />
      <ToggleComponent />
    </AppProvider>
    </>
  )
}

export default App