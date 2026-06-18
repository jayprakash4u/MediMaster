import Link from "next/link";

const CONTACT = {
  phone: "+977-9802109001",
  phoneHref: "tel:+9779802109001",
  email: "info@medimaster.com.np",
  emailHref: "mailto:info@medimaster.com.np",
};

export default function TopBar() {
  return (
    <div className="hidden border-b border-navy-800 bg-navy-950 sm:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 truncate text-[11px] font-medium text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          <span className="truncate">Kathmandu, Bagmati, Nepal</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
          <a href={CONTACT.phoneHref} className="transition-colors hover:text-teal-400">
            {CONTACT.phone}
          </a>
          <span className="text-navy-700">|</span>
          <a
            href={CONTACT.emailHref}
            className="hidden transition-colors hover:text-teal-400 md:inline"
          >
            {CONTACT.email}
          </a>
          <span className="hidden text-navy-700 md:inline">|</span>
          <Link
            href="/contact"
            className="rounded-full bg-teal-500/15 px-2.5 py-0.5 text-teal-400 transition-colors hover:bg-teal-500 hover:text-white"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
