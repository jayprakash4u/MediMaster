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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const updateActiveIndicator = () => {
        const matchingLink = NAV_LINKS.find((link) => {
          if (link.href === "#") {
            return pathname === "/" || pathname === "";
          }
          return (
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/")
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
      <div className="h-10 bg-[#1D2129] flex items-center overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-white w-full gap-4">
          <p className="hidden md:block text-slate-300">
            Home Care and Medical Practices: Our Specialists are Here
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Careers
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Site Map
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-white flex items-center h-20 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          <Link href="/" className="flex items-center z-20">
            <div className="relative w-56 h-16 flex-shrink-0">
              <Image
                ref={logoRef}
                src="/brand/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

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

          <nav
            className="absolute right-0 bottom-0 top-4 bg-teal-500 hidden md:flex items-center pl-32 pr-8 w-[68%] lg:w-[65%]"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div
              ref={activeIndicatorRef}
              className="absolute left-0 bottom-0 h-[3px] bg-slate-900 w-0 transition-all duration-500"
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
                    link.children
                      ? setActiveDropdown(link.label)
                      : setActiveDropdown(null)
                  }
                >
                  {link.children ? (
                    <span className="hover:text-teal-100 text-sm lg:text-base transition-all duration-200 cursor-pointer flex items-center gap-1 py-4">
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
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

            <Link
              href="/contact"
              className="ml-auto bg-slate-900 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-all duration-200 shadow-md"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {activeDropdown && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-0 bg-white border border-slate-200 shadow-2xl hidden md:block z-40 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {NAV_LINKS.filter((l) => l.children).map((link) => {
            if (link.label !== activeDropdown) return null;
            return (
              <div
                key={link.label}
                className="max-w-4xl mx-auto p-4"
              >
                <div
                  className={`grid ${link.gridCols || "grid-cols-3"} gap-x-6 gap-y-2`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-200"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-200 shadow-inner shrink-0">
                        {child.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug truncate">
                          {child.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {open && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-slate-950 z-[60] pt-32 px-4 pb-24 overflow-y-auto"
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
              <li key={link.label} className="border-b border-slate-800 pb-2">
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
                      <ul className="mt-2 ml-4 flex flex-col gap-2">
                        {link.children.map((child) => (
                          <li
                            key={child.label}
                            className="flex items-center gap-2.5"
                          >
                            <span className="text-teal-500 scale-75">
                              {child.icon}
                            </span>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="text-slate-400 text-base font-normal hover:text-teal-400 transition-colors block py-1.5"
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
