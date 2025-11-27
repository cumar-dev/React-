import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import "../App";

const NavLinks = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c"; 
      document.body.style.color = "#f9fafb"; 
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#f9fafb";
      document.body.style.color = "#1a202c"; 
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c";
      document.body.style.color = "#f9fafb";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#f9fafb";
      document.body.style.color = "#1a202c";
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen py-6 px-6">
      <div className="bg-white dark:bg-gray-800 shadow-md w-full p-4 transition-colors duration-300">
        <header className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Logo</h1>

          <nav className="flex items-center gap-4 text-[16px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-green-700"
                  : "text-gray-800 dark:text-gray-200"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-green-700"
                  : "text-gray-800 dark:text-gray-200"
              }
              to="/About"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-green-700"
                  : "text-gray-800 dark:text-gray-200"
              }
              to="/Contact"
            >
              Contact
            </NavLink>
          </nav>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="px-3 py-2 w-[100px] rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors">
            Login
          </button>
        </header>
      </div>

      <Outlet />
    </div>
  );
};

export default NavLinks;
