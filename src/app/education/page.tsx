"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { staggerContainer, fadeUp, cardHover } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";
import { FloatingPetals } from "@/components/ui/floating-petals";
import { SpotlightCard } from "@/components/ui/spotlight";
import { MagneticButton } from "@/components/ui/magnetic";
import { WordPullUp } from "@/components/ui/text-animations";
import { ScrollReveal, StaggerReveal, StaggerItem, Parallax } from "@/components/ui/scroll-animations";
import { Bento3DCard, FeatureCard } from "@/components/ui/bento-cards";

// Education data
const education = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "University",
    period: "2024 - Present",
    status: "Currently Pursuing",
    description: "Focusing on core commerce subjects including accounting, finance, economics, and business studies. Building a strong foundation for a career in finance.",
    highlights: [
      "Financial Accounting",
      "Business Economics",
      "Cost Accounting",
      "Corporate Law",
      "Business Statistics",
    ],
    color: "#f2b5c4",
    current: true,
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Commerce Stream",
    period: "2022 - 2023",
    status: "Completed",
    description: "Completed higher secondary education with Commerce stream, developing foundational knowledge in accounts, business studies, and economics.",
    highlights: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "English",
    ],
    color: "#d4c6ff",
    current: false,
  },
  {
    degree: "Secondary Education (10th)",
    institution: "General Studies",
    period: "2020 - 2021",
    status: "Completed",
    description: "Completed secondary education with a well-rounded curriculum, discovering passion for commerce and business subjects.",
    highlights: [
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Hindi",
    ],
    color: "#f0d78c",
    current: false,
  },
];

// Academic achievements
const achievements = [
  {
    title: "Consistent Academic Performance",
    description: "Maintained excellent grades throughout academic journey",
    icon: "🏆",
    color: "#f2b5c4",
  },
  {
    title: "Active Participation",
    description: "Regularly participated in class activities and group projects",
    icon: "🎯",
    color: "#d4c6ff",
  },
  {
    title: "Quick Learner",
    description: "Recognized for quickly grasping complex financial concepts",
    icon: "⚡",
    color: "#f0d78c",
  },
  {
    title: "Team Player",
    description: "Effective collaboration in group assignments and presentations",
    icon: "🤝",
    color: "#a8dbc5",
  },
];

// Certifications/Courses (Future goals)
const certifications = [
  {
    title: "Stock Market Course",
    provider: "NISM Certification",
    status: "In Progress",
    color: "#f2b5c4",
  },
  {
    title: "Tableau",
    provider: "Online Course",
    status: "Planned",
    color: "#d4c6ff",
  },
  {
    title: "GST Certification",
    provider: "Professional Course",
    status: "Planned",
    color: "#f0d78c",
  },
  {
    title: "Financial Modeling",
    provider: "Online Course",
    status: "Planned",
    color: "#a8dbc5",
  },
];

