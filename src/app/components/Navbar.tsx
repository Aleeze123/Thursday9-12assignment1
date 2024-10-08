'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import styles from "@/app/styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Aleeza</h1> {/* Logo text */}
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '≡'}
        </div>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={toggleMenu} className={styles.navLink}>Home</Link>
            <Link href="/about" onClick={toggleMenu} className={styles.navLink}>About</Link>
            <Link href="/services" onClick={toggleMenu} className={styles.navLink}>Services</Link>
            <Link href="/contact" onClick={toggleMenu} className={styles.navLink}>Contact</Link>
          </nav>
        </div>
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
