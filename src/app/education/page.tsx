"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { ScrollProgress, FadeInSection } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { animations, staggerContainer, fadeUp } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";

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
    color: "#f4a5b8",
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
    color: "#c8b6ff",
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
    color: "#e8c872",
    current: false,
  },
];

// Academic achievements
const achievements = [
  {
    title: "Consistent Academic Performance",
    description: "Maintained excellent grades throughout academic journey",
    icon: "🏆",
    color: "#f4a5b8",
  },
  {
    title: "Active Participation",
    description: "Regularly participated in class activities and group projects",
    icon: "🎯",
    color: "#c8b6ff",
  },
  {
    title: "Quick Learner",
    description: "Recognized for quickly grasping complex financial concepts",
    icon: "⚡",
    color: "#e8c872",
  },
  {
    title: "Team Player",
    description: "Effective collaboration in group assignments and presentations",
    icon: "🤝",
    color: "#a8d5ba",
  },
];

// Certifications/Courses (Future goals)
const certifications = [
  {
    title: "Tally ERP 9",
    provider: "Self Learning",
    status: "In Progress",
    color: "#f4a5b8",
  },
  {
    title: "Advanced Excel",
    provider: "Online Course",
    status: "Planned",
    color: "#c8b6ff",
  },
  {
    title: "GST Certification",
    provider: "Professional Course",
    status: "Planned",
    color: "#e8c872",
  },
  {
    title: "Financial Modeling",
    provider: "Online Course",
    status: "Planned",
    color: "#a8d5ba",
  },
];

export default function EducationPage() {
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
              background: "radial-gradient(circle, rgba(232,200,114,0.08) 0%, transparent 60%)",
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
                  My Education
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl text-white mt-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <AnimatedText text="Academic Journey" />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[#8b8693] text-lg max-w-2xl mx-auto mt-6"
              >
                Building a strong foundation in commerce and finance
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== EDUCATION TIMELINE SECTION ===== */}
        <section className="relative py-20 bg-[#0d0d10]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f4a5b8]/50 via-[#c8b6ff]/50 to-[#e8c872]/50 transform md:-translate-x-1/2" />

              {education.map((edu, idx) => (
                <FadeInSection key={idx} delay={idx * 0.15}>
                  <div
                    className={`relative flex items-start gap-8 mb-16 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10"
                      style={{ backgroundColor: edu.color }}
                    >
                      {edu.current && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{ backgroundColor: edu.color, opacity: 0.5 }}
                        />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[45%] ${
                        idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <TiltCard glareEnabled={false}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={animations.smooth}
                          className="p-8 rounded-3xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                        >
                          {/* Status badge */}
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: `${edu.color}15`,
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
                            className="text-2xl text-white mb-2"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {edu.degree}
                          </h3>
                          <p className="text-[#8b8693] mb-4">{edu.institution}</p>

                          {/* Description */}
                          <p className="text-[#6d6875] text-sm mb-6">{edu.description}</p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="px-3 py-1.5 rounded-full text-xs bg-white/[0.03] text-[#a8a3b3] border border-white/[0.05]"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </TiltCard>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACHIEVEMENTS SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">
                  Achievements
                </span>
                <h2
                  className="text-4xl md:text-5xl text-white mt-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Academic <GradientText text="Highlights" />
                </h2>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={animations.smooth}
                    className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors text-center h-full"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      {achievement.icon}
                    </div>
                    <h3
                      className="text-lg text-white font-medium mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {achievement.title}
                    </h3>
                    <p className="text-[#8b8693] text-sm">{achievement.description}</p>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">
                  Certifications & Courses
                </span>
                <h2
                  className="text-4xl md:text-5xl text-white mt-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Learning roadmap
                </h2>
                <p className="text-[#8b8693] max-w-xl mx-auto mt-4">
                  Courses and certifications I&apos;m pursuing to enhance my professional skills
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={animations.smooth}
                    className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05] relative overflow-hidden"
                  >
                    {/* Status indicator */}
                    <div
                      className="absolute top-0 right-0 px-3 py-1 text-xs rounded-bl-xl"
                      style={{
                        backgroundColor: `${cert.color}15`,
                        color: cert.color,
                      }}
                    >
                      {cert.status}
                    </div>

                    <h3
                      className="text-lg text-white mb-2 mt-4"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-[#6d6875] text-sm">{cert.provider}</p>

                    {/* Progress indicator */}
                    <div className="mt-4 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: cert.status === "In Progress" ? "40%" : cert.status === "Planned" ? "0%" : "100%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: cert.color }}
                      />
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2nd", label: "Year of B.Com", color: "#f4a5b8" },
                { value: "3", label: "Education Levels", color: "#c8b6ff" },
                { value: "15+", label: "Subjects Studied", color: "#e8c872" },
                { value: "4", label: "Certifications Planned", color: "#a8d5ba" },
              ].map((stat, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={animations.smooth}
                    className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05]"
                  >
                    <p
                      className="text-4xl font-bold mb-2"
                      style={{ color: stat.color, fontFamily: "var(--font-space)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#8b8693] text-sm">{stat.label}</p>
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
                Let&apos;s connect
              </h2>
              <p className="text-[#8b8693] text-lg max-w-2xl mx-auto mb-10">
                Interested in learning more about me or discussing opportunities? I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={animations.snappy}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#0a0a0c] bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] hover:shadow-lg hover:shadow-[#f4a5b8]/25 transition-shadow"
                  >
                    Get In Touch
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
                    href="/skills"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/[0.15] hover:border-[#f4a5b8]/50 hover:bg-white/[0.02] transition-all"
                  >
                    View Skills
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
