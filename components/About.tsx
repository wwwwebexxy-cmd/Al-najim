import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <ScrollReveal direction="right" className={styles.imageMain}>
            <img
              src="/media/image-023.webp"
              alt="Industrial warehouse racking system"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.3} className={styles.imageOverlap}>
            <img
              src="/media/image-062.webp"
              alt="Material handling and storage solution"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ScrollReveal>
        </div>
        <div className={styles.textContent}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title text-gradient" style={{ textAlign: "left", margin: 0 }}>About Our Company</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className={styles.heading}>AL NAJIM AL SATIE STEEL SHELFS TRDG</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.paragraph}>
              We are a leading manufacturer and integrator of material handling products and systems for improving operational efficiency in manufacturing, assembly, distribution centres, warehousing and storage facilities.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className={styles.paragraph}>
              We are uniquely qualified to assist you in planning and executing your material handling systems to reduce cost and increase customer satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
