"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { BODY, TEXT_COLOR } from "@/lib/typography";
import { Check, PhoneCall, Shield, Star, Zap } from "lucide-react";
import { CardCompact } from "@/components/ui/Card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  "Streamlined patient registration & EMR management",
  "Appointment scheduling & doctor availability tracking",
  "Integrated pharmacy & prescription management",
  "Lab orders, results & diagnostic reporting",
  "Billing, insurance & claim automation",
  "Real-time dashboards & compliance-ready reports",
];

const HIGHLIGHTS = [
  { icon: Shield, label: "HIPAA-ready security" },
  { icon: Zap, label: "Cloud-based access" },
];

export default function ClinicHeroSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current?.children ?? [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-12 font-sans antialiased sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-50/80 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        {/* Content */}
        <div ref={leftRef} className="order-2 space-y-6 lg:order-1">
          <SectionHeader
            align="left"
            eyebrow="Clinic Management"
            description="A complete software suite for clinics, pharmacies, pathology labs & hospitals — digitize patient records, appointments, billing & reports in one secure platform."
            className="max-w-none"
          >
            Smarter healthcare management <span className="text-gradient-brand">starts here.</span>
          </SectionHeader>

          <div className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
              >
                <Icon className="h-3.5 w-3.5 text-teal-600" />
                {label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {FEATURES.map((feat) => (
              <CardCompact key={feat} className="flex items-start gap-2.5 hover:bg-teal-50/40">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-sm shadow-teal-500/20">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span className={`${BODY.small} font-medium leading-snug text-slate-700`}>
                  {feat}
                </span>
              </CardCompact>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" className="shadow-lg shadow-teal-600/20">
              <PhoneCall className="h-4 w-4" />
              Book a Demo
            </Button>
            <Button href="/products" variant="outline">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div
          ref={rightRef}
          className="relative order-1 mx-auto aspect-[4/3] w-full max-w-lg lg:order-2 lg:mx-0 lg:aspect-auto lg:h-[480px] lg:max-w-none xl:h-[520px]"
        >
          <div className="absolute inset-0 rounded-3xl border border-teal-100/80 bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/40" />

          <div className="absolute left-4 top-4 z-0 h-14 w-14 rounded-tl-2xl border-l-2 border-t-2 border-teal-500 sm:left-6 sm:top-6 sm:h-16 sm:w-16" />

          <div className="absolute left-6 top-6 h-[68%] w-[78%] overflow-hidden rounded-2xl border border-white/80 shadow-xl shadow-slate-900/10 sm:left-10 sm:top-10">
            <Image
              src="/home/doctor home img1.jpg"
              alt="Healthcare software dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-6 right-4 h-[48%] w-[54%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-slate-900/15 sm:bottom-10 sm:right-6">
            <Image
              src="/home/description.png"
              alt="Clinic management interface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 30vw"
            />
          </div>

          <div className="absolute bottom-8 left-4 z-10 flex items-center gap-3 rounded-2xl border border-white/20 bg-navy-950/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:bottom-12 sm:left-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-lg">
              🏥
            </div>
            <div>
              <p className="text-sm font-bold leading-none text-white">All-in-One Suite</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Healthcare Software
              </p>
            </div>
          </div>

          <div className="absolute right-4 top-[18%] z-10 sm:right-8 sm:top-[22%]">
            <div className="rounded-2xl border border-teal-200/60 bg-white p-3 shadow-lg shadow-teal-500/10">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50">
                <Star className="h-4 w-4 fill-teal-500 text-teal-500" />
              </div>
              <p className="text-base font-black leading-none text-slate-900">4.9/5</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                User Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
