"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef(null);
  const heartbeatRef = useRef(null);
  const statsRef = useRef([]);
  const uptimeRef = useRef(null);
  const pathRef = useRef(null);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. EKG Background Animation
      gsap.to(heartbeatRef.current, {
        x: "-50%",
        duration: 15,
        repeat: -1,
        ease: "none",
      });

      // 2. Floating Stats Animation
      if (statsRef.current.length > 0) {
        statsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -10,
              duration: 2 + i * 0.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.1,
            });
          }
        });
      }

      // 3. Analytical Sparkline Animation
      const path = pathRef.current;
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
          },
        });
      }

      // 4. Counting Number Animation (Uptime)
      const uptimeTarget = { val: 0 };
      gsap.to(uptimeTarget, {
        val: 99.9,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
        },
        onUpdate: () => {
          if (uptimeRef.current) {
            uptimeRef.current.innerText = uptimeTarget.val.toFixed(1) + "%";
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mobile carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* CHANGED: overflow-visible to overflow-hidden to stop image bleeding */}
      <section
        ref={containerRef}
        className="relative min-h-[85vh] flex flex-col justify-center bg-navy-950 overflow-hidden z-10"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%), url('/medimasterhomehero.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* EKG Layer */}
        <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
          <svg
            ref={heartbeatRef}
            className="h-full w-[200%]"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 L200,50 L210,40 L220,60 L230,20 L240,80 L250,40 L260,50 L500,50 L510,40 L520,60 L530,20 L540,80 L550,40 L560,50 L1000,50"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fluid Tech for <br />
              <span className="text-teal-400">Modern Healthcare</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Precision-engineered systems that move as fast as modern medicine.
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-glowTeal hover:bg-teal-600 transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        {/* Wave Footer Line */}
        <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
          <svg
            className="relative block w-full h-[80px]"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <path
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
