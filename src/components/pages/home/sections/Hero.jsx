"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/home/homeherosction/a_professional_hero_banner_image_for_a_hospital_management_system._the_scene.png",
    alt: "Hospital Management System",
  },
  {
    src: "/home/homeherosction/a_professional_hero_banner_image_for_a_pharmacy_management_system._the_scene.png",
    alt: "Pharmacy Management System",
  },
  {
    src: "/home/homeherosction/a_high_quality_professional_hero_banner_image_for_a_pathology_management.png",
    alt: "Pathology Management System",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-[85vh] min-h-[360px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden bg-slate-900 font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Responsive indicator dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 md:h-2.5 rounded-full transition-all ${
              index === current ? "w-6 md:w-8 bg-white" : "w-2 md:w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
