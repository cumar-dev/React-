import React, { useContext } from 'react'
import themeContext from './ThemeContext'
const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(themeContext);
  return (
    <>
    <div 
    style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#333" : "#fff",
           padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
    }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Them</button>
    </div>
    </>
  )
}

export default ThemeSwitcher