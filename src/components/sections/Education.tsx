"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const educationData = [
  {
    title: "Bachelor of Commerce (B.Com)",
    institution: "Currently Pursuing - 2nd Year",
    year: "2024 - 2027",
    color: "#f4a5b8",
    icon: (
      <svg className="w-8 h-8 text-[#f4a5b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Higher Secondary (12th)",
    institution: "Commerce Stream",
    year: "Completed",
    color: "#c8b6ff",
    icon: (
      <svg className="w-8 h-8 text-[#c8b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Secondary Education (10th)",
    institution: "High School",
    year: "Completed",
    color: "#e8c872",
    icon: (
      <svg className="w-8 h-8 text-[#e8c872]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-32 overflow-hidden bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="text-center mb-20"
        >
          <span className="text-[#8b8693] text-xs tracking-[0.3em] uppercase">Academic Background</span>
          <h2 className="text-4xl md:text-5xl text-[#faf8f5] mt-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Education & Certifications</h2>
          <div className="w-12 h-px bg-gradient-to-r from-[#c8b6ff] to-[#f4a5b8] mx-auto mt-6" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, idx) => (
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
                  <h3 className="text-xl text-[#faf8f5] mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>{item.title}</h3>
                  <p className="text-[#8b8693] font-light mb-4">{item.institution}</p>
                  
                  {/* Year Badge */}
                  <span 
                    className="inline-block px-4 py-1.5 text-sm font-light rounded-full border"
                    style={{ 
                      backgroundColor: `${item.color}10`,
                      color: item.color,
                      borderColor: `${item.color}30`
                    }}
                  >
                    {item.year}
                  </span>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "2nd", label: "Year B.Com", color: "#f4a5b8" },
            { value: "12th", label: "Commerce", color: "#c8b6ff" },
            { value: "10th", label: "Completed", color: "#e8c872" },
            { value: "100%", label: "Dedication", color: "#a8d5ba" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={springConfig}
              className="bg-[#151419] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-[#f4a5b8]/20 transition-colors duration-300"
            >
              <p 
                className="text-3xl md:text-4xl font-light"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.value}
              </p>
              <p className="text-[#8b8693] mt-2 font-light text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
