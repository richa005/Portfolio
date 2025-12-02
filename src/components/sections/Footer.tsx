"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: '#0a0a0c' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="flex items-center gap-3"
          >
            <Logo className="w-10 h-10" />
            <span className="text-lg text-[#faf8f5]" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Richa Kandhway</span>
          </motion.div>

          {/* Nav Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {["Home", "About", "Experience", "Skills", "Education", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                transition={springConfig}
                className="text-[#6d6875] hover:text-[#f4a5b8] transition-colors duration-300 text-sm"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="flex gap-3"
          >
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                href: "mailto:richakandhway11@gmail.com",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={springConfig}
                className="p-2.5 bg-[#151419] rounded-lg text-[#8b8693] hover:text-[#f4a5b8] transition-colors duration-300 border border-white/[0.06]"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6d6875] text-xs">
            © {currentYear} Richa Kandhway. All rights reserved.
          </p>
          <p className="text-[#6d6875] text-xs flex items-center gap-2">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#f4a5b8]"
            >
              ♥
            </motion.span>
            and precision
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
        className="fixed bottom-8 right-8 p-3 rounded-full z-50"
        style={{ 
          background: 'linear-gradient(135deg, #f4a5b8, #c8b6ff)',
        }}
      >
        <svg className="w-4 h-4 text-[#0a0a0c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}
