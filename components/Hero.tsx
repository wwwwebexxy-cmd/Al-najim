import styles from "./Hero.module.css";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.diagonalWrapper}>
        <div className={styles.topLeftImage}>
          <div className={styles.overlayContent}>
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className={styles.title}>
                <span style={{ color: "var(--foreground)" }}>A Complete</span><br />
                <span style={{ color: "var(--primary)" }}>Storage Solution</span>
              </h1>
            </ScrollReveal>
          </div>
        </div>
        <div className={styles.bottomRightImage}>
          <div className={styles.overlayContentRight}>
            <ScrollReveal direction="up" delay={0.4}>
              <p className={styles.subtitle}>
                We are a leading manufacturer and integrator of material handling products and systems for improving operational efficiency in manufacturing, assembly, distribution centres, warehousing and storage facilities. We are uniquely qualified to assist you in planning and executing your material handling systems to reduce cost and increase customer satisfaction.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6}>
              <div className={styles.ctaGroup}>
                <a href="#services" className={styles.primaryBtn}>Explore Our Services</a>
                <a href="#contact" className={styles.secondaryBtn}>Contact Us</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className={styles.wavyDivider}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C320,150 420,-50 740,50 C1060,150 1160,-50 1440,50 L1440,100 L0,100 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
