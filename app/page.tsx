import Hero from "../components/Hero";
import About from "../components/About";
import ServiceCarousel from "../components/ServiceCarousel";
import StickyFeatures from "../components/StickyFeatures";
import OurClients from "../components/OurClients";
import Contact from "../components/Contact";
import ScrollMarquee from "../components/ScrollMarquee";
import MediaGallery from "../components/MediaGallery";
import SeoFaq from "../components/SeoFaq";

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
      <Hero />
      <About />
      
      {/* Scroll Marquee Section */}
      <ScrollMarquee />
      
      <ServiceCarousel />
      
      <StickyFeatures />

      <MediaGallery />
      
      <OurClients />
      <SeoFaq />
      <Contact />
    </main>
  );
}

