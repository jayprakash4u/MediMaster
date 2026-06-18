import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_CONTACT,
  FOOTER_LEGAL,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL,
  FOOTER_SOLUTIONS,
} from "./footer.constants";

const SOCIAL_ICONS = {
  Facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  Instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  ),
  LinkedIn: (
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  ),
  YouTube: (
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  ),
};

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className="text-sm text-slate-400 transition-colors hover:text-teal-400"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0B1628] font-sans text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-36">
                <Image
                  src="/brand/logo.png"
                  alt="MediMaster"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Smart healthcare software for clinics, pharmacies, labs, and hospitals across Nepal.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <a
                href={FOOTER_CONTACT.phoneHref}
                className="block transition-colors hover:text-teal-400"
              >
                {FOOTER_CONTACT.phone}
              </a>
              <a
                href={FOOTER_CONTACT.emailHref}
                className="block transition-colors hover:text-teal-400"
              >
                {FOOTER_CONTACT.email}
              </a>
              <p>{FOOTER_CONTACT.address}</p>
            </div>

            <div className="mt-6 flex gap-2">
              {FOOTER_SOCIAL.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-teal-500 hover:text-teal-400"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {SOCIAL_ICONS[label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <FooterLinks title="Quick Links" links={FOOTER_QUICK_LINKS} />

          {/* Column 3 — Solutions */}
          <FooterLinks title="Our Solutions" links={FOOTER_SOLUTIONS} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="text-xs text-slate-500">© {currentYear} MediMaster. All rights reserved.</p>
          <div className="flex gap-6">
            {FOOTER_LEGAL.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="text-xs text-slate-500 transition-colors hover:text-teal-400"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
