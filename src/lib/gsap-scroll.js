import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered fade/slide reveal.
 * Uses fromTo + clearProps so transforms don't linger and blur text.
 */
export function fadeUpOnScroll(targets, trigger, options = {}) {
  const {
    y = 24,
    x = 0,
    duration = 0.7,
    stagger = 0,
    delay = 0,
    start = "top 85%",
    ease = "power3.out",
  } = options;

  if (!targets || (targets.length !== undefined && targets.length === 0)) return null;

  return gsap.fromTo(
    targets,
    { opacity: 0, y, x },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      stagger: stagger || undefined,
      ease,
      clearProps: "transform",
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

export function scaleInOnScroll(targets, trigger, options = {}) {
  const { duration = 0.45, stagger = 0, start = "top 85%", ease = "back.out(1.6)" } = options;

  if (!targets || (targets.length !== undefined && targets.length === 0)) return null;

  return gsap.fromTo(
    targets,
    { opacity: 0, scale: 0.6 },
    {
      opacity: 1,
      scale: 1,
      duration,
      stagger: stagger || undefined,
      ease,
      clearProps: "transform",
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

export function drawLineOnScroll(targets, trigger, options = {}) {
  const { duration = 0.55, stagger = 0.07, start = "top 85%" } = options;

  if (!targets || (targets.length !== undefined && targets.length === 0)) return null;

  return gsap.fromTo(
    targets,
    { scaleY: 0 },
    {
      scaleY: 1,
      duration,
      stagger: stagger || undefined,
      ease: "power2.out",
      transformOrigin: "top center",
      clearProps: "transform",
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}
