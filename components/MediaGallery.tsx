import styles from "./MediaGallery.module.css";

const projectImages = Array.from({ length: 87 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(3, "0");

  return {
    src: `/media/image-${imageNumber}.webp`,
    alt: `Al Najim project image ${index + 1}`,
  };
});

const projectVideos = [
  { src: "/media/video-02.mp4" },
];

export default function MediaGallery() {
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

        <div className={styles.galleryGrid}>
          {projectImages.map((image) => (
            <figure key={image.src} className={styles.imageCard}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