export default function EducationPage() {
  useLenis();

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      {/* Elegant Petals Background - Education */}
      <FloatingPetals count={20} />

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
                <span className="inline-block px-4 py-2 rounded-full glass-gold text-[var(--gold)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ My Education
                </span>
              </motion.div>
              
              <Parallax speed={0.3} className="mt-6">
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl md:text-7xl lg:text-8xl text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <WordPullUp words="Academic Journey" />
                </motion.h1>
              </Parallax>
              
              <motion.p
                variants={fadeUp}
                className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
              >
                Building a strong foundation in commerce and finance
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== EDUCATION TIMELINE SECTION ===== */}
        <section className="relative py-24 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline line with animated gradient */}
              <motion.div 
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2"
                style={{ 
                  background: "linear-gradient(to bottom, var(--rose), var(--lilac), var(--gold))",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {education.map((edu, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.15}>
                  <div
                    className={`relative flex items-start gap-8 mb-16 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot with glow */}
                    <motion.div
                      className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 z-10"
                      style={{ 
                        backgroundColor: edu.color,
                        boxShadow: `0 0 20px ${edu.color}60`
                      }}
                      whileHover={{ scale: 1.4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {edu.current && (
                        <>
                          <span
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ backgroundColor: edu.color, opacity: 0.5 }}
                          />
                          <span
                            className="absolute -inset-2 rounded-full animate-pulse"
                            style={{ backgroundColor: edu.color, opacity: 0.2 }}
                          />
                        </>
                      )}
                    </motion.div>

                    {/* Content card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[45%] ${
                        idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <SpotlightCard className="h-full">
                        <motion.div
                          variants={cardHover}
                          initial="initial"
                          whileHover="hover"
                          className="p-8 rounded-3xl relative overflow-hidden"
                        >
                          {/* Accent glow */}
                          <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 blur-3xl"
                            style={{ backgroundColor: edu.color }}
                          />
                          
                          {/* Status badge */}
                          <div className="relative z-10 flex items-center gap-3 mb-4">
                            <span
                              className="px-3 py-1.5 rounded-full text-xs font-medium glass shimmer"
                              style={{
                                backgroundColor: `${edu.color}20`,
                                color: edu.color,
                              }}
                            >
                              {edu.status}
                            </span>
                            <span
                              className="text-sm"
                              style={{ color: edu.color, fontFamily: "var(--font-space)" }}
                            >
                              {edu.period}
                            </span>
                          </div>

                          {/* Degree & Institution */}
                          <h3
                            className="relative z-10 text-2xl gradient-text mb-2"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {edu.degree}
                          </h3>
                          <p className="relative z-10 text-[var(--foreground-subtle)] mb-4">{edu.institution}</p>

                          {/* Description */}
                          <p className="relative z-10 text-[var(--foreground-muted)] text-sm mb-6">{edu.description}</p>

                          {/* Highlights */}
                          <div className="relative z-10 flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, hIdx) => (
                              <motion.span
                                key={hIdx}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="px-3 py-1.5 rounded-full text-xs glass text-[var(--foreground-subtle)] border border-white/[0.08] transition-colors"
                              >
                                {highlight}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </SpotlightCard>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACHIEVEMENTS SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-grid-elegant opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full glass-rose text-[var(--rose)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Achievements
                </span>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl gradient-text mt-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Academic Highlights
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, idx) => (
                  <StaggerItem key={idx}>
                    <FeatureCard
                      icon={achievement.icon}
                      title={achievement.title}
                      description={achievement.description}
                      gradient={`from-[${achievement.color}] to-[${achievement.color}80]`}
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ===== CERTIFICATIONS SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full glass-lilac text-[var(--lilac)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Certifications & Courses
                </span>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl gradient-text mt-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Learning roadmap
                </h2>
                <p className="text-[var(--foreground-subtle)] max-w-xl mx-auto mt-4">
                  Courses and certifications I&apos;m pursuing to enhance my professional skills
                </p>
              </div>
            </ScrollReveal>

            <StaggerReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert, idx) => (
                  <StaggerItem key={idx}>
                    <Bento3DCard>
                      <div className="p-6 rounded-2xl relative overflow-hidden">
                        {/* Status indicator */}
                        <div
                          className="absolute top-0 right-0 px-3 py-1.5 text-xs rounded-bl-xl glass"
                          style={{
                            backgroundColor: `${cert.color}20`,
                            color: cert.color,
                          }}
                        >
                          {cert.status}
                        </div>

                        <h3
                          className="text-lg text-[var(--foreground)] mb-2 mt-4"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {cert.title}
                        </h3>
                        <p className="text-[var(--foreground-muted)] text-sm">{cert.provider}</p>

                        {/* Progress indicator */}
                        <div className="mt-4 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: cert.status === "In Progress" ? "40%" : cert.status === "Planned" ? "0%" : "100%",
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ backgroundColor: cert.color }}
                          >
                            <div className="absolute inset-0 shimmer" />
                          </motion.div>
                        </div>
                      </div>
                    </Bento3DCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-grid-elegant opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "2nd", label: "Year of B.Com", color: "#f2b5c4" },
                  { value: "3", label: "Education Levels", color: "#d4c6ff" },
                  { value: "15+", label: "Subjects Studied", color: "#f0d78c" },
                  { value: "4", label: "Certifications Planned", color: "#a8dbc5" },
                ].map((stat, idx) => (
                  <StaggerItem key={idx}>
                    <Bento3DCard>
                      <div className="p-6 rounded-2xl relative overflow-hidden text-center">
                        <motion.p
                          className="text-4xl md:text-5xl font-bold mb-2 relative z-10"
                          style={{ color: stat.color, fontFamily: "var(--font-space)" }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-[var(--foreground-subtle)] text-sm relative z-10">{stat.label}</p>
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
            style={{ background: 'radial-gradient(circle, rgba(240,215,140,0.15), transparent 60%)', filter: 'blur(80px)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl gradient-text-animated mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Let&apos;s connect
              </h2>
              <p className="text-[var(--foreground-subtle)] text-lg max-w-2xl mx-auto mb-10">
                Interested in learning more about me or discussing opportunities? I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Get In Touch
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
                    href="/skills"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    View Skills
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
