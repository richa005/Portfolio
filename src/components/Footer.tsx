"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { animations, staggerContainer, fadeUp, easings } from "@/lib/animations";

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
      href: "mailto:richakandhway11@gmail.com",
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
    <footer className="relative bg-[var(--background)] border-t border-[var(--border-subtle)]">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--rose)] to-transparent opacity-50" />
      
      {/* Background decoration */}
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--rose-glow-strong), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute top-1/2 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--lilac-glow-strong), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 lg:gap-16"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={animations.bouncy}
              >
                <Logo className="w-14 h-14" />
              </motion.div>
              <span className="text-2xl font-medium text-[var(--foreground)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Richa Kandhway
              </span>
            </Link>
            <p className="text-[var(--foreground-subtle)] leading-relaxed max-w-sm mb-8">
              B.Com student passionate about finance and accounting. 
              Seeking opportunities to learn, grow, and contribute with dedication.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={animations.bouncy}
                  className="p-3.5 glass-rose rounded-2xl text-[var(--foreground-subtle)] hover:text-[var(--rose)] transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="gradient-text font-medium mb-6 text-sm uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="link-underline text-[var(--foreground-subtle)] text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="gradient-text font-medium mb-6 text-sm uppercase tracking-[0.2em]">Get in Touch</h4>
            <ul className="space-y-4 text-[var(--foreground-subtle)] text-sm">
              <li>
                <a 
                  href="mailto:richakandhway11@gmail.com" 
                  className="link-glow block"
                >
                  richakandhway11@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]"></span>
                India
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--rose)] hover:gap-4 transition-all font-medium group"
                >
                  Send a message
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: easings.gentle }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="divider-glow my-12" />
        
        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[var(--foreground-faint)] text-sm">
            © {currentYear} Richa Kandhway. All rights reserved.
          </p>
          <p className="text-[var(--foreground-faint)] text-sm flex items-center gap-2">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[var(--rose)] inline-block"
            >
              ♥
            </motion.span>
          </p>
        </motion.div>
      </div>
      
      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        transition={animations.bouncy}
        className="fixed bottom-8 right-8 p-4 rounded-2xl btn-primary shadow-lg z-50 group"
      >
        <motion.svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </motion.svg>
      </motion.button>
    </footer>
  );
};
