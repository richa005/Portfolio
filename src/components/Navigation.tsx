"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { useState, useEffect } from "react";
import { animations, easings } from "@/lib/animations";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easings.silkIn }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled 
            ? "py-3 glass-strong shadow-lg" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={animations.bouncy}
              >
                <Logo className="w-11 h-11" />
              </motion.div>
              <motion.span 
                className="text-xl font-medium text-[var(--foreground)] hidden sm:block"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Richa<span className="gradient-text">.</span>
              </motion.span>
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: "radial-gradient(circle, var(--rose-glow) 0%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-5 py-2.5 group"
                  >
                    <motion.span
                      className={`text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? "text-[var(--rose)]" 
                          : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                      }`}
                      whileHover={{ y: -2 }}
                      transition={animations.snappy}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-[var(--rose)] to-[var(--lilac)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover underline */}
                    {!isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[var(--foreground-faint)]"
                        initial={{ width: 0, opacity: 0 }}
                        whileHover={{ width: 20, opacity: 1 }}
                        transition={{ duration: 0.3, ease: easings.silkIn }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={animations.snappy}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="btn-primary text-sm px-6 py-2.5"
                >
                  <span>Let&apos;s Talk</span>
                </Link>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl glass-rose"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={{ 
                    rotate: isMobileMenuOpen ? 45 : 0, 
                    y: isMobileMenuOpen ? 7 : 0,
                    width: isMobileMenuOpen ? "100%" : "100%"
                  }}
                  className="w-full h-0.5 bg-[var(--rose)] rounded-full origin-left transition-all"
                />
                <motion.span
                  animate={{ 
                    opacity: isMobileMenuOpen ? 0 : 1, 
                    x: isMobileMenuOpen ? 10 : 0,
                    scale: isMobileMenuOpen ? 0 : 1
                  }}
                  className="w-3/4 h-0.5 bg-[var(--lilac)] rounded-full ml-auto"
                />
                <motion.span
                  animate={{ 
                    rotate: isMobileMenuOpen ? -45 : 0, 
                    y: isMobileMenuOpen ? -7 : 0 
                  }}
                  className="w-full h-0.5 bg-[var(--rose)] rounded-full origin-left transition-all"
                />
              </div>
            </motion.button>
          </nav>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] md:hidden bg-[var(--background)]/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-[95] md:hidden glass-strong border-l border-[var(--border-subtle)] p-8 pt-28"
            >
              {/* Decorative gradient */}
              <div 
                className="absolute top-0 right-0 w-40 h-40 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--rose-glow-strong) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              
              <div className="flex flex-col gap-2 relative z-10">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-4 px-4 rounded-2xl text-lg font-medium transition-all ${
                          isActive 
                            ? "text-[var(--rose)] bg-[var(--rose-glow)]" 
                            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--border-subtle)]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-base">
                            {isActive ? "●" : "○"}
                          </span>
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-[var(--border-subtle)]"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    <span>Get In Touch</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
