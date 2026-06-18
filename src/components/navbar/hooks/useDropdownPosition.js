import { useEffect } from "react";

export function useDropdownPosition({
  activeDropdown,
  dropdownRef,
  navContainerRef,
  navLinkElementsRef,
  companyOffset = 80,
}) {
  useEffect(() => {
    if (!activeDropdown || !dropdownRef.current || !navContainerRef.current) return;

    const alignDropdown = () => {
      const activeLink = navLinkElementsRef.current[activeDropdown];
      if (!activeLink) return;

      const navRect = navContainerRef.current.getBoundingClientRect();
      const dropdownWidth = dropdownRef.current.offsetWidth || 0;
      const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
      let left;

      if (isTablet) {
        const offset = activeDropdown === "Company" ? companyOffset : 0;
        left = navRect.width - dropdownWidth - 16 - offset;
      } else {
        const linkRect = activeLink.getBoundingClientRect();
        left = linkRect.left - navRect.left;

        if (left + dropdownWidth > navRect.width) {
          left = navRect.width - dropdownWidth - 16;
        }

        if (left < 0) left = 16;
      }

      dropdownRef.current.style.left = `${Math.max(16, left)}px`;
    };

    alignDropdown();
    window.addEventListener("resize", alignDropdown);

    return () => window.removeEventListener("resize", alignDropdown);
  }, [activeDropdown, companyOffset, dropdownRef, navContainerRef, navLinkElementsRef]);
}
