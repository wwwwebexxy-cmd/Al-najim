"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ScrollMarquee.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const marqueeText = "PALLET RACKS - HEAVY DUTY RACKS - SHELVING - FABRICATION - SHADES - ";

const ScrollMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "top top",
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${styles.viewport} brand-strip text-white flex items-center border-y`}>
      <div ref={textRef} className={styles.track}>
        <span className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">{marqueeText}</span>
        <span aria-hidden="true" className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">{marqueeText}</span>
      </div>
    </div>
  );
};

export default ScrollMarquee;
