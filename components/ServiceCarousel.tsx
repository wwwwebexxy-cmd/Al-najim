"use client";

import React from "react";
import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";
import { serviceCategories } from "./serviceCategories";

export default function ServiceCarousel() {
  return (
    <section className="py-20 brand-section overflow-hidden" id="services">
      <div className="container mb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient text-center">Products &amp; Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle text-center mx-auto">
            The services we offer are not limited to racking but:
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {serviceCategories.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={0.1 + index * 0.05}>
              <div className={styles.card}>
                <img src={service.image} alt={service.title} className={styles.cardImage} />
                <div className={styles.overlay}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
