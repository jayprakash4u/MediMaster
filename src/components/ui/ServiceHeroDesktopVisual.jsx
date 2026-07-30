"use client";

import Image from "next/image";
import ServiceFloatingIcon from "@/components/ui/ServiceFloatingIcon";

export default function ServiceHeroDesktopVisual({
  imageSrc,
  imageAlt,
  title,
  imageClassName,
  floatingIcons = [],
}) {
  return (
    <div
      className="relative hidden aspect-square w-full max-w-md overflow-visible md:block lg:max-w-lg"
      style={{ aspectRatio: "1 / 1" }}
    >
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.16)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          width={420}
          height={420}
          className={imageClassName}
          priority
        />
      </div>

      {floatingIcons.length > 0 ? (
        <div className="pointer-events-none absolute inset-0 z-20">
          {floatingIcons.map((icon, i) => (
            <ServiceFloatingIcon key={icon.name} icon={icon} index={i} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
