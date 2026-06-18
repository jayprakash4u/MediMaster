import { useEffect } from "react";
import { usePathname } from "next/navigation";

function findActiveIndex(pathname, navLinks) {
  let bestIndex = -1;
  let bestMatchLength = -1;

  navLinks.forEach((link, index) => {
    if (link.children?.length) {
      link.children.forEach((child) => {
        if (pathname === child.href || pathname.startsWith(`${child.href}/`)) {
          if (child.href.length > bestMatchLength) {
            bestMatchLength = child.href.length;
            bestIndex = index;
          }
        }
      });
      return;
    }

    if (!link.href || link.href === "#") return;

    const matches = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

    if (matches && link.href.length > bestMatchLength) {
      bestMatchLength = link.href.length;
      bestIndex = index;
    }
  });

  return bestIndex;
}

export function useActiveIndicator(navLinks, navLinksRef, activeIndicatorRef, desktopNavRef) {
  const pathname = usePathname();

  useEffect(() => {
    const indicator = activeIndicatorRef.current;
    const nav = desktopNavRef.current;
    if (!indicator || !nav) return;

    const index = findActiveIndex(pathname, navLinks);
    const navItem = index >= 0 ? navLinksRef.current[index] : null;

    if (!navItem) {
      indicator.style.width = "0px";
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const itemRect = navItem.getBoundingClientRect();

    indicator.style.left = `${itemRect.left - navRect.left}px`;
    indicator.style.width = `${itemRect.width}px`;
  }, [activeIndicatorRef, desktopNavRef, navLinks, navLinksRef, pathname]);
}
