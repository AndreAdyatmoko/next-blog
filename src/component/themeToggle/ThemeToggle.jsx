"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import ThemeContext from "@/context/ThemeContext";

const ThemeToggle = () => {

const {tooggle, theme} = useContext(ThemeContext);

console.log(theme);

  return (
    <div className={styles.container} onClick={tooggle}>
      <img src="/moon.png" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <img src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
