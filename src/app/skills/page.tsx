"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { ScrollProgress, FadeInSection } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { animations, staggerContainer, fadeUp } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";

// Skill categories
const skillCategories = [
  {
    title: "Finance & Accounting",
    color: "#f4a5b8",
    icon: "📊",
    skills: [
      { name: "Financial Accounting", level: 75 },
      { name: "Cost Accounting", level: 70 },
      { name: "Business Economics", level: 80 },
      { name: "Taxation Basics", level: 65 },
      { name: "Auditing Fundamentals", level: 60 },
    ],
  },
  {
    title: "Software & Tools",
    color: "#c8b6ff",
    icon: "💻",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Tally ERP 9", level: 75 },
      { name: "Microsoft Word", level: 90 },
      { name: "Microsoft PowerPoint", level: 85 },
      { name: "Google Sheets", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    color: "#e8c872",
    icon: "🤝",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Team Collaboration", level: 80 },
      { name: "Problem Solving", level: 75 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 85 },
    ],
  },
  {
    title: "Analytical Skills",
    color: "#a8d5ba",
    icon: "📈",
    skills: [
      { name: "Data Interpretation", level: 70 },
      { name: "Critical Thinking", level: 75 },
      { name: "Research Skills", level: 80 },
      { name: "Attention to Detail", level: 85 },
      { name: "Logical Reasoning", level: 75 },
    ],
  },
];

// Tools & Technologies
const tools = [
  { name: "Excel", icon: "📊", category: "Office" },
  { name: "Tally", icon: "💼", category: "Accounting" },
  { name: "Word", icon: "📝", category: "Office" },
  { name: "PowerPoint", icon: "📽️", category: "Office" },
  { name: "Google Docs", icon: "📄", category: "Cloud" },
  { name: "Google Sheets", icon: "📈", category: "Cloud" },
  { name: "Gmail", icon: "📧", category: "Communication" },
  { name: "Canva", icon: "🎨", category: "Design" },
];

// Learning Goals
const learningGoals = [
  {
    title: "Advanced Excel & Data Analysis",
    description: "Mastering pivot tables, VLOOKUP, macros, and data visualization",
    progress: 40,
    color: "#f4a5b8",
  },
  {
    title: "Financial Modeling",
    description: "Building financial models for business valuation and forecasting",
    progress: 25,
    color: "#c8b6ff",
  },
  {
    title: "GST & Taxation",
    description: "Understanding practical aspects of GST and income tax compliance",
    progress: 35,
    color: "#e8c872",
  },
];

export default function SkillsPage() {
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
              background: "radial-gradient(circle, rgba(200,182,255,0.08) 0%, transparent 60%)",
              top: "-10%",
              left: "-10%",
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
                  Skills & Competencies
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl text-white mt-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <AnimatedText text="What I Can Do" />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[#8b8693] text-lg max-w-2xl mx-auto mt-6"
              >
                A growing skillset focused on finance, accounting, and business tools
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SKILL CATEGORIES SECTION ===== */}
        <section className="relative py-20 bg-[#0d0d10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIdx) => (
                <FadeInSection key={categoryIdx} delay={categoryIdx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={animations.smooth}
                      className="h-full p-8 rounded-3xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: `${category.color}15` }}
                        >
                          {category.icon}
                        </div>
                        <h3
                          className="text-2xl text-white"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills with Progress */}
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIdx) => (
                          <div key={skillIdx}>
                            <div className="flex justify-between mb-2">
                              <span className="text-[#a8a3b3] text-sm">{skill.name}</span>
                              <span
                                className="text-sm font-medium"
                                style={{ color: category.color, fontFamily: "var(--font-space)" }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: skillIdx * 0.1, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </TiltCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TOOLS SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">
                  Tools & Technologies
                </span>
                <h2
                  className="text-4xl md:text-5xl text-white mt-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  My toolkit
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={animations.snappy}
                    className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-[#f4a5b8]/30 transition-colors text-center group"
                  >
                    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </span>
                    <h4 className="text-white font-medium mb-1">{tool.name}</h4>
                    <span className="text-[#6d6875] text-xs">{tool.category}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ===== LEARNING GOALS SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">
                  Currently Learning
                </span>
                <h2
                  className="text-4xl md:text-5xl text-white mt-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  My learning journey
                </h2>
                <p className="text-[#8b8693] max-w-xl mx-auto mt-4">
                  I&apos;m always expanding my knowledge. Here&apos;s what I&apos;m currently focused on learning.
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {learningGoals.map((goal, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={animations.smooth}
                    className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3
                          className="text-lg text-white mb-1"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {goal.title}
                        </h3>
                        <p className="text-[#8b8693] text-sm">{goal.description}</p>
                      </div>
                      <span
                        className="text-sm font-medium px-2 py-1 rounded-full"
                        style={{
                          color: goal.color,
                          backgroundColor: `${goal.color}15`,
                          fontFamily: "var(--font-space)",
                        }}
                      >
                        {goal.progress}%
                      </span>
                    </div>

                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${goal.color}, ${goal.color}60)`,
                        }}
                      />
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILL SUMMARY SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: "4+", label: "Skill Categories", color: "#f4a5b8" },
                { value: "20+", label: "Tools & Skills", color: "#c8b6ff" },
                { value: "∞", label: "Eagerness to Learn", color: "#e8c872" },
              ].map((stat, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={animations.smooth}
                    className="p-8 rounded-3xl bg-[#151419] border border-white/[0.05]"
                  >
                    <p
                      className="text-5xl font-bold mb-2"
                      style={{ color: stat.color, fontFamily: "var(--font-space)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#8b8693]">{stat.label}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h2
                className="text-4xl md:text-5xl text-white mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to learn more?
              </h2>
              <p className="text-[#8b8693] text-lg max-w-2xl mx-auto mb-10">
                Check out my educational background or get in touch to discuss opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={animations.snappy}
                >
                  <Link
                    href="/education"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#0a0a0c] bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] hover:shadow-lg hover:shadow-[#f4a5b8]/25 transition-shadow"
                  >
                    View Education
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={animations.snappy}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/[0.15] hover:border-[#f4a5b8]/50 hover:bg-white/[0.02] transition-all"
                  >
                    Contact Me
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
