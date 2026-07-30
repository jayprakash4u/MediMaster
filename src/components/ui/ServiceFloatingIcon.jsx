"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServiceFloatingIcon({ icon, index, compact = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: compact ? -8 : -12,
      duration: 2.2 + index * 0.15,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: icon.delay,
    });
  }, [compact, icon.delay, index]);

  const isSquare = icon.shape === "square";
  const isPill = icon.shape === "pill";
  const isPillSm = icon.shape === "pill-sm";
  const sizeScale = compact ? 0.58 : 1;
  const iconSize = Math.round((icon.size ?? 48) * sizeScale);

  const baseStyle = {
    position: "absolute",
    top: icon.top,
    left: icon.left,
    zIndex: 20,
    background: icon.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: compact ? "0 2px 12px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.18)",
    cursor: "default",
    userSelect: "none",
  };

  if (isPill) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: compact ? "6px 10px" : "10px 18px",
      gap: compact ? "4px" : "6px",
      flexDirection: "row",
      minWidth: compact ? "52px" : "90px",
    });
  } else if (isPillSm) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: compact ? "5px 8px" : "8px 14px",
      gap: compact ? "3px" : "5px",
      flexDirection: "column",
      minWidth: compact ? "40px" : "64px",
    });
  } else if (isSquare) {
    Object.assign(baseStyle, {
      borderRadius: compact ? "8px" : "12px",
      width: iconSize,
      height: iconSize,
    });
  } else {
    Object.assign(baseStyle, {
      borderRadius: "50%",
      width: iconSize,
      height: iconSize,
    });
  }

  const labelStyle = {
    fontWeight: 700,
    color: icon.textColor,
    fontFamily: "sans-serif",
    letterSpacing: "0.02em",
    textAlign: "center",
    fontSize: compact
      ? isPill || isPillSm
        ? "0.5rem"
        : isSquare
          ? "0.65rem"
          : "0.6rem"
      : isPill || isPillSm
        ? "0.625rem"
        : isSquare
          ? "1rem"
          : "0.875rem",
  };

  return (
    <div ref={ref} style={baseStyle} title={icon.name}>
      {isPill ? (
        <>
          <span style={labelStyle}>{icon.label}</span>
          {!compact ? (
            <span
              style={{
                display: "block",
                width: 28,
                height: 2,
                borderRadius: 2,
                background: icon.textColor,
                opacity: 0.5,
                marginLeft: 2,
              }}
            />
          ) : null}
        </>
      ) : (
        <span style={labelStyle}>{icon.label}</span>
      )}
    </div>
  );
}
