"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", label: "Discover", sub: "We align on goals, scope, and timeline." },
  { num: "02", label: "Design & Build", sub: "UI, UX, and production-ready code." },
  { num: "03", label: "Launch", sub: "We ship. You iterate. We support." },
];

export default function Process() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-24 sm:pb-24 md:py-32 px-4 sm:px-6 bg-zinc-950/50 border-y border-white/5 overflow-visible">
      <div className="max-w-6xl mx-auto overflow-visible">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          How we work
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex-1 flex flex-col sm:flex-row md:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="font-mono text-accent text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">
                {step.num}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white">
                  {step.label}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 sm:mt-1 break-words">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block flex-1 max-w-[80px] h-px bg-gradient-to-r from-accent/60 to-transparent ml-4 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
