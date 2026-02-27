"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Section that scales up (gets big) as you scroll into it. On mobile we skip scale to avoid clipping. */
export default function ScrollScaleSection({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMobile(!mq.matches);
    const handler = () => setIsMobile(!mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    isMobile ? [1, 1, 1, 1] : [0.7, 1.15, 1.1, 0.85]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.4, 1, 1, 1, 0.4]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [80, 0, -60]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className={`origin-center overflow-visible ${className}`}
    >
      {children}
    </motion.div>
  );
}
