"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { ScrollProgress, FadeInSection } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { animations, staggerContainer, fadeUp, slideFromRight } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";

// Stats data
const stats = [
  { value: "2nd", label: "Year B.Com", suffix: "" },
  { value: "A+", label: "Academic Record", suffix: "" },
  { value: "100", label: "Dedication", suffix: "%" },
];

// What I Do section
const services = [
  {
    title: "Finance & Accounting",
    description: "Strong foundation in accounting principles, financial statements, and business economics",
    icon: "📊",
    color: "#f4a5b8",
  },
  {
    title: "Data Analysis",
    description: "Proficient in Excel, data interpretation, and creating meaningful business insights",
    icon: "📈",
    color: "#c8b6ff",
  },
  {
    title: "Quick Learner",
    description: "Eager to adapt, learn new technologies, and take on challenging assignments",
    icon: "⚡",
    color: "#e8c872",
  },
  {
    title: "Team Player",
    description: "Excellent communication skills with experience in group projects and presentations",
    icon: "🤝",
    color: "#a8d5ba",
  },
];

// Skills highlight
const skillsHighlight = [
  { name: "Excel", icon: "📊" },
  { name: "Tally", icon: "💼" },
  { name: "Accounting", icon: "📚" },
  { name: "Finance", icon: "📈" },
  { name: "MS Office", icon: "💻" },
  { name: "Communication", icon: "💬" },
];

