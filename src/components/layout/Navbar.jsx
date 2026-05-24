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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const activeIndicatorRef = useRef(null);
  const dropdownRef = useRef(null);
  const servicesLinkRef = useRef(null);

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

        gsap.fromTo(
          ".mobile-search-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.4 },
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
            ? "M6 6 L18 18 M18 6 L6 18" // X shape
            : "M3 6 L21 6 M3 12 L21 12 M3 18 L21 18", // Hamburger
        },
        duration: 0.4,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, [open]);

  // Track mouse on nav bar – close dropdown if leaving nav area
  const handleNavMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* Top Bar - Deep Navy branding */}
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

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 ml-4">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="20" fill="#0F1F4D" />
                  <text
                    x="40"
                    y="55"
                    fontFamily="Inter,system-ui,sans-serif"
                    fontSize="54"
                    fontWeight="700"
                    fill="#14B8A6"
                    textAnchor="middle"
                  >
                    f
                  </text>
                </svg>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="20" fill="#14B8A6" />
                  <rect
                    x="18"
                    y="18"
                    width="44"
                    height="44"
                    rx="12"
                    fill="none"
                    stroke="#0F1F4D"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="11"
                    fill="none"
                    stroke="#0F1F4D"
                    strokeWidth="3.5"
                  />
                  <circle cx="56" cy="24" r="3.5" fill="#0F1F4D" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="20" fill="#0F1F4D" />
                  <line
                    x1="20"
                    y1="20"
                    x2="60"
                    y2="60"
                    stroke="#14B8A6"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <line
                    x1="60"
                    y1="20"
                    x2="20"
                    y2="60"
                    stroke="#14B8A6"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" rx="20" fill="#14B8A6" />
                  <path
                    d="M40 16 C23 16 10 27 10 40 C10 47 14 54 21 58 L17 66 L28 62 C31 63 35 64 40 64 C57 64 70 53 70 40 C70 27 57 16 40 16Z"
                    fill="#0F1F4D"
                  />
                  <path
                    d="M29 32 C29 32 31 35 34 39 C37 43 39 45 39 45 L44 40 L49 45 C49 45 46 50 41 47 C36 44 29 37 27 32 C25 27 29 25 29 25 Z"
                    fill="#14B8A6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="relative bg-white flex items-center h-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center z-20">
            <div className="relative w-56 h-16 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-aqua-500 rounded-lg opacity-10" />
              <Image
                ref={logoRef}
                src="/logo.png"
                alt="Medi Master Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Mobile Hamburger Button with Morph Animation */}
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
            <ul className="relative flex items-center gap-6 lg:gap-8 text-white font-medium">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={link.label}
                  ref={(el) => {
                    navLinksRef.current[index] = el;
                    if (link.children) servicesLinkRef.current = el;
                  }}
                  className="relative group"
                >
               {link.children ? (
<>
                  <span
                    className="hover:text-teal-100 text-sm lg:text-base transition-all duration-200 cursor-pointer flex items-center gap-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
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
                </>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-teal-100 text-sm lg:text-base transition-all duration-200"
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

          {/* Services dropdown — rendered OUTSIDE the clipped <nav> */}
          {NAV_LINKS.filter((l) => l.children).map((link) => (
            <div
              key={link.label}
              ref={dropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[60]"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <ul
                className={`w-[580px] bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-4 px-3 grid grid-cols-2 gap-x-2 gap-y-1 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {(link.children || []).map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors rounded-md font-medium"
                  >
                    {child.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-deepNavy-950 z-[60] pt-32 px-4 pb-24 overflow-y-auto"
        >
          {/* Close button */}
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
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.label}
                className="border-b border-deepNavy-700 pb-2"
              >
                {link.children ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="text-slate-300 text-xl font-medium hover:text-teal-400 transition-colors block py-2 w-full flex items-center justify-between"
                    >
                      {link.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
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
                    {dropdownOpen && (
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
