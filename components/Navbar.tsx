"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="#home">
            <img src="/al-najim-logo.png" alt="Al Najim Al Satie Steel Shelfs Trading logo" className={styles.brandLogo} />
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.mobileToggle} ${isOpen ? styles.mobileToggleOpen : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>

        <div
          id="mobile-navigation"
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          <Link href="#home" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="#services" className={styles.navLink} onClick={() => setIsOpen(false)}>Products &amp; Services</Link>
          <Link href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
