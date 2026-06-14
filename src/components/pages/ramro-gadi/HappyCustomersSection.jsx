"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Medical Student",
    quote:
      "Fast results and flawless lab dashboard tracking. Saved me weeks of manual follow-ups.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Prerna Joshi",
    role: "Lab Coordinator",
    quote:
      "The interface integration is top tier. Beautiful digital layouts without clinical clutter.",
    image:
      "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Siddharth Thapa",
    role: "Fitness Trainer",
    quote:
      "Extremely reliable tracking updates. Highly recommended for premium diagnostic lookups.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Deepa Rai",
    role: "Clinic Manager",
    quote:
      "Simple onboarding workspace. My patients love the real-time status update feeds.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Rohan Shrestha",
    role: "Software Architect",
    quote:
      "Clean components, robust layout integrity, and zero latency during high-load tests.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Ananya Mishra",
    role: "Nutritionist",
    quote:
      "I recommend this platform to all my clients. The clean metrics make data digestible.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Amit Rajbanshi",
    role: "Operations Lead",
    quote:
      "Turned our massive operational paperwork bottlenecks into a single automated dashboard run.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Kriti Karki",
    role: "Research Associate",
    quote:
      "Data integrity rules are airtight. Clean filtering modules make historical checks simple.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "Manish Yadav",
    role: "Health Blogger",
    quote:
      "Transparent process tracking from day one. Exactly the standard the medical field needs.",
    image:
      "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    name: "Pooja Chaudhary",
    role: "System Administrator",
    quote:
      "Role separations and permission modules map perfectly to institutional hierarchies.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Suresh Tamang",
    role: "Emergency Unit Chief",
    quote:
      "When response metrics matter, this pipeline performs. Instant text-triggers work flawlessly.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    name: "Nisha Pradhan",
    role: "Diagnostic Consultant",
    quote:
      "A polished application aesthetic that removes friction for senior citizen users.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 13,
    name: "Bikram Khadka",
    role: "Bioinformatics Engineer",
    quote:
      "Clean JSON models and zero redundant tracking calculations. Scalable code architecture.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 14,
    name: "Sunita Maharjan",
    role: "Wellness Specialist",
    quote:
      "Every single record panel is crisp, minimal, and premium. A design masterpiece.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 15,
    name: "Ayush Bhattarai",
    role: "Frontend Developer",
    quote:
      "Component layouts maintain exact pixel ratios on mobile screens. Highly modular.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 16,
    name: "Riya Basnet",
    role: "Clinical Pharmacist",
    quote:
      "Secure user validation protocols eliminate cross-user access completely. Airtight logic.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 17,
    name: "Dipendra Shah",
    role: "Hospital Board Director",
    quote:
      "Reduced our patient data retrieval times by nearly eighty percent. Exceptional build.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 18,
    name: "Alisha Gurung",
    role: "Pediatric Nurse",
    quote:
      "Clean iconography sets and scannable visual indicators prevent day-to-day data entry mistakes.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 19,
    name: "Gaurav Adhikari",
    role: "Data Analyst",
    quote:
      "Indices are optimized well. Database payload delivery remains swift across thousands of rows.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 20,
    name: "Meera Tuladhar",
    role: "Pathology Head",
    quote:
      "The absolute standard for modern diagnostic software infrastructure. Reliable 24/7 run.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
];

const CARD_WIDTH = 290;
const STEP = CARD_WIDTH + 20;

export default function HappyCustomers() {
  const [active, setActive] = useState(2);
  const trackRef = useRef(null);
  const animating = useRef(false);

  const getCardStyle = (index) => {
    const offset = index - active;
    const absOffset = Math.abs(offset);

    if (absOffset > 2) {
      return {
        opacity: 0,
        pointerEvents: "none",
        x: offset * STEP,
        scale: 0.6,
        rotateY: 0,
        zIndex: 0,
      };
    }

    const x = offset * (STEP * 0.85);
    const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.9 : 0.8;
    const zIndex = 20 - absOffset;
    const rotateY = offset * -10;
    const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.4;

    return {
      x,
      scale,
      zIndex,
      rotateY,
      opacity,
      pointerEvents: absOffset === 0 ? "auto" : "none",
    };
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".customer-card");

    cards.forEach((card, index) => {
      const style = getCardStyle(index);

      if (style.opacity === 0) {
        gsap.set(card, { autoAlpha: 0, pointerEvents: "none" });
        return;
      }

      gsap.to(card, {
        x: style.x,
        scale: style.scale,
        rotateY: style.rotateY,
        autoAlpha: style.opacity,
        zIndex: style.zIndex,
        pointerEvents: style.pointerEvents,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          animating.current = false;
        },
      });
    });
  }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-20 px-4 sm:px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Simple Header */}
        <div className="text-left mb-16">
          <p className="text-xxs sm:text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 lg:mb-3">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
            Our Happy Customers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
            Real insights from professionals and administrators running digital workflows daily.
          </p>
        </div>

        {/* 3D Track */}
        <div
          className="relative flex items-center justify-center w-full"
          style={{ height: 380 }}
        >
          <div
            ref={trackRef}
            className="relative flex items-center justify-center w-full h-full"
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            {slides.map((slide, index) => {
              const isActive = index === active;

              return (
                <div
                  key={slide.id}
                  className="customer-card absolute cursor-pointer select-none"
                  style={{
                    width: CARD_WIDTH,
                    left: "50%",
                    marginLeft: -CARD_WIDTH / 2,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    if (!isActive) setActive(index);
                  }}
                >
                  <div
                    className={`w-full rounded-xl bg-white border overflow-hidden flex flex-col transition-all duration-300 ${
                      isActive
                        ? "border-emerald-500 shadow-md"
                        : "border-slate-200 opacity-60"
                    }`}
                    style={{ height: 340 }}
                  >
                    {/* Customer Portrait Image Box */}
                    <div className="relative w-full h-[52%] bg-slate-50 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    {/* Profile Information Block */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>
                          {slide.name}
                        </h4>
                        <p className="text-xxs font-medium text-emerald-600 mt-0.5">
                          {slide.role}
                        </p>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-3 mt-2 leading-relaxed">
                        &ldquo;{slide.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Navigation Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-emerald-500"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
