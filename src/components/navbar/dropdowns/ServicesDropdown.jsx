import Image from "next/image";
import Link from "next/link";
import { SERVICES_DEVELOPMENT, SERVICES_DIGITAL } from "../navbar.constants";

function ServiceLink({ child, onNavigate }) {
  return (
    <Link
      href={child.href}
      onClick={onNavigate}
      className="group flex items-center gap-2.5 rounded-lg border border-transparent p-2 transition-all duration-150 hover:border-slate-200 hover:bg-slate-50"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 shadow-inner transition-all duration-200 group-hover:bg-teal-500 group-hover:text-white">
        {child.icon}
      </div>
      <span className="min-w-0 text-xs font-semibold leading-snug text-slate-800 transition-colors group-hover:text-teal-600">
        {child.label}
      </span>
    </Link>
  );
}

export default function ServicesDropdown({ items, setActiveDropdown }) {
  const developmentItems = items.filter((child) => SERVICES_DEVELOPMENT.includes(child.label));
  const digitalItems = items.filter((child) => SERVICES_DIGITAL.includes(child.label));

  const handleNavigate = () => setActiveDropdown?.(null);

  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex min-w-[220px] flex-col gap-2">
        <span className="mb-1 block text-xs font-bold text-teal-600">Development Services</span>
        {developmentItems.map((child) => (
          <ServiceLink key={child.label} child={child} onNavigate={handleNavigate} />
        ))}
      </div>

      <div className="hidden min-w-[120px] flex-col lg:flex">
        <Image
          src="/clintblognavimag.png"
          alt="Services"
          width={120}
          height={120}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="flex min-w-[200px] flex-col gap-2">
        <span className="mb-1 block text-xs font-bold text-teal-600">Digital & IT Services</span>
        {digitalItems.map((child) => (
          <ServiceLink key={child.label} child={child} onNavigate={handleNavigate} />
        ))}
        <Link
          href="/services"
          onClick={handleNavigate}
          className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-teal-600 transition-colors hover:text-teal-700"
        >
          View all services
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
