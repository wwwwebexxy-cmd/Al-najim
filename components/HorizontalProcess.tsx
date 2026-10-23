"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cards = [
  { step: "01", title: "Assess", desc: "Understand your manufacturing, assembly, distribution, warehousing or storage requirement." },
  { step: "02", title: "Plan", desc: "Plan a material handling system around your facility and operational needs." },
  { step: "03", title: "Execute", desc: "Execute the system with racking, shelving, fabrication and shade solutions." },
  { step: "04", title: "Improve", desc: "Improve operational efficiency, reduce cost and increase customer satisfaction." },
];

const HorizontalProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !wrapperRef.current) return;

      const getScrollAmount = () => wrapperRef.current!.offsetWidth - sectionRef.current!.offsetWidth;

      gsap.to(wrapperRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden brand-section flex items-center">
      <div ref={wrapperRef} className="flex h-full w-[400%]">
        {cards.map((card, idx) => (
          <div key={idx} className="h-full w-1/4 flex flex-col justify-center px-6 md:px-16 lg:px-32 xl:px-48 2xl:px-80 relative">
            <h2 className="text-[28vw] md:text-[25vw] xl:text-[22vw] 2xl:text-[18vw] font-black leading-none text-brand-ink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
              {card.step}
            </h2>
            <div className="z-10">
              <span className="text-lg md:text-2xl lg:text-3xl 2xl:text-5xl text-brand-accent font-mono mb-2 md:mb-4 2xl:mb-8 block">
                Step // {card.step}
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-[10rem] font-bold mb-4 md:mb-6 2xl:mb-10 tracking-tight">
                {card.title}.
              </h3>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl 2xl:text-5xl text-brand-muted max-w-sm sm:max-w-xl md:max-w-3xl 2xl:max-w-6xl leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalProcess;
