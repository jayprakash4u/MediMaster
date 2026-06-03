"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MorphSVGPlugin);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const activeIndicatorRef = useRef(null);

  // Staggered menu entrance on page load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(navLinksRef.current.filter(Boolean), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  // Active indicator animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const updateActiveIndicator = () => {
        const pathName = pathname;

        const matchingLink = NAV_LINKS.find((link) => {
          if (link.href === "#") {
            return pathName === "/" || pathName === "";
          }
          return (
            pathName === link.href ||
            (pathName.startsWith(link.href) && link.href !== "/")
          );
        });

        if (!matchingLink || !activeIndicatorRef.current) return;

        const index = NAV_LINKS.findIndex(
          (link) => link.label === matchingLink.label,
        );

        if (index >= 0 && navLinksRef.current[index]) {
          const navItem = navLinksRef.current[index];
          const rect = navItem.getBoundingClientRect();
          const navRect = document
            .querySelector("nav.bg-teal-500")
            ?.getBoundingClientRect();

          if (navRect) {
            gsap.to(activeIndicatorRef.current, {
              left: `${rect.left - navRect.left}px`,
              width: `${rect.width}px`,
              duration: 0.8,
              ease: "power3.out",
            });
          }
        }
      };

      updateActiveIndicator();
    }, activeIndicatorRef);

    return () => ctx.revert();
  }, [pathname]);

  // Mobile menu open animation with stagger
  useEffect(() => {
    if (open && mobileMenuRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll("li"),
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1,
          },
        );
      }, mobileMenuRef);

      return () => ctx.revert();
    }
  }, [open]);

  // Hamburger to X morph animation
  useEffect(() => {
    if (!hamburgerRef.current) return;

    const ctx = gsap.context(() => {
      const hamburger = hamburgerRef.current;
      const path = hamburger.querySelector("path");

      gsap.to(path, {
        morphSVG: {
          shape: open
            ? "M6 6 L18 18 M18 6 L6 18"
            : "M3 6 L21 6 M3 12 L21 12 M3 18 L21 18",
        },
        duration: 0.4,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, [open]);

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* Top Bar */}
      <div className="h-10 bg-deepNavy-900 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-white w-full gap-4">
          <p className="hidden md:block text-slate-300">
            Home Care and Medical Practices: Our Specialists are Here
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Careers
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Site Map
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="relative bg-white flex items-center h-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <div className="relative w-56 h-16 flex-shrink-0">
              <Image
                ref={logoRef}
                src="/brand/logo.png"
                alt="Medi Master Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            ref={hamburgerRef}
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto z-20 p-2 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke={open ? "#FFFFFF" : "#1F2937"}
              strokeWidth="2.5"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 6 L21 6 M3 12 L21 12 M3 18 L21 18" />
            </svg>
          </button>

          {/* Navigation Segment - Using Teal brand color */}
          <nav
            className="absolute right-0 bottom-0 top-4 bg-teal-500 hidden md:flex items-center pl-32 pr-8 w-[68%] lg:w-[65%]"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <div
              ref={activeIndicatorRef}
              className="absolute left-0 bottom-0 h-[3px] bg-navy-950 w-0 transition-all duration-500"
            />

            <ul className="relative flex items-center gap-6 lg:gap-8 text-white font-medium h-full">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={link.label}
                  ref={(el) => {
                    navLinksRef.current[index] = el;
                  }}
                  className="relative flex items-center h-full"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                >
                  {link.children ? (
                    <span className="hover:text-teal-100 text-sm lg:text-base transition-all duration-200 cursor-pointer flex items-center gap-1 py-4">
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-teal-100 text-sm lg:text-base transition-all duration-200 py-4"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="ml-auto bg-navy-950 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-navy-950/90 transition-all duration-200 shadow-sm"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Dropdowns - rendered OUTSIDE clipped nav at document level */}
      {activeDropdown &&
        NAV_LINKS.filter((l) => l.children).map((link) => {
          if (link.label !== activeDropdown) return null;
          const navIndex = NAV_LINKS.findIndex(
            (item) => item.label === link.label,
          );
          const rect = navLinksRef.current[navIndex]?.getBoundingClientRect();
          return (
            <div
              key={link.label}
              className="fixed z-[60] hidden md:block"
              style={{
                top: rect ? `${rect.bottom + 8}px` : "auto",
                left: rect ? `${rect.left}px` : "auto",
              }}
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <ul className="w-64 bg-white rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-200 flex flex-col divide-y divide-slate-100 overflow-hidden">
                {link.children.map((child) => (
                  <li key={child.label} className="w-full">
                    <Link
                      href={child.href}
                      className="block px-6 py-3.5 text-[15px] font-normal text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

      {/* Mobile Menu */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-deepNavy-950 z-[60] pt-32 px-4 pb-24 overflow-y-auto"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="border-b border-deepNavy-700 pb-2"
              >
                {link.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label,
                        )
                      }
                      className="text-slate-300 text-xl font-medium hover:text-teal-400 transition-colors block py-2 w-full flex items-center justify-between"
                    >
                      {link.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <ul className="mt-1 mb-2 ml-4 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="text-slate-400 text-lg font-normal hover:text-teal-400 transition-colors block py-1.5"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 text-2xl font-medium hover:text-teal-400 transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
