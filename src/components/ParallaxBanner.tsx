"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Full-width banner text that scales and moves with scroll */
export default function ParallaxBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.6, 1.25, 1.2, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, -20, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ scale, y, opacity }}
      className="relative py-20 sm:py-28 md:py-32 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] overflow-hidden"
    >
      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-white/80 tracking-tight px-4 max-w-6xl mx-auto">
        Websites.
        <span className="text-accent block mt-1 sm:mt-2">Apps.</span>
        <span className="text-white/70 block mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Done right.
        </span>
      </h2>
    </motion.section>
  );
}
