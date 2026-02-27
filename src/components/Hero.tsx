"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#050508] pt-16 sm:pt-0">
      {/* Fallback gradient so content is never on white */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050508] via-[#050508] to-[#0a0a0f]" aria-hidden />
      <Scene />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.p
          className="font-display font-semibold text-white/70 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-1 sm:mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Forge & Co
        </motion.p>
        <motion.p
          className="font-mono text-accent text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We ship.
        </motion.p>
        <motion.h1
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          We build
          <br />
          <span className="text-accent">websites</span>
          <span className="text-white/90">&</span>
          <span className="text-accent">apps</span>
        </motion.h1>
        <motion.p
          className="font-sans text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl mt-5 sm:mt-8 max-w-xl mx-auto px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          From idea to launch. Fast, sharp, built to last.
        </motion.p>
        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.a
            href="#work"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-void font-semibold rounded-full text-base sm:text-lg hover:bg-accent-dim transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See what we do
          </motion.a>
          <motion.a
            href="#contact"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-accent/60 text-accent font-semibold rounded-full text-base sm:text-lg hover:bg-accent/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 safe-area-inset-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-1.5 sm:pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
