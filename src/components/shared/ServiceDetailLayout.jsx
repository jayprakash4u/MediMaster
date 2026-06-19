"use client";

import { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { BODY, COMPONENT_STYLES, HEADING, TEXT_COLOR } from "@/lib/typography";

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
  { label: "Server Management", href: "/services/server-management" },
  { label: "App Development", href: "/services/app-development" },
  {
    label: "System/Software Development",
    href: "/services/system-software-development",
  },
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
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between px-6 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm mb-4 text-sm font-bold text-gray-900 uppercase tracking-widest"
      >
        Services
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <aside
        className={`${isOpen ? "block" : "hidden"} lg:block w-full lg:w-[300px] shrink-0 space-y-6`}
      >
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-black tracking-widest text-gray-900 uppercase">
              Services
            </h2>
            <div className="flex gap-1.5 mt-2">
              <span className="w-6 h-0.5 bg-teal-500 rounded-full" />
              <span className="w-2 h-0.5 bg-teal-300 rounded-full" />
            </div>
          </div>
          <ul className="divide-y divide-gray-100">
            {services.map((s) => {
              const isActive = activeHref === s.href;
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={`group flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-teal-50 text-teal-600 border-l-[3px] border-teal-500"
                        : "text-gray-600 border-l-[3px] border-transparent hover:bg-teal-50 hover:text-teal-600 hover:border-teal-400"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${isActive ? "text-teal-500" : "text-teal-400"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <h3 className="text-base font-black tracking-widest text-gray-900 uppercase">
              Chat With Us
            </h3>
            <div className="flex gap-1.5 mt-2">
              <span className="w-6 h-0.5 bg-teal-500 rounded-full" />
              <span className="w-2 h-0.5 bg-teal-300 rounded-full" />
            </div>
          </div>
          <a
            href="https://wa.me/919643558215"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full border border-gray-300 rounded-full px-5 py-3 text-sm font-semibold text-gray-700 hover:border-teal-400 hover:text-teal-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-green-500 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.057 23.428a.75.75 0 00.921.921l5.627-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-4.953-1.355l-.355-.21-3.68.965.98-3.593-.23-.37A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            +91-9643558215
          </a>
          <a
            href="tel:+919643558215"
            className="flex items-center gap-3 w-full border border-gray-300 rounded-full px-5 py-3 text-sm font-semibold text-gray-700 hover:border-teal-400 hover:text-teal-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-navy-500 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Us Now
          </a>
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
  title = "WEBSITE DEVELOPMENT SERVICES",
  description = `At Technanzia Infotech, we offer comprehensive website development services designed to create dynamic, user-friendly, and visually appealing websites that meet your business needs. In a digital-first world, having a robust online presence is essential for success. Our expert team utilizes the latest technologies and best practices to deliver tailored solutions that enhance user experience and drive engagement.`,
  imageSrc,
  imageAlt = "Service Image",
  activeHref = "/services/website-development",
  children,
}) {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <ServicesSidebar activeHref={activeHref} />
          <main className="flex-1 min-w-0 space-y-6">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-contain bg-gray-100"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="text-sm font-medium">Add your image here</span>
                </div>
              )}
            </div>
            <div>
              <p className={`${COMPONENT_STYLES.label} mb-2 ${TEXT_COLOR.teal}`}>Services</p>
              <h1 className={`${HEADING.h2} ${TEXT_COLOR.primary}`}>{title}</h1>
            </div>
            <p className={`${BODY.base} ${TEXT_COLOR.muted}`}>{description}</p>
            {children}
          </main>
        </div>
      </div>
    </section>
  );
}
