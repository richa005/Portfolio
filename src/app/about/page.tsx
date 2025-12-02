"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { ScrollProgress } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FloatingOrbs } from "@/components/ui/floating-petals";
import { ScrollReveal } from "@/components/ui/scroll-animations";
import { animations, staggerContainer, fadeUp, slideFromLeft, cardHover, buttonHover } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";

// Personal info data
const personalInfo = [
  { label: "Name", value: "Richa Kandhway" },
  { label: "Email", value: "richakandhway11@gmail.com" },
  { label: "Location", value: "India" },
  { label: "Program", value: "Bachelor of Commerce (B.Com)" },
  { label: "Year", value: "2nd Year" },
  { label: "Languages", value: "Hindi, English" },
];

// Journey milestones
const journey = [
  {
    year: "2024",
    title: "Started B.Com Journey",
    description: "Enrolled in Bachelor of Commerce program with focus on accounting and finance",
    color: "#f2b5c4",
    current: true,
  },
  {
    year: "2023",
    title: "Higher Secondary Education",
    description: "Completed 12th grade with Commerce stream, building strong foundation in business studies",
    color: "#d4c6ff",
    current: false,
  },
  {
    year: "2022",
    title: "Discovered Passion for Finance",
    description: "Developed keen interest in financial markets, accounting principles, and business economics",
    color: "#f0d78c",
    current: false,
  },
];

// Values/Strengths
const values = [
  {
    title: "Dedication",
    description: "Committed to achieving academic excellence and continuous improvement",
    icon: "🎯",
    color: "#f2b5c4",
  },
  {
    title: "Curiosity",
    description: "Always eager to learn new concepts and explore different areas of finance",
    icon: "💡",
    color: "#d4c6ff",
  },
  {
    title: "Integrity",
    description: "Maintaining honesty and ethical standards in all academic and personal endeavors",
    icon: "⭐",
    color: "#f0d78c",
  },
  {
    title: "Growth Mindset",
    description: "Embracing challenges as opportunities to learn and develop new skills",
    icon: "🌱",
    color: "#a8dbc5",
  },
];

