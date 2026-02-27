"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "They delivered our e‑commerce app on time. The 3D product viewer they built increased our conversion by 40%. Highly recommend.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    text: "Clean code, fast iterations, and they actually understood our scale requirements. Our dashboard handles 10x traffic now without a hiccup.",
    avatar: "RV",
  },
  {
    name: "Ananya Krishnan",
    text: "From booking engine to guest app — one team, one vision. The animations and UX they suggested made our brand feel premium.",
    avatar: "AK",
  },
  {
    name: "Vikram Singh",
    text: "We needed a web and mobile app in sync. They built both with a shared codebase. Launch was smooth and the product still runs great.",
    avatar: "VS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#050508] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          What clients say
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real projects, real names. We deliver.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-accent/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-white text-sm sm:text-base truncate">{t.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
