"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 safe-area-inset-top">
      <nav className="px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-[#0f0f14]/95 backdrop-blur-md border-b border-white/5">
        <motion.span
          className="font-display font-bold text-white text-base sm:text-lg tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Pixshel
        </motion.span>

        {/* Desktop: inline links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 hover:text-white font-medium transition-colors py-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <motion.button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex flex-col justify-center items-center gap-1.5 rounded-lg border border-white/20 text-white touch-manipulation"
          onClick={() => setOpen((o) => !o)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${open ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </motion.button>
      </nav>

      {/* Mobile: dropdown below nav (pushes content down, no overlay) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0f0f14] border-b border-white/10"
          >
            <div className="flex flex-col items-stretch py-4 gap-0">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-center font-medium text-white/90 hover:text-white py-4 px-6 min-h-[48px] flex items-center justify-center border-b border-white/5 last:border-b-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
