import React, { useState } from 'react'
import themeContext from './ThemeContext'
const ThemeProvider = ({children}) => {
const [theme, setTheme] = useState('light');
const toggleTheme = ()=> {
    setTheme(prev=> (prev === "light" ? "dark" : "light"));
}
  return (
  <>
<themeContext.Provider value={{theme, toggleTheme}}>
   {children} 
</themeContext.Provider>
  </>
)
}

export default ThemeProvider