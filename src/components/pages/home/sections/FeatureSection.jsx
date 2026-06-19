"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Code2,
  Globe,
  LayoutTemplate,
  Mail,
  Palette,
  Search,
  Server,
  Smartphone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardIcon } from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { BODY, COMPONENT_STYLES, TEXT_COLOR } from "@/lib/typography";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Website Development",
    desc: "Fast, responsive websites built to represent your brand and convert visitors.",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps with smooth UX and reliable performance.",
    href: "/services/app-development",
    icon: Smartphone,
  },
  {
    title: "System / Software Dev",
    desc: "Custom software and automation tailored to your business workflows.",
    href: "/services/system-software-development",
    icon: Code2,
  },
  {
    title: "UI / UX Design",
    desc: "Clear interfaces and user flows that make every interaction effortless.",
    href: "/services/ui-ux",
    icon: LayoutTemplate,
  },
  {
    title: "Search Engine Optimization",
    desc: "Improve visibility and reach the right audience through organic search.",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Email & Hosting",
    desc: "Secure business email and dependable hosting for stable online operations.",
    href: "/services/server-management",
    icon: Mail,
  },
  {
    title: "Server Management",
    desc: "Monitored infrastructure with uptime-focused support and maintenance.",
    href: "/services/server-management",
    icon: Server,
  },
  {
    title: "Web Design",
    desc: "Modern, on-brand layouts that look polished on every screen size.",
    href: "/services/graphic-design",
    icon: Palette,
  },
];

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 16 },
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
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-shell bg-gray-50 font-sans">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          headerRef={headerRef}
          eyebrow="Our Services"
          title="Professional Digital"
          highlight="Solutions"
          description="From healthcare software to web and marketing services — everything you need to grow online, delivered with clarity and care."
          className="mb-12 sm:mb-14"
        />

        <div className="card-grid-4">
          {services.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                as={Link}
                href={item.href}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="group flex h-full flex-col p-5 sm:p-6"
              >
                <CardIcon className="mb-4 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </CardIcon>

                <h3
                  className={cn(
                    COMPONENT_STYLES.cardTitle,
                    "transition-colors group-hover:text-teal-700"
                  )}
                >
                  {item.title}
                </h3>
                <p className={cn("mt-2 flex-1", BODY.small, TEXT_COLOR.secondary)}>{item.desc}</p>

                <span
                  className={cn(
                    "mt-5 inline-flex items-center gap-1.5",
                    COMPONENT_STYLES.linkAccent
                  )}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button href="/services" variant="secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
