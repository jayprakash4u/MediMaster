"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServiceFloatingIcon({ icon, index }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: -12,
      duration: 2.2 + index * 0.15,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: icon.delay,
    });
  }, [icon.delay, index]);

  const isSquare = icon.shape === "square";
  const isPill = icon.shape === "pill";
  const isPillSm = icon.shape === "pill-sm";

  const baseStyle = {
    position: "absolute",
    top: icon.top,
    left: icon.left,
    zIndex: 20,
    background: icon.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
    cursor: "default",
    userSelect: "none",
  };

  if (isPill) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: "10px 18px",
      gap: "6px",
      flexDirection: "row",
      minWidth: "90px",
    });
  } else if (isPillSm) {
    Object.assign(baseStyle, {
      borderRadius: "50px",
      padding: "8px 14px",
      gap: "5px",
      flexDirection: "column",
      minWidth: "64px",
    });
  } else if (isSquare) {
    Object.assign(baseStyle, {
      borderRadius: "12px",
      width: icon.size,
      height: icon.size,
    });
  } else {
    Object.assign(baseStyle, {
      borderRadius: "50%",
      width: icon.size,
      height: icon.size,
    });
  }

  const labelStyle = {
    fontWeight: 700,
    color: icon.textColor,
    fontFamily: "sans-serif",
    letterSpacing: "0.02em",
    textAlign: "center",
    fontSize: isPill || isPillSm ? "0.625rem" : isSquare ? "1rem" : "0.875rem",
  };

  return (
    <div ref={ref} style={baseStyle} title={icon.name}>
      {isPill ? (
        <>
          <span style={labelStyle}>{icon.label}</span>
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
        </>
      ) : (
        <span style={labelStyle}>{icon.label}</span>
      )}
    </div>
  );
}
