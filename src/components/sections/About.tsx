"use client";

import { motion } from "framer-motion";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: springConfig,
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0c]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(196,181,253,0.06) 0%, transparent 60%)',
          filter: 'blur(60px)'
        }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-[#c4b5fd] text-sm tracking-wide mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Driven by Purpose
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#18181b] to-[#0f0f12] rounded-3xl p-8 md:p-10 border border-[#27272a]">
              {/* Profile Visual */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#27272a] to-[#18181b] flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div 
                    className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,158,181,0.15), rgba(196,181,253,0.15))',
                      border: '1px solid rgba(255,158,181,0.2)'
                    }}
                  >
                    <span className="text-5xl font-light" style={{ fontFamily: 'var(--font-cormorant)', color: '#ff9eb5' }}>RK</span>
                  </div>
                  <p className="text-white text-xl font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>Richa Kandhway</p>
                  <p className="text-[#71717a] text-sm mt-1">Finance Professional</p>
                </motion.div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "2nd", label: "Year" },
                  { value: "B.Com", label: "Student" },
                  { value: "A+", label: "Grade" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center py-3 bg-[#0a0a0c] rounded-xl border border-[#27272a]">
                    <p className="text-lg font-semibold bg-gradient-to-r from-[#ff9eb5] to-[#c4b5fd] bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-[#71717a] text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: 0.4 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-xl"
                style={{ background: 'linear-gradient(135deg, #ff9eb5, #c4b5fd)' }}
              >
                <p className="text-sm font-semibold text-[#0a0a0c]">Open to Work</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                I am a dedicated finance professional who leads with{" "}
                <span className="text-[#ff9eb5] font-medium">empathy</span> and{" "}
                <span className="text-[#c4b5fd] font-medium">precision</span>.
              </p>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                My approach combines analytical rigor with genuine care for the people and 
                organizations I serve. I transform complex financial landscapes into clear 
                pathways for success.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: "📊", title: "Financial Analysis", desc: "Expert in data-driven insights" },
                { icon: "🎯", title: "Strategic Planning", desc: "Clear pathways to success" },
                { icon: "🤝", title: "Empathetic Leadership", desc: "People-first approach" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springConfig, delay: idx * 0.1 + 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-[#71717a] text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#0a0a0c] transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ff9eb5, #c4b5fd)' }}
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:richakandhway@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#a1a1aa] border border-[#27272a] hover:border-[#3f3f46] hover:text-white transition-all"
              >
                richakandhway@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
