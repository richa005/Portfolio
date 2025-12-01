"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { animations, staggerContainer, fadeUp } from "@/lib/animations";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/richa-kandhway-782655330",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    { 
      name: "Email", 
      href: "mailto:richakandhway@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/richakandhway",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-[#0a0a0c] border-t border-white/[0.05]">
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#f4a5b8]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <span className="text-xl font-medium text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Richa Kandhway
              </span>
            </Link>
            <p className="text-[#8b8693] leading-relaxed max-w-sm mb-6">
              B.Com student passionate about finance and accounting. 
              Seeking opportunities to learn, grow, and contribute with dedication.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={animations.snappy}
                  className="p-3 bg-[#151419] rounded-xl text-[#8b8693] hover:text-[#f4a5b8] border border-white/[0.05] hover:border-[#f4a5b8]/30 transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#8b8693] hover:text-[#f4a5b8] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-[#8b8693] text-sm">
              <li>
                <a 
                  href="mailto:richakandhway@gmail.com" 
                  className="hover:text-[#f4a5b8] transition-colors"
                >
                  richakandhway@gmail.com
                </a>
              </li>
              <li>India</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#f4a5b8] hover:gap-3 transition-all"
                >
                  Send a message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#6d6875] text-sm">
            © {currentYear} Richa Kandhway. All rights reserved.
          </p>
          <p className="text-[#6d6875] text-sm flex items-center gap-2">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#f4a5b8]"
            >
              ♥
            </motion.span>
            using Next.js
          </p>
        </motion.div>
      </div>
      
      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={animations.snappy}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] text-[#0a0a0c] shadow-lg shadow-[#f4a5b8]/20 z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};