// Interests
const interests = [
  { name: "Financial Markets", icon: "📈" },
  { name: "Data Analysis", icon: "📊" },
  { name: "Reading", icon: "📚" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Technology", icon: "💻" },
  { name: "Music", icon: "🎵" },
];

export default function AboutPage() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      {/* Ethereal Rose Background - About */}
      <FloatingOrbs count={8} />

      <main className="min-h-screen bg-[var(--background)] pt-24 relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-elegant opacity-50" />
          <div className="absolute inset-0 bg-vignette" />
          <div className="absolute inset-0 bg-noise" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block text-[var(--lilac)] text-sm tracking-[0.25em] uppercase font-medium mb-4">
                  ✦ About Me
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl lg:text-8xl text-[var(--foreground)] mt-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <AnimatedText text="Get to Know Me" />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
              >
                A passionate commerce student with dreams of making an impact in the finance world
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== INTRO SECTION ===== */}
        <section className="relative py-24 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute top-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, var(--background), transparent)" }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                <motion.div variants={slideFromLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <TiltCard className="aspect-square max-w-md mx-auto lg:mx-0">
                    <div className="w-full h-full rounded-3xl card-glass border-gradient p-8 flex items-center justify-center">
                      {/* Abstract visual representation */}
                      <div className="relative w-full h-full">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-52 h-52 rounded-full border border-[var(--rose)]/20" style={{ boxShadow: "0 0 30px var(--rose-glow)" }} />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-40 h-40 rounded-full border border-[var(--lilac)]/20" />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-28 h-28 rounded-full border border-[var(--gold)]/20" />
                        </motion.div>
                        
                        {/* Center text */}
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="text-center">
                            <p className="text-7xl font-bold gradient-text" style={{ fontFamily: "var(--font-cormorant)" }}>
                              RK
                            </p>
                            <p className="text-[var(--foreground-subtle)] text-sm mt-2">B.Com Student</p>
                          </div>
                        </motion.div>
                        
                        {/* Floating badges */}
                        <motion.div
                          animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-4 right-4 px-4 py-2 rounded-2xl glass-rose shimmer"
                        >
                          <span className="text-sm text-[var(--rose-light)] font-medium">2nd Year</span>
                        </motion.div>
                        
                        <motion.div
                          animate={{ y: [8, -8, 8], rotate: [3, -3, 3] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-4 left-4 px-4 py-2 rounded-2xl glass-lilac"
                        >
                          <span className="text-sm text-[var(--lilac-light)] font-medium">Finance</span>
                        </motion.div>
                        
                        {/* Sparkles */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-white/50"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${15 + (i % 2) * 60}%`,
                            }}
                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Hello! I&apos;m <GradientText text="Richa Kandhway" />
                  </h2>
                  <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                    I am a 2nd year Bachelor of Commerce student with a deep passion for finance, 
                    accounting, and business analytics. My academic journey has been focused on 
                    building a strong foundation in commerce and developing skills that will help 
                    me succeed in the corporate world.
                  </p>
                  <p className="text-[var(--foreground-subtle)] leading-relaxed mb-10">
                    While I may not have professional work experience yet, I bring enthusiasm, 
                    dedication, and a genuine desire to learn and grow. I am actively seeking 
                    opportunities to apply my theoretical knowledge in practical settings and 
                    gain valuable industry exposure.
                  </p>

                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {personalInfo.slice(0, 4).map((info, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 6, backgroundColor: "rgba(242, 181, 196, 0.03)" }}
                        transition={animations.snappy}
                        className="flex items-center gap-3 p-3 rounded-xl transition-colors"
                      >
                        <span className="text-[var(--rose)]">▹</span>
                        <div>
                          <span className="text-[var(--foreground-faint)] text-sm">{info.label}:</span>
                          <span className="text-[var(--foreground)] text-sm ml-2 font-medium">{info.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== MY JOURNEY SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-dots opacity-40" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block text-[var(--rose)] text-sm tracking-[0.25em] uppercase font-medium mb-4">✦ My Journey</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  The path I&apos;ve <span className="gradient-text-animated">traveled</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--rose)]/50 via-[var(--lilac)]/50 to-[var(--gold)]/50" />

              {journey.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.15}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className={`relative flex items-center gap-8 mb-16 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 z-10" 
                      style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}40` }}
                      whileHover={{ scale: 1.3 }}
                    >
                      {item.current && (
                        <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: item.color, opacity: 0.4 }} />
                      )}
                    </motion.div>

                    {/* Content card */}
                    <div className={`ml-16 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <div className="p-7 rounded-3xl card-glass hover:border-[var(--border-glow)] transition-all duration-500">
                        <span className="text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-space)" }}>
                          {item.year}
                        </span>
                        <h3 className="text-xl text-[var(--foreground)] mt-3 mb-3 font-medium" style={{ fontFamily: "var(--font-cormorant)" }}>
                          {item.title}
                        </h3>
                        <p className="text-[var(--foreground-subtle)] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VALUES SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-grid-dense opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, var(--background), transparent)" }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block text-[var(--sage)] text-sm tracking-[0.25em] uppercase font-medium mb-4">✦ My Values</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  What drives me forward
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      className="h-full p-7 rounded-3xl card-glass text-center group cursor-pointer"
                    >
                      <motion.div
                        className="w-18 h-18 rounded-2xl flex items-center justify-center mx-auto mb-5 text-4xl"
                        style={{ 
                          backgroundColor: `${value.color}10`,
                          border: `1px solid ${value.color}20`,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={animations.bouncy}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl text-[var(--foreground)] font-medium mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {value.title}
                      </h3>
                      <p className="text-[var(--foreground-subtle)] text-sm leading-relaxed">{value.description}</p>
                      
                      {/* Hover accent line */}
                      <motion.div
                        className="mt-5 mx-auto h-0.5 rounded-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${value.color}, transparent)` }}
                        initial={{ width: 0 }}
                        whileHover={{ width: "60%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTERESTS SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-noise" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="inline-block text-[var(--gold)] text-sm tracking-[0.25em] uppercase font-medium mb-4">✦ Interests</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Beyond academics
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-5">
                {interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.08, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={animations.bouncy}
                    className="flex items-center gap-4 px-7 py-5 rounded-2xl glass hover:glass-rose transition-all cursor-pointer group"
                  >
                    <motion.span 
                      className="text-3xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {interest.icon}
                    </motion.span>
                    <span className="text-[var(--foreground)] font-medium group-hover:text-[var(--rose-light)] transition-colors">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)] overflow-hidden">
          {/* Decorative gradient */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, var(--lilac-glow-strong), transparent 60%)",
              filter: "blur(80px)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Want to know more?
                </h2>
                <p className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                  Explore my skills, education, or reach out directly to start a conversation.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
                    <Link href="/skills" className="btn-primary inline-flex items-center gap-2">
                      <span>View My Skills</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={animations.snappy}>
                    <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                      <span>Get In Touch</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
