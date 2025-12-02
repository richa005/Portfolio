"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const technicalSkills = [
  { name: "Microsoft Excel", progress: 85, icon: "📊" },
  { name: "Accounting Basics", progress: 80, icon: "📚" },
  { name: "Financial Analysis", progress: 75, icon: "📈" },
  { name: "Tableau", progress: 70, icon: "📉" },
  { name: "Power BI", progress: 70, icon: "📊" },
  { name: "MS Office Suite", progress: 88, icon: "📱" },
];

const competencies = [
  {
    title: "Academic Excellence",
    description: "Consistently maintaining strong academic performance in commerce subjects",
    icon: (
      <svg className="w-6 h-6 text-[#f4a5b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Quick Learner",
    description: "Eager to learn new concepts and adapt to challenging situations quickly",
    icon: (
      <svg className="w-6 h-6 text-[#c8b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    description: "Meticulous approach to assignments and accounting practices",
    icon: (
      <svg className="w-6 h-6 text-[#e8c872]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Time Management",
    description: "Effectively balancing academics and personal development activities",
    icon: (
      <svg className="w-6 h-6 text-[#a8d5ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description: "Working effectively with classmates on group projects and presentations",
    icon: (
      <svg className="w-6 h-6 text-[#f4a5b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Communication",
    description: "Clear and effective written and verbal communication abilities",
    icon: (
      <svg className="w-6 h-6 text-[#c8b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const SkillBar = ({ name, progress, icon, delay }: { name: string; progress: number; icon: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...springConfig, delay }}
    whileHover={{ y: -3, transition: springConfig }}
    className="bg-[#151419] border border-white/[0.06] rounded-2xl p-5 hover:border-[#f4a5b8]/30 transition-colors duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-[#faf8f5] font-medium">{name}</span>
      <span className="ml-auto text-[#f4a5b8] font-semibold">{progress}%</span>
    </div>
    <div className="h-1.5 bg-[#0a0a0c] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ ...springConfig, delay: delay + 0.2 }}
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(to right, #f4a5b8, #c8b6ff)' }}
      />
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#0a0a0c]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,165,184,0.04),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="text-center mb-20"
        >
          <span className="text-[#8b8693] text-xs tracking-[0.3em] uppercase">My Expertise</span>
          <h2 className="text-4xl md:text-5xl text-[#faf8f5] mt-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Skills & Competencies</h2>
          <div className="w-12 h-px bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] mx-auto mt-6" />
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="mb-20"
        >
          <h3 className="text-2xl text-[#faf8f5] mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>
            <span className="p-2 rounded-xl bg-[#f4a5b8]/10">
              <svg className="w-6 h-6 text-[#f4a5b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalSkills.map((skill, idx) => (
              <SkillBar key={skill.name} {...skill} delay={idx * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={springConfig}
        >
          <h3 className="text-2xl text-[#faf8f5] mb-8 flex items-center gap-3" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>
            <span className="p-2 rounded-xl bg-[#c8b6ff]/10">
              <svg className="w-6 h-6 text-[#c8b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
            Core Competencies
          </h3>
          <BentoGrid className="max-w-7xl mx-auto">
            {competencies.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl border border-white/[0.04]" style={{ background: 'linear-gradient(135deg, rgba(244,165,184,0.03), rgba(21,20,25,0.5))' }} />
                }
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
