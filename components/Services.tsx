import styles from "./Services.module.css";
import ScrollReveal from "./ScrollReveal";

const services = [
  { title: "Pallet Racks", image: "/media/image-001.jpeg" },
  { title: "Heavy Duty Racks", image: "/media/image-057.jpeg" },
  { title: "Supermarket Shelving & Storage System", image: "/media/image-055.jpeg" },
  { title: "Slotted Angle Shelves", image: "/media/image-087.jpeg" },
  { title: "Mezzanine Flooring with Rack Support", image: "/media/image-066.jpeg" },
  { title: "Aluminium Fabrication", image: "/media/image-070.jpeg" },
  { title: "Structural Fabrication", image: "/media/image-010.jpeg" },
  { title: "MS Stainless Steel Fabrication", image: "/media/image-072.jpeg" },
  { title: "Car Parking Sheds", image: "/media/image-002.jpeg" },
  { title: "Fence Cabana with Wooden Bench", image: "/media/image-005.jpeg" },
  { title: "Retractable Shades", image: "/media/image-064.jpeg" },
  { title: "Interior Decor", image: "/media/image-076.jpeg" },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="section-title text-gradient">Products &amp; Services</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="section-subtitle">The services we offer are not limited to racking but:</p>
        </ScrollReveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.title} direction="up" delay={0.2 + (index * 0.05)}>
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
