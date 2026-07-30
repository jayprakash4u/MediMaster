"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Globe,
  LayoutTemplate,
  Mail,
  Megaphone,
  Palette,
  Search,
  Server,
  Smartphone,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { COMPONENT_STYLES } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Website Development",
    desc: "Fast, responsive websites built to represent your brand and convert visitors into loyal customers.",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps with smooth UX and reliable performance for patients and staff.",
    href: "/services/app-development",
    icon: Smartphone,
  },
  {
    title: "System / Software Dev",
    desc: "Custom software and automation tailored to your hospital, clinic, or business workflows.",
    href: "/services/system-software-development",
    icon: Code2,
  },
  {
    title: "UI / UX Design",
    desc: "Clear interfaces and user flows that make every digital interaction effortless and intuitive.",
    href: "/services/ui-ux",
    icon: LayoutTemplate,
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve visibility and reach the right audience through organic search and local SEO.",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns across search and social to grow your healthcare brand online.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Email & Hosting",
    desc: "Secure business email and dependable hosting for stable, always-on online operations.",
    href: "/services/server-management",
    icon: Mail,
  },
  {
    title: "Server Management",
    desc: "Monitored infrastructure with uptime-focused support, backups, and maintenance.",
    href: "/services/server-management",
    icon: Server,
  },
  {
    title: "Web Design",
    desc: "Modern, on-brand layouts that look polished and professional on every screen size.",
    href: "/services/graphic-design",
    icon: Palette,
  },
];

function ServiceCard({ service, cardRef }) {
  const Icon = service.icon;

  return (
    <Link
      ref={cardRef}
      href={service.href}
      className="group flex h-full flex-col items-center border border-slate-200/90 bg-white px-3 py-5 text-center transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] sm:px-6 sm:py-9"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2.5px] border-navy-600 bg-white transition-colors duration-300 group-hover:border-teal-600 group-hover:bg-teal-50/50 sm:h-[4.75rem] sm:w-[4.75rem] sm:border-[3px]">
        <Icon
          className="h-6 w-6 text-navy-600 transition-colors group-hover:text-teal-700 sm:h-8 sm:w-8"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="mt-3 text-xs font-semibold leading-snug text-navy-600 transition-colors group-hover:text-teal-700 sm:mt-5 sm:text-base">
        {service.title}
      </h3>

      <p
        className={cn(
          "mt-2 line-clamp-2 text-[10px] leading-snug text-slate-500 sm:mt-3 sm:line-clamp-3 sm:text-sm sm:leading-relaxed"
        )}
      >
        {service.desc}
      </p>
    </Link>
  );
}

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      className="border-t border-slate-200/80 bg-slate-100 py-12 font-sans antialiased sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <SectionHeader
          headerRef={headerRef}
          eyebrow="Healthcare & Digital Services"
          title="Professional Digital"
          highlight="Solutions"
          description="From healthcare software to web and marketing services — everything you need to grow online, delivered with clarity and care."
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3">
          {services.map((item, idx) => (
            <ServiceCard
              key={item.title}
              service={item}
              cardRef={(el) => {
                cardsRef.current[idx] = el;
              }}
            />
          ))}
        </div>

        <p className="mt-8 text-center sm:mt-10">
          <Link href="/services" className={cn(COMPONENT_STYLES.linkAccent, "text-sm")}>
            View all services →
          </Link>
        </p>
      </div>
    </section>
  );
}
