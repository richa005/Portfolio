"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { ScrollProgress, FadeInSection } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { animations, staggerContainer, fadeUp, slideFromLeft, slideFromRight } from "@/lib/animations";
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
    color: "#f4a5b8",
    current: true,
  },
  {
    year: "2023",
    title: "Higher Secondary Education",
    description: "Completed 12th grade with Commerce stream, building strong foundation in business studies",
    color: "#c8b6ff",
    current: false,
  },
  {
    year: "2022",
    title: "Discovered Passion for Finance",
    description: "Developed keen interest in financial markets, accounting principles, and business economics",
    color: "#e8c872",
    current: false,
  },
];

// Values/Strengths
const values = [
  {
    title: "Dedication",
    description: "Committed to achieving academic excellence and continuous improvement",
    icon: "🎯",
    color: "#f4a5b8",
  },
  {
    title: "Curiosity",
    description: "Always eager to learn new concepts and explore different areas of finance",
    icon: "💡",
    color: "#c8b6ff",
  },
  {
    title: "Integrity",
    description: "Maintaining honesty and ethical standards in all academic and personal endeavors",
    icon: "⭐",
    color: "#e8c872",
  },
  {
    title: "Growth Mindset",
    description: "Embracing challenges as opportunities to learn and develop new skills",
    icon: "🌱",
    color: "#a8d5ba",
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

      <main className="min-h-screen bg-[#0a0a0c] pt-24">
        {/* ===== HERO SECTION ===== */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(244,165,184,0.08) 0%, transparent 60%)",
              top: "-10%",
              right: "-10%",
              filter: "blur(60px)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">
                  About Me
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl text-white mt-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <AnimatedText text="Get to Know Me" />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[#8b8693] text-lg max-w-2xl mx-auto mt-6"
              >
                A passionate commerce student with dreams of making an impact in the finance world
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== INTRO SECTION ===== */}
        <section className="relative py-20 bg-[#0d0d10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection>
                <motion.div variants={slideFromLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <TiltCard className="aspect-square max-w-md mx-auto lg:mx-0">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#151419] to-[#1a1a1f] border border-white/[0.08] p-8 flex items-center justify-center">
                      {/* Abstract visual representation */}
                      <div className="relative w-full h-full">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-48 h-48 rounded-full border border-[#f4a5b8]/20" />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-36 h-36 rounded-full border border-[#c8b6ff]/20" />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-24 h-24 rounded-full border border-[#e8c872]/20" />
                        </motion.div>
                        
                        {/* Center text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-6xl font-bold bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-cormorant)" }}>
                              RK
                            </p>
                            <p className="text-[#8b8693] text-sm mt-2">B.Com Student</p>
                          </div>
                        </div>
                        
                        {/* Floating badges */}
                        <motion.div
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#f4a5b8]/10 border border-[#f4a5b8]/20"
                        >
                          <span className="text-xs text-[#f4a5b8]">2nd Year</span>
                        </motion.div>
                        
                        <motion.div
                          animate={{ y: [5, -5, 5] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-[#c8b6ff]/10 border border-[#c8b6ff]/20"
                        >
                          <span className="text-xs text-[#c8b6ff]">Finance</span>
                        </motion.div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div>
                  <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Hello! I&apos;m <GradientText text="Richa Kandhway" />
                  </h2>
                  <p className="text-[#a8a3b3] text-lg leading-relaxed mb-6">
                    I am a 2nd year Bachelor of Commerce student with a deep passion for finance, 
                    accounting, and business analytics. My academic journey has been focused on 
                    building a strong foundation in commerce and developing skills that will help 
                    me succeed in the corporate world.
                  </p>
                  <p className="text-[#8b8693] leading-relaxed mb-8">
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
                        whileHover={{ x: 5 }}
                        transition={animations.snappy}
                        className="flex items-center gap-3"
                      >
                        <span className="text-[#f4a5b8]">▹</span>
                        <div>
                          <span className="text-[#6d6875] text-sm">{info.label}:</span>
                          <span className="text-white text-sm ml-2">{info.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ===== MY JOURNEY SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">My Journey</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  The path I&apos;ve traveled
                </h2>
              </div>
            </FadeInSection>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f4a5b8]/50 via-[#c8b6ff]/50 to-[#e8c872]/50" />

              {journey.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={animations.smooth}
                    className={`relative flex items-center gap-8 mb-12 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10" style={{ backgroundColor: item.color }}>
                      {item.current && (
                        <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: item.color, opacity: 0.5 }} />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`ml-16 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                      <div className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors">
                        <span className="text-2xl font-bold" style={{ color: item.color, fontFamily: "var(--font-space)" }}>
                          {item.year}
                        </span>
                        <h3 className="text-xl text-white mt-2 mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                          {item.title}
                        </h3>
                        <p className="text-[#8b8693] text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VALUES SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">My Values</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  What drives me forward
                </h2>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={animations.smooth}
                      className="h-full p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                        style={{ backgroundColor: `${value.color}15` }}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-lg text-white font-medium mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {value.title}
                      </h3>
                      <p className="text-[#8b8693] text-sm">{value.description}</p>
                    </motion.div>
                  </TiltCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTERESTS SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">Interests</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Beyond academics
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={animations.snappy}
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-[#f4a5b8]/30 transition-colors"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-white font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
                Want to know more?
              </h2>
              <p className="text-[#8b8693] text-lg max-w-2xl mx-auto mb-10">
                Explore my skills, education, or reach out directly to start a conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={animations.snappy}>
                  <Link
                    href="/skills"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#0a0a0c] bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] hover:shadow-lg hover:shadow-[#f4a5b8]/25 transition-shadow"
                  >
                    View My Skills
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={animations.snappy}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/[0.15] hover:border-[#f4a5b8]/50 hover:bg-white/[0.02] transition-all"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
