import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src="/facebook.png" alt="facebook" width={24} height={24} />
        <img src="/instagram.png" alt="instagram" width={24} height={24} />
        <img src="/github.png" alt="github" width={24} height={24} />
        <img src="/linkedin.png" alt="linkedIn" width={24} height={24} />
      </div>
      <div className={styles.logo}>Adyatmoko Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
