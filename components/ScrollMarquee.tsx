"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden brand-strip text-white py-12 md:py-24 2xl:py-32 flex items-center border-y">
      <div ref={textRef} className="flex whitespace-nowrap font-black text-[15vw] uppercase leading-none tracking-tighter text-transparent" style={{ width: "fit-content", WebkitTextStroke: "2px white" }}>
        <span className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">{marqueeText}</span>
        <span className="pr-8 md:pr-16 lg:pr-24 2xl:pr-32">{marqueeText}</span>
      </div>
    </div>
  );
};

export default ScrollMarquee;
