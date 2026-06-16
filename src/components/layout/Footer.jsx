import Link from "next/link";
import Image from "next/image";

const infoLinks = [
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

const supportLinks = [
  { name: "Help Center", path: "/help" },
  { name: "Documentation", path: "/docs" },
  { name: "FAQ", path: "/faq" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

const socialLinks = [
  { label: "Facebook", href: "#", img: "/footer/facebook.jpg" },
  { label: "YouTube", href: "#", img: "/footer/youtube.jpg" },
  { label: "Instagram", href: "#", img: "/footer/instagram.jpg" },
  { label: "X", href: "#", img: "/footer/twitter.jpg" },
  { label: "LinkedIn", href: "#", img: "/footer/linkedin.jpg" },
  { label: "WhatsApp", href: "#", img: "/footer/whatshap.jpg" },
  { label: "TikTok", href: "#", img: "/footer/tiktok.jpg" },
];

const badges = [
  { name: "ISO 27001", sub: "Certified", bg: "#0D9488" },
  { name: "HIPAA", sub: "Compliant", bg: "#0F766E" },
  { name: "Best Health", sub: "Tech 2024", bg: "#2DD4BF" },
];

const appStores = [
  { label: "Play Store", img: "/footer/playstore.jpg", alt: "Google Play" },
  { label: "App Store", img: "/footer/app store.jpg", alt: "App Store" },
];

const desktopApps = [
  { label: "Windows", img: "/footer/windows.jpg", alt: "Windows" },
  { label: "macOS", img: "/footer/macos.jpg", alt: "macOS" },
  { label: "Linux", img: "/footer/linux.jpg", alt: "Linux" },
  { label: "Chrome", img: "/footer/chrome.jpg", alt: "Chrome" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1F4D] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-xl p-2">
              <Image
                src="/brand/logo.png"
                alt="MediMaster"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            Complete software suite for clinics, pharmacies, pathology labs & hospitals — digitize
            patient records, appointments, billing & reports in one secure platform.
          </p>

          {/* Social Links */}
          <div className="flex gap-2 flex-wrap">
            {socialLinks.map(({ label, href, img }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:scale-105 transition-transform bg-teal-500/10 shadow-sm overflow-hidden"
              >
                <Image src={img} alt={label} width={24} height={24} className="object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Information Column */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            Information
          </p>
          <ul className="flex flex-col gap-3">
            {infoLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Support</p>
          <ul className="flex flex-col gap-3 mb-6">
            {supportLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Apps */}
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Mobile Apps
          </p>
          <div className="flex gap-2 flex-wrap">
            {appStores.map(({ label, img, alt }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50/10 border border-teal-200/20 hover:bg-teal-100/20 transition-colors"
              >
                <Image src={img} alt={alt} width={24} height={24} className="object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Column */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Legal</p>
          <ul className="flex flex-col gap-3 mb-6">
            {legalLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Apps */}
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Desktop Apps
          </p>
          <div className="flex gap-2 flex-wrap">
            {desktopApps.map(({ label, img, alt }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50/10 border border-teal-200/20 hover:bg-teal-100/20 transition-colors"
              >
                <Image src={img} alt={alt} width={20} height={20} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-700 max-w-7xl mx-auto" />

      {/* Copyright bar */}
      <div className="px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} MediMaster. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {badges.map(({ name, sub, bg }) => (
              <div key={name} className="flex items-center gap-1.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                  style={{ background: bg }}
                >
                  {name.substring(0, 2)}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-300 leading-tight">{name}</p>
                  <p className="text-[9px] text-slate-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
