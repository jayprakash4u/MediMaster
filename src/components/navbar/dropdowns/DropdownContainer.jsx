import Link from "next/link";
import { NAV_LINKS } from "@/config/constants";
import { DROPDOWN_COMPONENTS } from "../navbar.dropdowns";
import { useDropdownPosition } from "../hooks/useDropdownPosition";

function GenericDropdown({ items, setActiveDropdown }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-1 lg:grid-cols-3">
      {items.map((child) => (
        <Link
          key={child.label}
          href={child.href}
          onClick={() => setActiveDropdown(null)}
          className="group flex items-center gap-2.5 rounded-lg border border-transparent p-2 transition-all duration-150 hover:border-slate-200 hover:bg-slate-50"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 shadow-inner transition-all duration-200 group-hover:bg-teal-500 group-hover:text-white">
            {child.icon}
          </div>
          <span className="min-w-0 text-xs font-semibold leading-snug text-slate-800 transition-colors group-hover:text-teal-600">
            {child.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function DropdownContainer({
  activeDropdown,
  setActiveDropdown,
  dropdownRef,
  dropdownContainerRef,
  navContainerRef,
  navLinkElementsRef,
  onDropdownOpen,
  onDropdownClose,
}) {
  useDropdownPosition({
    activeDropdown,
    dropdownRef,
    navContainerRef,
    navLinkElementsRef,
  });

  if (!activeDropdown) return null;

  const activeLink = NAV_LINKS.find((link) => link.label === activeDropdown && link.children);
  if (!activeLink) return null;

  const DropdownComponent = DROPDOWN_COMPONENTS[activeDropdown];

  return (
    <div ref={dropdownContainerRef} className="relative z-40 mx-auto hidden max-w-7xl md:block">
      <div
        ref={dropdownRef}
        className={`absolute top-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-navy-950/10 ring-1 ring-teal-500/10 animate-in fade-in slide-in-from-top-1 duration-200 ${
          activeDropdown === "Products" ? "w-[70vw] max-w-4xl" : "w-auto max-w-3xl"
        }`}
        onMouseEnter={onDropdownOpen}
        onMouseLeave={onDropdownClose}
      >
        <div className="h-1 bg-gradient-to-r from-teal-500 via-aqua-500 to-navy-600" />
        <div className="p-4 sm:p-5">
          {DropdownComponent ? (
            <DropdownComponent items={activeLink.children} setActiveDropdown={setActiveDropdown} />
          ) : (
            <GenericDropdown items={activeLink.children} setActiveDropdown={setActiveDropdown} />
          )}
        </div>
      </div>
    </div>
  );
}
