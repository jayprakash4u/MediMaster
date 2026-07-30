"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const MOBILE_ORBIT_COUNT = 8;
/** Badge centers sit on this % radius from container center (ring edge ≈ 50%) */
const ORBIT_RADIUS = 49;

function pickOrbitIcons(icons) {
  if (icons.length <= MOBILE_ORBIT_COUNT) return icons;
  const step = icons.length / MOBILE_ORBIT_COUNT;
  return Array.from({ length: MOBILE_ORBIT_COUNT }, (_, i) => icons[Math.floor(i * step)]);
}

function getOrbitPosition(index, total) {
  const angleDeg = (index / total) * 360 - 90;
  const rad = (angleDeg * Math.PI) / 180;

  return {
    x: 50 + ORBIT_RADIUS * Math.cos(rad),
    y: 50 + ORBIT_RADIUS * Math.sin(rad),
  };
}

function getShortLabel(label) {
  const text = String(label ?? "").trim();
  if (text.length <= 2) return text;
  if (text.length <= 4) return text.slice(0, 2);
  return text.slice(0, 3);
}

function OrbitBadge({ icon, index, total }) {
  const floatRef = useRef(null);
  const { x, y } = getOrbitPosition(index, total);

  useEffect(() => {
    if (!floatRef.current) return;
    gsap.to(floatRef.current, {
      y: -5,
      duration: 2.2 + index * 0.1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: icon.delay ?? 0,
    });
  }, [icon.delay, index]);

  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        ref={floatRef}
        className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.3)] ring-2 ring-white/25 sm:h-11 sm:w-11"
        style={{ background: icon.bg }}
        title={icon.name}
      >
        <span
          className="text-[10px] font-bold uppercase leading-none tracking-tight sm:text-[11px]"
          style={{ color: icon.textColor }}
        >
          {getShortLabel(icon.label)}
        </span>
      </div>
    </div>
  );
}

export default function ServiceHeroMobileVisual({ imageSrc, imageAlt, title, floatingIcons = [] }) {
  const orbitIcons = pickOrbitIcons(floatingIcons);

  return (
    <div className="mx-auto w-full max-w-[272px] shrink-0 px-2 sm:max-w-[292px]">
      {/* Fixed square frame — explicit px size prevents layout collapse */}
      <div className="relative mx-auto h-[256px] w-[256px] sm:h-[276px] sm:w-[276px]">
        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border-2 border-teal-400/30" aria-hidden />
        <div className="absolute inset-[6%] rounded-full border border-white/10" aria-hidden />
        <div
          className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]"
          aria-hidden
        />

        {/* Hero image inside the ring */}
        <div className="absolute inset-[20%] z-10 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            width={420}
            height={420}
            className="h-full w-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Icons pinned to the orbit ring */}
        {orbitIcons.map((icon, i) => (
          <OrbitBadge key={icon.name} icon={icon} index={i} total={orbitIcons.length} />
        ))}
      </div>
    </div>
  );
}
