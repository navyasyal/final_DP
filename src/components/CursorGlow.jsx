import { useEffect, useRef } from "react";

/**
 * A soft ambient glow that follows the pointer. Purely decorative,
 * disabled on touch devices and respects prefers-reduced-motion.
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouch || !ref.current) return undefined;

    const el = ref.current;
    const handleMove = (e) => {
      el.style.setProperty("--x", e.clientX.toString());
      el.style.setProperty("--y", e.clientY.toString());
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden="true" />;
}
