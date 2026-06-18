"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

const CONTACT = {
  phone: "+977-9802109001",
  phoneHref: "tel:+9779802109001",
  email: "info@medimaster.com.np",
  emailHref: "mailto:info@medimaster.com.np",
};

const DRAWER_MS = 300;

function isLinkActive(pathname, link) {
  if (link.children?.length) {
    return link.children.some(
      (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
    );
  }

  if (!link.href || link.href === "#") return false;
  return pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
}

function setPageScrollLocked(locked) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  document.body.style.overflow = locked ? "hidden" : "";

  if (locked) {
    window.__lenis?.stop();
  } else {
    window.__lenis?.start();
  }
}

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  const show = useCallback(() => {
    setVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOpen(true));
    });
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      close();
      setExpanded(null);
      prevPathname.current = pathname;
    }
  }, [pathname, close]);

  useEffect(() => {
    if (!open && visible) {
      const timer = setTimeout(() => setVisible(false), DRAWER_MS);
      return () => clearTimeout(timer);
    }
  }, [open, visible]);

  useEffect(() => {
    if (!visible) return;
    setPageScrollLocked(true);
    return () => setPageScrollLocked(false);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  const toggle = (label) => {
    setExpanded((cur) => (cur === label ? null : label));
  };

  const drawer =
    mounted &&
    visible &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] isolate"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          className={`absolute inset-0 z-0 bg-slate-900/50 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <aside
          className={`absolute top-0 right-0 bottom-0 z-10 flex w-80 max-w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-5">
            <span className="text-base font-bold text-slate-900">Menu</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3"
            data-lenis-prevent
          >
            <ul className="space-y-0.5">
              {links.map((link) => {
                const hasChildren = Boolean(link.children?.length);
                const active = isLinkActive(pathname, link);
                const isExpanded = expanded === link.label;

                if (hasChildren) {
                  return (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => toggle(link.label)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                          active || isExpanded
                            ? "bg-teal-50 text-teal-700"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mb-1 ml-3 space-y-0.5 border-l border-teal-200 pl-3">
                          {link.children.map((child) => {
                            const childActive =
                              pathname === child.href || pathname.startsWith(`${child.href}/`);

                            return (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={close}
                                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                                    childActive
                                      ? "bg-teal-100 font-medium text-teal-800"
                                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                                  }`}
                                >
                                  {child.icon && (
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                                      {child.icon}
                                    </span>
                                  )}
                                  <span className="leading-snug">{child.label}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-teal-500 text-white shadow-glowTeal"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-slate-100 px-4 py-4">
            <Link
              href="/contact"
              onClick={close}
              className="mb-4 flex w-full items-center justify-center rounded-xl bg-navy-950 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-600"
            >
              Contact Us
            </Link>

            <div className="space-y-2 text-xs text-slate-500">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-teal-700"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-teal-600" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 transition-colors hover:text-teal-700"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-teal-600" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </aside>
      </div>,
      document.body
    );

  return (
    <div className="relative z-[110] ml-auto shrink-0 md:hidden">
      <button
        type="button"
        onClick={show}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-teal-500/30 hover:bg-teal-50 hover:text-teal-600"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>
      {drawer}
    </div>
  );
}
