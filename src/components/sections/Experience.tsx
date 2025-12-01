"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const aspirations = [
  {
    title: "Career Goals",
    subtitle: "What I'm Looking For",
    color: "#f4a5b8",
    icon: (
      <svg className="w-8 h-8 text-[#f4a5b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      "Internship opportunities in Finance & Accounting",
      "Entry-level positions in Business Analysis",
      "Learning experiences in Corporate Finance",
      "Mentorship from industry professionals",
    ],
  },
  {
    title: "Academic Projects",
    subtitle: "What I'm Working On",
    color: "#c8b6ff",
    icon: (
      <svg className="w-8 h-8 text-[#c8b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    items: [
      "Financial statement analysis assignments",
      "Case studies on business management",
      "Excel-based accounting projects",
      "Research on market trends and economics",
    ],
  },
  {
    title: "Skills I'm Building",
    subtitle: "My Learning Journey",
    color: "#e8c872",
    icon: (
      <svg className="w-8 h-8 text-[#e8c872]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      "Advanced Excel & Financial Modeling",
      "Accounting principles & practices",
      "Business communication skills",
      "Data analysis fundamentals",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 bg-[#0a0a0c]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151419]/30 via-transparent to-[#151419]/30 pointer-events-none" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(244,165,184,0.1) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="text-center mb-20"
        >
          <span className="text-[#8b8693] text-xs tracking-[0.3em] uppercase">Seeking Opportunities</span>
          <h2 className="text-4xl md:text-5xl text-[#faf8f5] mt-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Goals & Aspirations</h2>
          <div className="w-12 h-px bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] mx-auto mt-6" />
          <p className="text-[#a09aab] mt-6 max-w-2xl mx-auto font-light">
            As a 2nd year B.Com student, I am actively seeking internship opportunities and hands-on 
            experience to kickstart my career in finance.
          </p>
        </motion.div>

        {/* Aspirations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {aspirations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: idx * 0.12 }}
            >
              <BackgroundGradient className="rounded-3xl p-1 h-full">
                <div className="bg-[#151419] rounded-3xl p-8 h-full relative overflow-hidden group">
                  {/* Decorative Background */}
                  <div 
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-transform duration-500 group-hover:scale-150" 
                    style={{ background: `radial-gradient(circle, ${item.color}10, transparent)` }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={springConfig}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)` }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl text-[#faf8f5] mb-1" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>{item.title}</h3>
                  <p className="text-sm mb-5" style={{ color: item.color }}>{item.subtitle}</p>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {item.items.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-[#a09aab] font-light text-sm"
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" 
                          style={{ backgroundColor: item.color }}
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#8b8693] font-light mb-6">
            Ready to learn, grow, and contribute with enthusiasm
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#0a0a0c] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #f4a5b8, #c8b6ff)' }}
          >
            Let&apos;s Connect
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
