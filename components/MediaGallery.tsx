"use client";

import { useState } from "react";
import styles from "./MediaGallery.module.css";
import { serviceCategories } from "./serviceCategories";

const projectImages = Array.from({ length: 87 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(3, "0");

  return {
    src: `/media/image-${imageNumber}.webp`,
    alt: `Al Najim project image ${index + 1}`,
    key: `project-${imageNumber}`,
  };
});

const projectVideos = [
  { src: "/media/video-02.mp4" },
];

export default function MediaGallery() {
  const [selectedServiceTitles, setSelectedServiceTitles] = useState<string[]>([]);
  const visibleServiceCategories = selectedServiceTitles.length
    ? serviceCategories.filter((service) => selectedServiceTitles.includes(service.title))
    : serviceCategories;
  const visibleImages = selectedServiceTitles.length
    ? visibleServiceCategories.flatMap((service) =>
        service.images.map((src, index) => ({
          src,
          alt: `${service.title} project image ${index + 1}`,
          key: `${service.title}-${src}`,
        }))
      )
    : projectImages;

  const toggleService = (title: string) => {
    setSelectedServiceTitles((currentTitles) =>
      currentTitles.includes(title)
        ? currentTitles.filter((currentTitle) => currentTitle !== title)
        : [...currentTitles, title]
    );
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.videoGrid}>
          {projectVideos.map((video) => (
            <figure key={video.src} className={styles.videoCard}>
              <video autoPlay muted loop playsInline preload="auto" className={styles.video}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </figure>
          ))}
        </div>

        <div className={styles.serviceFilter} aria-label="Filter service images">
          <button
            type="button"
            className={styles.showAllButton}
            aria-pressed={selectedServiceTitles.length === 0}
            onClick={() => setSelectedServiceTitles([])}
          >
            Show all images
          </button>
          <div className={styles.filterOptions}>
            {serviceCategories.map((service) => (
              <label key={service.title} className={styles.filterOption}>
                <input
                  type="checkbox"
                  checked={selectedServiceTitles.includes(service.title)}
                  onChange={() => toggleService(service.title)}
                />
                <span>{service.title}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.galleryGrid}>
          {visibleImages.map((image) => (
            <figure key={image.key} className={styles.imageCard}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
