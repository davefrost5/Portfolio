"use client";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CursorDot() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 }), sy = useSpring(y, { stiffness: 300, damping: 28 });
  const [big, setBig] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const m = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement)?.closest?.("a,button")); };
    window.addEventListener("pointermove", m);
    return () => window.removeEventListener("pointermove", m);
  }, [x, y]);
  if (reduce) return null;
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full mix-blend-multiply md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", background: big ? "var(--sun)" : "var(--blue)" }}
      animate={{ width: big ? 44 : 12, height: big ? 44 : 12, opacity: big ? 0.7 : 0.9 }} />
  );
}
