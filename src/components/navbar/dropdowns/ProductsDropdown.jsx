import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_LEFT_COLUMN } from "../navbar.constants";

export default function ProductsDropdown({ items }) {
  const leftColumn = items.filter((child) => PRODUCTS_LEFT_COLUMN.includes(child.label));
  const rightColumn = items.filter((child) => !PRODUCTS_LEFT_COLUMN.includes(child.label));

  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col gap-2 min-w-[220px]">
        <span className="text-xs font-bold text-teal-600 mb-1 block">HMS Solution</span>
        {leftColumn.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-all duration-150 border border-transparent hover:border-slate-200"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-200 shadow-inner shrink-0">
              {child.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-slate-800 group-hover:text-teal-600 transition-colors leading-snug">
                {child.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex flex-col min-w-[120px]">
        <Image
          src="/navimage.png"
          alt="Products"
          width={120}
          height={120}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 min-w-[160px]">
        <span className="text-xs font-bold text-teal-600 mb-1 block">Company Solutions</span>
        {rightColumn.map((child) => (
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
}
