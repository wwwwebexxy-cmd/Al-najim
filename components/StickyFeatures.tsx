"use client";

import styles from "./StickyFeatures.module.css";
import ScrollReveal from "./ScrollReveal";

const features = [
  { id: 1, title: "Warehouse Racking", description: "Material handling systems for warehousing and storage facilities.", image: "/media/image-080.webp" },
  { id: 2, title: "Supermarket Shelving", description: "Shelving and storage systems for distribution centres.", image: "/media/image-055.webp" },
  { id: 3, title: "Mezzanine Flooring", description: "Mezzanine flooring with rack support for efficient storage.", image: "/media/image-066.webp" },
  { id: 4, title: "Aluminium Fabrication", description: "Fabrication solutions planned around your operational needs.", image: "/media/image-070.webp" },
  { id: 5, title: "Car Parking Sheds", description: "Shade structures and car parking sheds for practical protection.", image: "/media/image-060.webp" },
  { id: 6, title: "Interior Decor", description: "Interior decor solutions to complete commercial environments.", image: "/media/image-076.webp" },
];

export default function StickyFeatures() {
  return (
    <section id="features" className={styles.sectionContainer}>
      <div className="container">
        <div className={styles.splitLayout}>
          <div className={styles.textContent}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title text-gradient" style={{ textAlign: "left", margin: 0 }}>Our Solutions</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className={styles.description}>
                We plan and execute material handling systems for manufacturing, assembly, distribution centres, warehousing and storage facilities.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.imageContent}>
            <ScrollReveal direction="left" delay={0.2}>
              <img src="/media/image-080.webp" alt="Al Najim material handling and storage solutions" className={styles.mainImage} />
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {features.concat(features).map((feature, index) => (
                <div key={`${feature.id}-${index}`} className={styles.slideCard}>
                  <img src={feature.image} alt={feature.title} className={styles.slideImage} />
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>{feature.title}</h3>
                    <p className={styles.slideDesc}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
