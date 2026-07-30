"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import {
  FOOTER_CONTACT,
  FOOTER_LATEST_BLOGS,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL,
} from "./footer.constants";

const SOCIAL_ICONS = {
  Facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  Twitter: (
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  ),
  LinkedIn: (
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  ),
  YouTube: (
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  ),
};

function FooterHeading({ children }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h3 className="text-sm font-semibold text-white sm:text-base">{children}</h3>
      <div className="mt-2 h-0.5 w-10 bg-sky-500 sm:mt-3 sm:w-12" aria-hidden />
    </div>
  );
}

function ContactRow({ icon: Icon, href, children }) {
  const content = (
    <span className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400 transition-colors hover:text-slate-200 sm:gap-3 sm:text-sm">
      <Icon
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500 sm:h-4 sm:w-4"
        strokeWidth={1.75}
      />
      <span>{children}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <label htmlFor="footer-email" className="sr-only">
        Your email
      </label>
      <input
        id="footer-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full rounded-md border-0 bg-white py-2.5 pl-3.5 pr-12 text-xs text-slate-800 outline-none ring-0 placeholder:text-slate-400 sm:py-3 sm:pl-4 sm:pr-14 sm:text-sm"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-sky-600 text-white transition-colors hover:bg-sky-500 sm:right-1.5 sm:h-9 sm:w-9"
      >
        <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
      </button>
    </form>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans text-white">
      <div className="bg-[#121921]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-3 py-10 sm:gap-x-6 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8 lg:py-14">
          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 sm:mb-8 sm:gap-3"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-white p-1.5 sm:h-12 sm:w-12">
                <Image
                  src="/brand/logo.png"
                  alt="MediMaster"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white sm:text-base">MediMaster</p>
                <p className="text-[11px] text-slate-400 sm:text-xs">Healthcare Software</p>
              </div>
            </Link>

            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <ContactRow icon={MapPin}>{FOOTER_CONTACT.address}</ContactRow>
              </li>
              <li>
                <ContactRow icon={Phone} href={FOOTER_CONTACT.phoneHref}>
                  {FOOTER_CONTACT.phone}
                </ContactRow>
              </li>
              <li className="hidden sm:block">
                <ContactRow icon={Smartphone} href={FOOTER_CONTACT.mobileHref}>
                  {FOOTER_CONTACT.mobile}
                </ContactRow>
              </li>
              <li>
                <ContactRow icon={Mail} href={FOOTER_CONTACT.emailHref}>
                  {FOOTER_CONTACT.email}
                </ContactRow>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-0">
              {FOOTER_QUICK_LINKS.map(({ name, path }) => (
                <li key={name} className="border-b border-white/[0.06] last:border-0">
                  <Link
                    href={path}
                    className="flex items-center gap-1.5 py-2 text-xs text-slate-400 transition-colors hover:text-white sm:gap-2 sm:py-2.5 sm:text-sm"
                  >
                    <ChevronRight
                      className="h-3 w-3 shrink-0 text-slate-500 sm:h-3.5 sm:w-3.5"
                      strokeWidth={2}
                    />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Blog */}
          <div>
            <FooterHeading>Latest Blog</FooterHeading>
            <ul className="space-y-4 sm:space-y-5">
              {FOOTER_LATEST_BLOGS.map((post) => (
                <li key={post.href}>
                  {post.image ? (
                    <Link href={post.href} className="group flex gap-2.5 sm:gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-slate-800 sm:h-16 sm:w-16">
                        <Image src={post.image} alt="" fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-xs leading-snug text-slate-400 transition-colors group-hover:text-white sm:text-sm">
                          {post.title}
                        </p>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-slate-500 sm:mt-1.5 sm:gap-1.5 sm:text-xs">
                          <Calendar className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link href={post.href} className="group block">
                      <p className="line-clamp-2 text-xs leading-snug text-slate-400 transition-colors group-hover:text-white sm:text-sm">
                        {post.title}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-[10px] text-slate-500 sm:mt-1.5 sm:gap-1.5 sm:text-xs">
                        <Calendar className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
                        {post.date}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-2 lg:col-span-1">
            <FooterHeading>Subscribe</FooterHeading>
            <p className="mb-3 text-xs leading-relaxed text-slate-400 sm:mb-4 sm:text-sm">
              Get healthcare software updates and product news in your inbox.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-3 py-3 sm:flex-row sm:gap-4 sm:px-6 sm:py-4">
          <p className="text-center text-[11px] text-slate-500 sm:text-left sm:text-xs">
            © {currentYear} MediMaster. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {FOOTER_SOCIAL.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-slate-600 text-slate-400 transition-colors hover:border-slate-400 hover:text-white sm:h-8 sm:w-8"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {SOCIAL_ICONS[label]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
