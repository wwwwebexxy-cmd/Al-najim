"use client";

import React from "react";
import styles from "./ServiceCarousel.module.css";
import ScrollReveal from "./ScrollReveal";

const allServices = [
  { title: "Pallet Racks", image: "/media/image-001.webp" },
  { title: "Heavy Duty Racks", image: "/media/image-057.webp" },
  { title: "Supermarket Shelving & Storage System", image: "/media/image-055.webp" },
  { title: "Slotted Angle Shelves", image: "/media/image-087.webp" },
  { title: "Mezzanine Flooring with Rack Support", image: "/media/image-066.webp" },
  { title: "Aluminium Fabrication", image: "/media/image-070.webp" },
  { title: "Structural Fabrication", image: "/media/image-010.webp" },
  { title: "MS Stainless Steel Fabrication", image: "/media/image-072.webp" },
  { title: "Car Parking Sheds", image: "/media/image-002.webp" },
  { title: "Fence Cabana with Wooden Bench", image: "/media/image-005.webp" },
  { title: "Retractable Shades", image: "/media/image-064.webp" },
  { title: "Interior Decor", image: "/media/image-076.webp" },
];

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
          {allServices.map((service) => (
            <div key={service.title} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
