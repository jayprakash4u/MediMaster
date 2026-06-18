import Image from "next/image";
import Link from "next/link";

export default function CompanyDropdown({ items, setActiveDropdown }) {
  return (
    <div className="flex gap-4">
      <div className="hidden md:hidden lg:flex flex-col h-full w-36 shrink-0">
        <Image
          src="/clintblognavimag.png"
          alt="Company"
          width={144}
          height={144}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 min-w-[140px]">
        {items.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            onClick={() => setActiveDropdown(null)}
            className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-200"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-200 shadow-inner shrink-0">
              {child.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug truncate">
                {child.label === "Contact" ? "Contact Us" : child.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
