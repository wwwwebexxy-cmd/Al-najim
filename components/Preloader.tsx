"use client";

import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

    if (hasSeenPreloader) {
      const skipTimer = setTimeout(() => setShowPreloader(false), 0);
      return () => clearTimeout(skipTimer);
    }

    document.body.style.overflow = "hidden";

    const startAnimationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2900);

    const removePreloaderTimer = setTimeout(() => {
      setShowPreloader(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("hasSeenPreloader", "true");
    }, 4400);

    return () => {
      clearTimeout(startAnimationTimer);
      clearTimeout(removePreloaderTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!showPreloader) return null;

  return (
    <div className={`preloader-container ${isAnimating ? "is-animating" : ""}`}>
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>

      <div className={`preloader-content ${isAnimating ? "fade-out" : ""}`}>
        <div className="logo-box">
          <img src="/al-najim-logo.png" alt="Al Najim Al Satie Steel Shelfs Trading" className="preloader-logo" />
        </div>
        <div className="logo-text">
          <h1 className="title">AL NAJIM AL SATIE</h1>
          <h2 className="subtitle">STEEL SHELFS TRDG</h2>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
