"use client";

import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage());
    const tooggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, tooggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