export default function Home() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <main className="min-h-screen bg-[#0a0a0c]">
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(244,165,184,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(244,165,184,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
          
          {/* Gradient Orbs */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(244,165,184,0.12) 0%, transparent 60%)",
              top: "-10%",
              right: "-10%",
              filter: "blur(80px)",
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(200,182,255,0.1) 0%, transparent 60%)",
              bottom: "0%",
              left: "-5%",
              filter: "blur(60px)",
            }}
            animate={{ 
              scale: [1, 1.15, 1],
              y: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Diagonal Shape Divider */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #0a0a0c, transparent)",
            }}
          />
          
          {/* Main Content */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 min-h-screen flex items-center"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                >
                  {/* Status Badge */}
                  <motion.div variants={fadeUp} className="mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151419] border border-white/[0.08]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5ba] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8d5ba]"></span>
                      </span>
                      <span className="text-[#a8a3b3] text-sm">Available for opportunities</span>
                    </div>
                  </motion.div>
                  
                  {/* Main Heading */}
                  <motion.div variants={fadeUp} className="mb-6">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      <span className="text-[#a8a3b3]">Hi, I&apos;m</span>
                      <br />
                      <AnimatedText 
                        text="Richa Kandhway" 
                        className="text-white block mt-2"
                      />
                    </h1>
                  </motion.div>
                  
                  {/* Role */}
                  <motion.div variants={fadeUp} className="mb-6">
                    <p className="text-xl md:text-2xl font-medium">
                      <GradientText text="B.Com Student" gradient="from-[#f4a5b8] to-[#c8b6ff]" />
                    </p>
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p 
                    variants={fadeUp}
                    className="text-lg text-[#8b8693] leading-relaxed max-w-xl mb-8"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    2nd year Commerce student at university, building a strong foundation in 
                    finance and accounting. Eager to learn, grow, and contribute to meaningful projects.
                  </motion.p>
                  
                  {/* CTA Buttons */}
                  <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={animations.snappy}
                    >
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[#0a0a0c] bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] hover:shadow-lg hover:shadow-[#f4a5b8]/25 transition-shadow"
                      >
                        Learn About Me
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-white border border-white/[0.15] hover:border-[#f4a5b8]/50 hover:bg-white/[0.02] transition-all"
                      >
                        Get In Touch
                      </Link>
                    </motion.div>
                  </motion.div>
                  
                  {/* Social Links */}
                  <motion.div variants={fadeUp} className="flex items-center gap-4">
                    <span className="text-[#6d6875] text-sm">Connect:</span>
                    {[
                      { name: "LinkedIn", href: "https://www.linkedin.com/in/richa-kandhway-782655330" },
                      { name: "Email", href: "mailto:richakandhway@gmail.com" },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ y: -2 }}
                        transition={animations.snappy}
                        className="text-[#8b8693] hover:text-[#f4a5b8] transition-colors text-sm"
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Right - Visual */}
                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  animate="show"
                  className="relative hidden lg:block"
                >
                  <TiltCard className="perspective-1000">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#151419] to-[#1a1a1f] border border-white/[0.08]">
                      {/* Abstract geometric shapes */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute w-64 h-64 rounded-full border border-[#f4a5b8]/20"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="absolute w-48 h-48 rounded-full border border-[#c8b6ff]/20"
                        />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute w-32 h-32 rounded-full border border-[#e8c872]/20"
                        />
                        
                        {/* Center logo */}
                        <div className="relative z-10">
                          <Logo className="w-24 h-24" />
                        </div>
                      </div>
                      
                      {/* Floating elements */}
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-8 right-8 px-4 py-2 rounded-xl bg-[#f4a5b8]/10 border border-[#f4a5b8]/20"
                      >
                        <span className="text-sm text-[#f4a5b8]">B.Com 2nd Year</span>
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-8 left-8 px-4 py-2 rounded-xl bg-[#c8b6ff]/10 border border-[#c8b6ff]/20"
                      >
                        <span className="text-sm text-[#c8b6ff]">Finance Enthusiast</span>
                      </motion.div>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>
              
              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center text-[#6d6875]"
                >
                  <span className="text-xs tracking-widest uppercase mb-2">Scroll down</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        
        {/* ===== WHAT I DO SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">What I Do</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  I specialize in building a strong{" "}
                  <span className="text-[#f4a5b8]">foundation</span>
                </h2>
              </div>
            </FadeInSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={animations.smooth}
                      className="h-full p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors group"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-lg text-white font-medium mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                        {service.title}
                      </h3>
                      <p className="text-[#8b8693] text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  </TiltCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* ===== ABOUT PREVIEW SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div 
            className="absolute top-0 left-0 right-0 h-24"
            style={{
              background: "linear-gradient(to bottom, #0a0a0c, transparent)",
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInSection>
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">About Me</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Get to know me better
                </h2>
                <p className="text-[#a8a3b3] text-lg leading-relaxed mb-6">
                  I am a passionate 2nd year B.Com student with a keen interest in finance, 
                  accounting, and business analytics. Currently building a strong foundation 
                  while actively seeking opportunities to apply my knowledge.
                </p>
                <p className="text-[#8b8693] leading-relaxed mb-8">
                  My academic journey has equipped me with analytical skills, attention to detail, 
                  and a commitment to excellence. I am eager to learn and grow in the finance industry.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#f4a5b8] hover:gap-3 transition-all font-medium"
                  >
                    Learn More About Me
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#8b8693] hover:text-white transition-colors font-medium"
                  >
                    Get In Touch
                  </Link>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={animations.snappy}
                      className={`p-6 rounded-2xl bg-[#151419] border border-white/[0.05] ${
                        idx === 2 ? "col-span-2" : ""
                      }`}
                    >
                      <p 
                        className="text-4xl font-semibold bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] bg-clip-text text-transparent"
                        style={{ fontFamily: 'var(--font-space)' }}
                      >
                        {stat.value}{stat.suffix}
                      </p>
                      <p className="text-[#8b8693] text-sm mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
        
        {/* ===== SKILLS PREVIEW ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInSection>
              <div className="text-center mb-16">
                <span className="text-[#8b8693] text-sm tracking-[0.2em] uppercase">Skills & Technologies</span>
                <h2 className="text-4xl md:text-5xl text-white mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The tools I&apos;m learning
                </h2>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {skillsHighlight.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={animations.snappy}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#151419] border border-white/[0.05] hover:border-[#f4a5b8]/30 transition-colors"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#f4a5b8] border border-[#f4a5b8]/30 hover:bg-[#f4a5b8]/5 transition-colors"
                >
                  View All Skills
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
        
        {/* ===== CTA SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-6xl text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Let&apos;s Work{" "}
                <span className="bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] bg-clip-text text-transparent">Together</span>
              </h2>
              <p className="text-[#8b8693] text-lg max-w-2xl mx-auto mb-10">
                Have an opportunity in mind or just want to connect? I&apos;m always open 
                to discussing internships, projects, and learning experiences.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.a
                  href="mailto:richakandhway@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={animations.snappy}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#8b8693] border border-white/[0.1] hover:text-white hover:border-white/[0.2] transition-all"
                >
                  richakandhway@gmail.com
                </motion.a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
