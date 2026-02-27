"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Websites",
    desc: "Fast, responsive, SEO-ready. From landing pages to full product sites.",
    icon: "◇",
  },
  {
    title: "Web & Mobile Apps",
    desc: "React, Next.js, native or cross-platform. We ship products that scale.",
    icon: "◆",
  },
  {
    title: "3D & Interactive",
    desc: "WebGL, animations, scroll-driven experiences. Stand out in the feed.",
    icon: "◈",
  },
];

export default function WhatWeDo() {
  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#050508] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          What we do
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We don’t just design and code — we ship. Here’s what we build.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-accent/40 hover:bg-zinc-900/60 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-accent text-2xl sm:text-3xl mb-3 sm:mb-4 block opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
