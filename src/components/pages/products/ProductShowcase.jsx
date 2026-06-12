"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductShowcase({ product, index }) {
  const isEven = index % 2 === 0;
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");
  const sectionRef = useRef(null);
  const imgContainerRef = useRef(null);
  const imgInnerRef = useRef(null);

  useEffect(() => {
    if (!imgContainerRef.current || !imgInnerRef.current || !sectionRef.current) return;

    let tt;

    const startAutoScroll = () => {
      const container = imgContainerRef.current;
      const inner = imgInnerRef.current;

      // compute how much we can scroll (inner height - container height)
      let overflow = inner.scrollHeight - container.clientHeight;
      if (overflow <= 10) {
        // image may not have fully loaded; try again shortly
        setTimeout(() => {
          overflow = inner.scrollHeight - container.clientHeight;
          if (overflow <= 10) return;
          startAutoScroll();
        }, 200);
        return;
      }

      // Tune duration based on overflow so longer screenshots scroll faster
      // New formula: 0.6s + overflow/800 px, clamped between 0.6 and 5s
      const duration = Math.min(Math.max(0.6 + overflow / 800, 0.6), 5);

      // animate translateY of inner div to reveal the rest of the tall image
      tt = gsap.to(inner, {
        y: -overflow,
        duration,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const resetAutoScroll = () => {
      if (tt) tt.kill();
      gsap.set(imgInnerRef.current, { y: 0 });
    };

    const trig = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      end: "bottom 20%",
      onEnter: () => startAutoScroll(),
      onEnterBack: () => startAutoScroll(),
      onLeave: () => resetAutoScroll(),
      onLeaveBack: () => resetAutoScroll(),
    });

    return () => {
      trig.kill();
      resetAutoScroll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid gap-8 items-center ${isEven ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
          {/* Left: image when even, content when odd */}
          {isEven ? (
            <div className="order-1 md:order-1">
              <div className="rounded-lg bg-gradient-to-br from-slate-50 to-white p-6 shadow-md h-full flex items-center justify-center">
                <div
                  ref={imgContainerRef}
                  className="w-full max-h-[320px] md:max-h-[560px] bg-slate-100 rounded-lg overflow-hidden"
                  // hide native scrollbars visually
                  style={{ scrollbarWidth: "none" }}
                >
                  {product.image ? (
                    <div ref={imgInnerRef} className="w-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} screenshot`}
                        width={920}
                        height={2000}
                        className="object-contain w-full"
                      />
                    </div>
                  ) : (
                    <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <rect width="220" height="140" rx="12" fill="#F8FAFC" />
                      <rect x="16" y="16" width="188" height="108" rx="8" fill="white" stroke="#E6EEF6" />
                      <circle cx="60" cy="70" r="28" fill={product.iconColor} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>{product.name}</h3>
              <p className="text-sm text-teal-600 font-semibold uppercase mt-2 mb-4">{product.tag}</p>
              <p className="text-slate-600 mb-4">{product.description}</p>
              <ul className="list-none text-slate-700 mb-6 space-y-1.5">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image
                      src="/products/mediproduct.png"
                      alt="feature bullet"
                      width={24}
                      height={24}
                      className="mt-0.5"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link href={`/products/${slug}`} className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-700">Learn More</Link>
                <Link href={`/contact?product=${slug}`} className="inline-block border border-slate-200 px-4 py-2 rounded-md text-slate-700 hover:bg-slate-50">Request Demo</Link>
              </div>
            </div>
          )}

          {/* Right: content when even, image when odd */}
          {isEven ? (
            <div className="order-2 md:order-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900" style={{ fontFamily: "'Georgia', serif" }}>{product.name}</h3>
              <p className="text-sm text-teal-600 font-semibold uppercase mt-2 mb-4">{product.tag}</p>
              <p className="text-slate-600 mb-4">{product.description}</p>
              <ul className="list-none text-slate-700 mb-6 space-y-1.5">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image
                      src="/products/mediproduct.png"
                      alt="feature bullet"
                      width={24}
                      height={24}
                      className="mt-0.5"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link href={`/products/${slug}`} className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-700">Learn More</Link>
                <Link href={`/contact?product=${slug}`} className="inline-block border border-slate-200 px-4 py-2 rounded-md text-slate-700 hover:bg-slate-50">Request Demo</Link>
              </div>
            </div>
          ) : (
            <div className="order-1 md:order-2">
              <div className="rounded-lg bg-gradient-to-br from-slate-50 to-white p-6 shadow-md h-full flex items-center justify-center">
                <div
                  ref={imgContainerRef}
                  className="w-full max-h-[320px] md:max-h-[560px] bg-slate-100 rounded-lg overflow-hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {product.image ? (
                    <div ref={imgInnerRef} className="w-full">
                      <Image
                        src={product.image}
                        alt={`${product.name} screenshot`}
                        width={920}
                        height={2000}
                        className="object-contain w-full"
                      />
                    </div>
                  ) : (
                    <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <rect width="220" height="140" rx="12" fill="#F8FAFC" />
                      <rect x="16" y="16" width="188" height="108" rx="8" fill="white" stroke="#E6EEF6" />
                      <circle cx="60" cy="70" r="28" fill={product.iconColor} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
