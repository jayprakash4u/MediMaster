"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import TopBar from "./TopBar";
import Logo from "./Logo";
import DesktopNav from "./desktop/DesktopNav";
import MobileNav from "./mobile/MobileNav";
import DropdownContainer from "./dropdowns/DropdownContainer";
import { createNavbarLinks } from "./navbar.constants";
import { useNavbarAnimation } from "./hooks/useNavbarAnimation";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const desktopNavRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const navContainerRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const navLinkElementsRef = useRef({});

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleMouseEnter = () => {
    clearHoverTimeout();
  };

  useEffect(() => {
    return () => clearHoverTimeout();
  }, []);

  const navLinks = useMemo(() => createNavbarLinks(), []);

  useNavbarAnimation(logoRef, navLinksRef);

  return (
    <header className="sticky top-0 z-[100] w-full font-sans">
      <TopBar />

      <div className="relative border-b border-slate-200 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
        <div
          ref={navContainerRef}
          className="relative mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6"
        >
          <Logo logoRef={logoRef} />

          <DesktopNav
            links={navLinks}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            onDropdownOpen={handleMouseEnter}
            onDropdownClose={handleMouseLeave}
            navLinksRef={navLinksRef}
            navLinkElementsRef={navLinkElementsRef}
            desktopNavRef={desktopNavRef}
          />

          <MobileNav links={navLinks} />
        </div>
      </div>

      <DropdownContainer
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        dropdownRef={dropdownRef}
        dropdownContainerRef={dropdownContainerRef}
        navContainerRef={navContainerRef}
        navLinkElementsRef={navLinkElementsRef}
        onDropdownOpen={handleMouseEnter}
        onDropdownClose={handleMouseLeave}
      />
    </header>
  );
}
