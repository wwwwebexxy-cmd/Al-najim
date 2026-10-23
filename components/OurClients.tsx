"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./OurClients.module.css";

const industries = [
  { title: "Manufacturing", description: "Material handling products and systems that improve operational efficiency." },
  { title: "Assembly", description: "Storage solutions planned around assembly operations and workflow." },
  { title: "Distribution Centres", description: "Racking and shelving systems for organised product movement." },
  { title: "Warehousing", description: "Practical storage systems that help make better use of warehouse space." },
  { title: "Storage Facilities", description: "Integrated solutions designed to reduce cost and increase customer satisfaction." },
];

export default function OurClients() {
  return (
    <section className="py-20 brand-section" id="our-clients">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center mb-12">Industries We Serve</h2>
        </ScrollReveal>

        <div className={styles.industryGrid}>
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} direction="up" delay={0.1 + (index * 0.1)}>
              <article className={styles.industryCard}>
                <h3 className={styles.industryTitle}>{industry.title}</h3>
                <p className={styles.industryDescription}>{industry.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
