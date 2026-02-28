"use client";

import { motion } from "framer-motion";

const EMAIL = "Shelly.work07@gmail.com";
const PHONE = "9501350517";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#0f0f14] safe-area-inset-bottom scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          Let’s build something.
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          One line. We’ll take it from there.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-10 py-4 sm:py-5 bg-accent text-void font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-accent-dim transition-colors break-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {EMAIL}
          </motion.a>
          <motion.a
            href={`tel:+91${PHONE}`}
            className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-10 py-4 sm:py-5 border-2 border-accent/60 text-accent font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-accent/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            +91 {PHONE}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
