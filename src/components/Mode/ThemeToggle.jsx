// src/components/ThemeToggle.js
import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para verificar la preferencia del usuario al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      const newTheme = !prevState;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <button onClick={toggleTheme} className=" text-blueCompany ">
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
