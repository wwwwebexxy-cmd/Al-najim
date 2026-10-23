import styles from "./MediaGallery.module.css";

const projectImages = Array.from({ length: 87 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(3, "0");

  return {
    src: `/media/image-${imageNumber}.jpeg`,
    alt: `Al Najim project image ${index + 1}`,
    label: `Project image ${imageNumber}`,
  };
});

const projectVideos = [
  { src: "/media/video-01.mp4", label: "Project video 01" },
  { src: "/media/video-02.mp4", label: "Project video 02" },
];

export default function MediaGallery() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className="section-title text-gradient">Projects &amp; Media</h2>
        <p className="section-subtitle">
          Explore our latest storage, shelving, fabrication, shade and interior projects.
        </p>

        <div className={styles.videoGrid}>
          {projectVideos.map((video) => (
            <figure key={video.src} className={styles.videoCard}>
              <video autoPlay muted loop playsInline preload="auto" className={styles.video}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption>{video.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {projectImages.map((image) => (
            <figure key={image.src} className={styles.imageCard}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
