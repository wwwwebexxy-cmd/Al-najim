"use client";

import { FaBuilding, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoColumn}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaPhoneAlt /></span>
              <div className={styles.infoText}>
                <a href="tel:+971507146645">+971 50 714 6645</a>
                <a href="tel:+971558219504">+971 55 821 9504</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaEnvelope /></span>
              <div className={styles.infoText}>
                <a href="mailto:najimsatiracks@gmail.com">najimsatiracks@gmail.com</a>
                <a href="mailto:john.alnajim@gmail.com">john.alnajim@gmail.com</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.3}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaMapMarkerAlt /></span>
              <span className={styles.infoText}>Post Box: 1747 Sharjah, UAE</span>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.4}>
            <div className={styles.infoBlock}>
              <span className={styles.icon}><FaBuilding /></span>
              <span className={styles.infoText}>Office: 06-510-4993</span>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.mapColumn}>
          <ScrollReveal direction="left" delay={0.2} className={styles.contactCard}>
            <img src="/al-najim-logo.png" alt="Al Najim Al Satie Steel Shelfs Trading" className={styles.contactLogo} />
            <p className={styles.contactTagline}>A Complete Storage Solution</p>
            <div className={styles.websiteLine}>
              <FaGlobe />
              <a href="https://www.steelrack.co" target="_blank" rel="noopener noreferrer">www.steelrack.co</a>
            </div>
            <p className={styles.contactNote}>
              Planning and executing material handling systems to reduce cost and increase customer satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
