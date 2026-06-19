"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
  { label: "Server Management", href: "/services/server-management" },
  { label: "App Development", href: "/services/app-development" },
  { label: "System/Software Development", href: "/services/system-software-development" },
  { label: "UI/UX", href: "/services/ui-ux" },
  { label: "E-commerce Solution", href: "/services/ecommerce-solution" },
  { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
  { label: "Social Media Marketing (SMM)", href: "/services/smm" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "IT Outsourcing", href: "/services/it-outsourcing" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Content Writing", href: "/services/content-writing" },
];

function ServicesSidebar({ activeHref }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 lg:hidden"
      >
        All Services
        <svg
          className={cn("h-4 w-4 text-slate-500 transition-transform", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <aside
        className={cn(
          "w-full shrink-0 space-y-4 lg:w-[280px]",
          isOpen ? "block" : "hidden lg:block"
        )}
      >
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-100 px-5 py-4">
            <h2 className="text-sm font-bold text-slate-900">Services</h2>
          </div>
          <ul className="max-h-[420px] overflow-y-auto">
            {services.map((service) => {
              const isActive = activeHref === service.href;
              return (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className={cn(
                      "block border-l-2 px-5 py-3 text-sm transition-colors",
                      isActive
                        ? "border-teal-600 bg-teal-50 font-semibold text-teal-700"
                        : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {service.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-bold text-slate-900">Need help?</h3>
          <p className="mt-1 text-xs text-slate-500">Talk to our team about your project.</p>
          <div className="mt-4 space-y-2">
            <a
              href="https://wa.me/919643558215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-teal-200 hover:text-teal-700"
            >
              <MessageCircle className="h-4 w-4 text-teal-600" strokeWidth={2} />
              WhatsApp
            </a>
            <a
              href="tel:+919643558215"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-teal-200 hover:text-teal-700"
            >
              <Phone className="h-4 w-4 text-teal-600" strokeWidth={2} />
              Call us
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

ServicesSidebar.propTypes = {
  activeHref: PropTypes.string.isRequired,
};

ServiceDetailLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  activeHref: PropTypes.string,
  children: PropTypes.node,
};

export default function ServiceDetailLayout({
  title = "Website Development Services",
  description = "We build fast, accessible websites tailored to your brand and business goals.",
  imageSrc,
  imageAlt = "Service Image",
  activeHref = "/services/website-development",
  children,
}) {
  const mainRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const blocks = el.querySelectorAll("[data-animate]");
      gsap.from(blocks, {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, [imageSrc, title, description]);

  return (
    <section className="border-b border-slate-200 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
          <ServicesSidebar activeHref={activeHref} />

          <main ref={mainRef} className="min-w-0 flex-1 space-y-6">
            {imageSrc ? (
              <div
                data-animate
                className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            ) : null}

            <div data-animate>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-600">
                Overview
              </p>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
            </div>

            {children ? <div data-animate>{children}</div> : null}
          </main>
        </div>
      </div>
    </section>
  );
}
