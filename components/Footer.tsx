import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/al-najim-logo-horizontal.webp" alt="Al Najim Al Satie Steel Shelfs Trading logo" className={styles.logoImage} />
          </div>
          <p className={styles.description}>
            A Complete Storage Solution for material handling, warehousing and storage facilities.
          </p>
          <div className={styles.socialLinks} aria-label="Social links">
            <a
              href="https://www.linkedin.com/company/alnajimalsatie/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Al Najim Al Satie Trading on LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Company</h4>
          <a href="#about" className={styles.link}>About Our Company</a>
          <a href="#services" className={styles.link}>Products &amp; Services</a>
          <a href="#features" className={styles.link}>Our Solutions</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Contact</h4>
          <a href="https://www.steelrack.co" target="_blank" rel="noopener noreferrer" className={styles.link}>www.steelrack.co</a>
          <a href="mailto:najimsatiracks@gmail.com" className={styles.link}>najimsatiracks@gmail.com</a>
          <a href="tel:+971507146645" className={styles.link}>+971 50 714 6645</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Office</h4>
          <span className={styles.link}>Post Box: 1747 Sharjah, UAE</span>
          <span className={styles.link}>06-510-4993</span>
          <a href="#contact" className={styles.link}>Contact Us</a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Al Najim Al Satie Steel Shelfs Trdg. All rights reserved.</p>
      </div>
    </footer>
  );
}
