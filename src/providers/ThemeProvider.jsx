"use client";

import React from 'react'
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider