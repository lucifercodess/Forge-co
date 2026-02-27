"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Big text block that scales up as it enters view, then shrinks as you scroll past */
export default function ScrollRevealBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.5, 1.2, 1.15, 1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.7, 1], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity, y }}
      className="relative py-20 sm:py-32 md:py-40 flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
    >
      <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center text-white/90 tracking-tight px-4 max-w-[90vw]">
        We don’t just
        <br />
        <span className="text-accent">build.</span>
        <br />
        We ship.
      </p>
    </motion.section>
  );
}
