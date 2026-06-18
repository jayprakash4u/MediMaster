import Link from "next/link";
import { usePathname } from "next/navigation";

function Chevron({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function isLinkActive(pathname, link) {
  if (link.children?.length) {
    return link.children.some(
      (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
    );
  }

  if (!link.href || link.href === "#") return false;
  return pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
}

export default function DesktopNav({
  links,
  activeDropdown,
  setActiveDropdown,
  onDropdownOpen,
  onDropdownClose,
  navLinksRef,
  navLinkElementsRef,
  desktopNavRef,
}) {
  const pathname = usePathname();

  return (
    <nav
      ref={desktopNavRef}
      className="relative hidden flex-1 items-center justify-end md:flex"
      onMouseLeave={onDropdownClose}
      onMouseEnter={onDropdownOpen}
    >
      <ul className="flex items-center gap-0.5 rounded-2xl border border-slate-200 bg-gray-50 px-1 py-1 lg:gap-1">
        {links.map((link, index) => {
          const hasChildren = Boolean(link.children?.length);
          const active = isLinkActive(pathname, link);
          const dropdownOpen = activeDropdown === link.label;

          return (
            <li
              key={link.label}
              ref={(el) => {
                navLinksRef.current[index] = el;
                navLinkElementsRef.current[link.label] = el;
              }}
              className="relative"
              onMouseEnter={() => {
                onDropdownOpen();
                setActiveDropdown(hasChildren ? link.label : null);
              }}
            >
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => {
                    onDropdownOpen();
                    setActiveDropdown(dropdownOpen ? null : link.label);
                  }}
                  className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 lg:px-3.5 ${
                    dropdownOpen || active
                      ? "bg-teal-500 text-white shadow-glowTeal"
                      : "text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {link.label}
                  <Chevron open={dropdownOpen} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 lg:px-3.5 ${
                    active
                      ? "bg-teal-500 text-white shadow-glowTeal"
                      : "text-slate-700 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <Link
        href="/contact"
        className="ml-3 inline-flex items-center rounded-xl bg-navy-950 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-600 lg:ml-4"
      >
        Contact Us
      </Link>
    </nav>
  );
}
