"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";
import { fadeUpOnScroll } from "@/lib/gsap-scroll";

export function ScrollReveal({
  children,
  className,
  y = 28,
  x = 0,
  delay = 0,
  duration = 0.75,
  start = "top 88%",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      fadeUpOnScroll(el, el, { y, x, delay, duration, start });
    }, ref);

    return () => ctx.revert();
  }, [y, x, delay, duration, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  y = 24,
  duration = 0.65,
  start = "top 85%",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    if (!items.length) return;

    const ctx = gsap.context(() => {
      fadeUpOnScroll(items, el, { y, duration, stagger, start });
    }, ref);

    return () => ctx.revert();
  }, [stagger, y, duration, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

export function useGsapSection(animationFn, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      animationFn(el, gsap);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
