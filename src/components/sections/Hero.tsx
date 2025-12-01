"use client";

import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

// Spring animation config
const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeUpSpring = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Hero() {
  const words = ["B.Com Student", "Aspiring Finance Professional", "Quick Learner", "Detail-Oriented"];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0a0c]">
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Gradient Orbs - Subtle and Refined */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,158,181,0.08) 0%, transparent 60%)",
            top: "-20%",
            right: "-15%",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(196,181,253,0.1) 0%, transparent 60%)",
            bottom: "-10%",
            left: "-10%",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 60%)",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(100px)",
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sparkles - Very Subtle */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#ff9eb5"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Status Badge */}
          <motion.div variants={scaleIn} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1f]/80 border border-[#2a2a30] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ee7b7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6ee7b7]"></span>
              </span>
              <span className="text-[#9890a8] text-sm font-medium">Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeUpSpring} className="mb-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-none" 
                style={{ fontFamily: 'var(--font-cormorant)' }}>
              <span className="block text-white">Richa</span>
              <span className="block bg-gradient-to-r from-[#ff9eb5] via-[#ffb8ca] to-[#c4b5fd] bg-clip-text text-transparent">
                Kandhway
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Subtitle */}
          <motion.div variants={fadeUpSpring} className="mb-8">
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl">
              <span className="text-[#6b6280] font-light">I&apos;m a</span>
              <FlipWords words={words} className="text-[#ff9eb5] font-medium" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={fadeUpSpring}
            className="max-w-2xl mx-auto text-lg md:text-xl text-[#8a8494] leading-relaxed mb-12 font-light"
          >
            Transforming complex financial landscapes into clear strategic pathways. 
            I lead with precision, empathy, and a commitment to excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpSpring}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className="group relative px-8 py-4 rounded-full font-medium text-lg overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #ff9eb5, #c4b5fd)',
                color: '#0a0a0c',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03, borderColor: "#ff9eb5" }}
              whileTap={{ scale: 0.98 }}
              transition={springConfig}
              className="px-8 py-4 border border-[#2a2a30] text-[#c4b5fd] font-medium rounded-full hover:bg-[#ff9eb5]/5 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={fadeUpSpring}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "2nd", label: "Year B.Com" },
              { value: "A+", label: "Academic Record" },
              { value: "100%", label: "Dedication" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                whileHover={{ y: -3 }}
                transition={springConfig}
              >
                <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#ff9eb5] to-[#c4b5fd] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[#6b6280] text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a 
          href="#about"
          className="flex flex-col items-center text-[#6b6280] hover:text-[#ff9eb5] transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-[#2a2a30] rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-gradient-to-b from-[#ff9eb5] to-[#c4b5fd]"
            />
          </motion.div>
          <span className="mt-3 text-xs tracking-[0.2em] uppercase">Scroll</span>
        </motion.a>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none" />
    </section>
  );
}
