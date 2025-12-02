"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollProgress, FadeInSection } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { staggerContainer, fadeUp, cardHover } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";
import { FloatingPetals, FloatingOrbs } from "@/components/ui/floating-petals";
import { SpotlightCard } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic";
import { WordPullUp } from "@/components/ui/text-animations";
import { ScrollReveal, StaggerReveal, StaggerItem, Parallax } from "@/components/ui/scroll-animations";
import { Bento3DCard } from "@/components/ui/bento-cards";

// Skill categories
const skillCategories = [
  {
    title: "Finance & Accounting",
    color: "#f2b5c4",
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
    color: "#d4c6ff",
    icon: "💻",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Tableau", level: 70 },
      { name: "Power BI", level: 70 },
      { name: "Microsoft PowerPoint", level: 85 },
      { name: "Google Sheets", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    color: "#f0d78c",
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
    color: "#a8dbc5",
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
  { name: "Tableau", icon: "📉", category: "Analytics" },
  { name: "Power BI", icon: "📊", category: "Analytics" },
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
    color: "#f2b5c4",
  },
  {
    title: "Financial Modeling",
    description: "Building financial models for business valuation and forecasting",
    progress: 25,
    color: "#d4c6ff",
  },
  {
    title: "GST & Taxation",
    description: "Understanding practical aspects of GST and income tax compliance",
    progress: 35,
    color: "#f0d78c",
  },
];

export default function SkillsPage() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      {/* Dreamy Orbs Background - Skills */}
      <FloatingPetals count={15} />
      <FloatingOrbs count={6} />

      <main className="min-h-screen bg-[var(--background)] pt-24 relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="relative py-24 overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-grid-elegant opacity-40" />
          <div className="absolute inset-0 bg-vignette" />
          <div className="absolute inset-0 bg-noise" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-center mb-16"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block px-4 py-2 rounded-full glass-lilac text-[var(--lilac)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Skills & Competencies
                </span>
              </motion.div>
              
              <Parallax speed={0.3} className="mt-6">
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl md:text-7xl lg:text-8xl text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <WordPullUp words="What I Can Do" />
                </motion.h1>
              </Parallax>
              
              <motion.p
                variants={fadeUp}
                className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
              >
                A growing skillset focused on finance, accounting, and business tools
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== SKILL CATEGORIES SECTION ===== */}
        <section className="relative py-24 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIdx) => (
                <FadeInSection key={categoryIdx} delay={categoryIdx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      variants={cardHover}
                      initial="initial"
                      whileHover="hover"
                      className="h-full p-8 rounded-3xl card-glass border-gradient"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl glass"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          {category.icon}
                        </motion.div>
                        <h3
                          className="text-2xl gradient-text"
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
                              <span className="text-[var(--text-secondary)] text-sm">{skill.name}</span>
                              <span
                                className="text-sm font-medium"
                                style={{ color: category.color, fontFamily: "var(--font-space)" }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: skillIdx * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
                                className="h-full rounded-full relative overflow-hidden"
                                style={{
                                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                                }}
                              >
                                <div className="absolute inset-0 shimmer" />
                              </motion.div>
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
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-grid-elegant opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full glass-rose text-[var(--rose)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Tools & Technologies
                </span>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl gradient-text mt-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  My toolkit
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {tools.map((tool, idx) => (
                  <StaggerItem key={idx}>
                    <SpotlightCard className="h-full">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-6 rounded-2xl text-center group cursor-pointer h-full"
                      >
                        <motion.span 
                          className="text-4xl block mb-3"
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {tool.icon}
                        </motion.span>
                        <h4 className="text-[var(--foreground)] font-medium mb-1">{tool.name}</h4>
                        <span className="text-[var(--foreground-muted)] text-xs">{tool.category}</span>
                      </motion.div>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ===== LEARNING GOALS SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full glass-gold text-[var(--gold)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Currently Learning
                </span>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl gradient-text mt-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  My learning journey
                </h2>
                <p className="text-[var(--foreground-subtle)] max-w-xl mx-auto mt-4">
                  I&apos;m always expanding my knowledge. Here&apos;s what I&apos;m currently focused on learning.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {learningGoals.map((goal, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <Bento3DCard>
                    <div className="p-6 md:p-8 relative overflow-hidden">
                      {/* Accent glow */}
                      <div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
                        style={{ backgroundColor: goal.color }}
                      />
                      
                      <div className="relative z-10">
                        <h3
                          className="text-lg text-[var(--foreground)] mb-2"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {goal.title}
                        </h3>
                        <p className="text-[var(--foreground-subtle)] text-sm mb-4">{goal.description}</p>
                        
                        <div className="flex justify-end mb-2">
                          <span
                            className="text-sm font-medium px-3 py-1.5 rounded-full glass"
                            style={{
                              color: goal.color,
                              backgroundColor: `${goal.color}20`,
                              fontFamily: "var(--font-space)",
                            }}
                          >
                            {goal.progress}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${goal.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: [0.25, 0.8, 0.25, 1] }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{
                              background: `linear-gradient(90deg, ${goal.color}, ${goal.color}60)`,
                            }}
                          >
                            <div className="absolute inset-0 shimmer" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Bento3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILL SUMMARY SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-grid-elegant opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { value: "4+", label: "Skill Categories", color: "#f2b5c4" },
                  { value: "20+", label: "Tools & Skills", color: "#d4c6ff" },
                  { value: "∞", label: "Eagerness to Learn", color: "#f0d78c" },
                ].map((stat, idx) => (
                  <StaggerItem key={idx}>
                    <Bento3DCard>
                      <div className="p-8 rounded-3xl relative overflow-hidden group text-center">
                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                          style={{ backgroundColor: stat.color }}
                        />
                        
                        <motion.p
                          className="text-5xl md:text-6xl font-bold mb-2 relative z-10"
                          style={{ color: stat.color, fontFamily: "var(--font-space)" }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-[var(--foreground-subtle)] relative z-10">{stat.label}</p>
                      </div>
                    </Bento3DCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          
          {/* Decorative gradient orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(212,198,255,0.15), transparent 60%)', filter: 'blur(80px)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl gradient-text-animated mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to learn more?
              </h2>
              <p className="text-[var(--foreground-subtle)] text-lg max-w-2xl mx-auto mb-10">
                Check out my educational background or get in touch to discuss opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <Link
                    href="/education"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    View Education
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Contact Me
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
