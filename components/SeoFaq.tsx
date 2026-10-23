import styles from "./SeoFaq.module.css";

const faqItems = [
  {
    question: "What does Al Najim Al Satie Steel Shelfs Trdg provide?",
    answer: "Al Najim Al Satie Steel Shelfs Trdg provides material handling and storage solutions including pallet racks, heavy duty racks, supermarket shelving, mezzanine flooring, steel and aluminium fabrication, structural fabrication, car parking sheds, retractable shades and interior decor.",
  },
  {
    question: "Which industries does Al Najim serve?",
    answer: "Al Najim serves manufacturing, assembly, distribution centres, warehousing and storage facilities with planned material handling products and systems.",
  },
  {
    question: "Where is Al Najim Al Satie Steel Shelfs Trdg located?",
    answer: "Al Najim Al Satie Steel Shelfs Trdg is located in Muweilah, Sharjah, United Arab Emirates. The company has Post Box 1747, Sharjah, UAE.",
  },
  {
    question: "How can I contact Al Najim Al Satie Steel Shelfs Trdg?",
    answer: "You can contact Al Najim by phone at +971 50 714 6645 or +971 55 821 9504, by email at najimsatiracks@gmail.com or john.alnajim@gmail.com, or through the contact section on this website.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SeoFaq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section-title text-gradient text-center">Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </section>
  );
}
