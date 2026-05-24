"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ECGBackground() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const path = lineRef.current;
    const length = path.getTotalLength();

    // Initial setup
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Infinite drawing animation (heartbeat flow)
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "none",
      repeat: -1,
    });

    // Floating dots animation
    const dots = containerRef.current?.querySelectorAll(".ecg-dot");
    if (dots) {
      dots.forEach((dot, i) => {
        gsap.to(dot, {
          y: -20,
          duration: 3 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.8,
        });
      });
    }

    return () => {
      gsap.killTweensOf(path);
      if (dots) {
        dots.forEach((dot) => gsap.killTweensOf(dot));
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Hex Grid Background */}
      <div className="absolute inset-0 opacity-20 animate-move-grid"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #2dd4bf 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ECG Line SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        <path
          ref={lineRef}
          d="M0,150 
             L80,150 
             L120,140 
             L160,160 
             L200,150 
             L240,150 
             L280,150 
             L320,40 
             L360,260 
             L400,150 
             L460,150 
             L520,120 
             L580,180 
             L640,150 
             L700,150 
             L760,150 
             L820,90 
             L880,210 
             L940,150 
             L1000,150"
          fill="none"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Glow Dots */}
      <div className="ecg-dot absolute w-2.5 h-2.5 rounded-full top-[30%] left-[20%]"
        style={{
          background: "#2dd4bf",
          boxShadow: "0 0 20px #2dd4bf",
          opacity: 0.7,
        }}
      />
      <div className="ecg-dot absolute w-2.5 h-2.5 rounded-full top-[60%] left-[50%]"
        style={{
          background: "#2dd4bf",
          boxShadow: "0 0 20px #2dd4bf",
          opacity: 0.7,
        }}
      />
      <div className="ecg-dot absolute w-2.5 h-2.5 rounded-full top-[40%] left-[80%]"
        style={{
          background: "#2dd4bf",
          boxShadow: "0 0 20px #2dd4bf",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
