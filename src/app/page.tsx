"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { ScrollProgress } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SpotlightCard } from "@/components/ui/spotlight";
import { Magnetic, MagneticButton } from "@/components/ui/magnetic";
import { FlipWords, WordPullUp, TypingAnimation, MorphingText } from "@/components/ui/text-animations";
import { ScrollReveal, StaggerReveal, StaggerItem, Parallax } from "@/components/ui/scroll-animations";
import { Bento3DCard, FeatureCard } from "@/components/ui/bento-cards";
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
    gradient: "from-[var(--rose)] to-[var(--peach)]",
  },
  {
    title: "Data Analysis",
    description: "Proficient in Excel, data interpretation, and creating meaningful business insights",
    icon: "📈",
    gradient: "from-[var(--lilac)] to-[var(--rose)]",
  },
  {
    title: "Quick Learner",
    description: "Eager to adapt, learn new technologies, and take on challenging assignments",
    icon: "⚡",
    gradient: "from-[var(--gold)] to-[var(--peach)]",
  },
  {
    title: "Team Player",
    description: "Excellent communication skills with experience in group projects and presentations",
    icon: "🤝",
    gradient: "from-[var(--sage)] to-[var(--lilac)]",
  },
];

// Skills highlight
const skillsHighlight = [
  { name: "Excel", icon: "📊", color: "var(--sage)" },
  { name: "Tableau", icon: "📉", color: "var(--lilac)" },
  { name: "Power BI", icon: "📊", color: "var(--gold)" },
  { name: "Finance", icon: "📈", color: "var(--rose)" },
  { name: "MS Office", icon: "💻", color: "var(--peach)" },
  { name: "Communication", icon: "💬", color: "var(--lilac)" },
];

// Roles for typing animation
const roles = ["B.Com Student", "Finance Enthusiast", "Quick Learner", "Future Analyst"];

export default function Home() {
  useLenis();
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const springConfig = { stiffness: 100, damping: 30 };
  const smoothHeroY = useSpring(heroY, springConfig);
  const smoothScale = useSpring(heroScale, springConfig);
  
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      <main className="min-h-screen relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen overflow-hidden flex items-center">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-grid-elegant opacity-40" />
          
          {/* Morphing decorative shapes */}
          <motion.div
            className="absolute top-[15%] left-[8%] w-40 h-40 opacity-30 animate-morph"
            style={{
              background: "linear-gradient(135deg, var(--rose), var(--lilac))",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-32 h-32 opacity-25 animate-morph"
            style={{
              background: "linear-gradient(135deg, var(--sage), var(--gold))",
              filter: "blur(35px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Gradient overlay at bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--background), transparent)",
            }}
          />
          
          {/* Main Hero Content */}
          <motion.div 
            style={{ y: smoothHeroY, opacity: heroOpacity, scale: smoothScale }}
            className="relative z-10 w-full"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="relative"
                >
                  {/* Status Badge */}
                  <motion.div variants={fadeUp} className="mb-8">
                    <motion.div 
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-rose animate-border-glow"
                      whileHover={{ scale: 1.02 }}
                      transition={animations.snappy}
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--sage)]"></span>
                      </span>
                      <span className="text-[var(--foreground-muted)] text-sm font-medium">
                        Open for opportunities
                      </span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Main Heading with premium text animations */}
                  <motion.div variants={fadeUp} className="mb-6">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      <span className="text-[var(--foreground-muted)]">Hi, I&apos;m</span>
                      <br />
                      <motion.span 
                        className="relative inline-block mt-2 gradient-text-luxury"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Richa Kandhway
                      </motion.span>
                    </h1>
                  </motion.div>
                  
                  {/* Role with typing animation */}
                  <motion.div variants={fadeUp} className="mb-6 h-10">
                    <p className="text-xl md:text-2xl font-medium">
                      <TypingAnimation 
                        texts={roles}
                        className="gradient-text-ethereal"
                        typingSpeed={100}
                        deletingSpeed={50}
                        pauseDuration={2500}
                      />
                    </p>
                  </motion.div>
                  
                  {/* Description with word pull up */}
                  <motion.div variants={fadeUp} className="mb-10">
                    <WordPullUp
                      words="2nd year Commerce student at university, building a strong foundation in finance and accounting. Eager to learn, grow, and contribute to meaningful projects."
                      className="text-[var(--foreground-subtle)] text-lg leading-relaxed"
                      wrapperClassName="max-w-xl"
                    />
                  </motion.div>
                  
                  {/* CTA Buttons with magnetic effect */}
                  <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                    <Magnetic strength={0.2}>
                      <MagneticButton className="btn-primary inline-flex items-center gap-2">
                        <Link href="/about" className="flex items-center gap-2">
                          <span>Learn About Me</span>
                          <motion.svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </motion.svg>
                        </Link>
                      </MagneticButton>
                    </Magnetic>
                    
                    <Magnetic strength={0.15}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={animations.snappy}
                      >
                        <Link
                          href="/contact"
                          className="btn-secondary inline-flex items-center gap-2"
                        >
                          <span>Get In Touch</span>
                        </Link>
                      </motion.div>
                    </Magnetic>
                  </motion.div>
                  
                  {/* Social Links with icons */}
                  <motion.div variants={fadeUp} className="flex items-center gap-5">
                    <span className="text-[var(--foreground-faint)] text-sm">Connect:</span>
                    <Magnetic strength={0.3}>
                      <motion.a
                        href="https://www.linkedin.com/in/richa-kandhway-782655330"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center glass hover:glass-rose transition-all group"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-[var(--foreground-subtle)] group-hover:text-[var(--rose)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </motion.a>
                    </Magnetic>
                    <Magnetic strength={0.3}>
                      <motion.a
                        href="mailto:richakandhway11@gmail.com"
                        className="w-10 h-10 rounded-full flex items-center justify-center glass hover:glass-rose transition-all group"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Email"
                      >
                        <svg className="w-5 h-5 text-[var(--foreground-subtle)] group-hover:text-[var(--rose)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.a>
                    </Magnetic>
                  </motion.div>
                </motion.div>
                
                {/* Right - 3D Visual Card */}
                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  animate="show"
                  className="relative hidden lg:block"
                >
                  <Parallax speed={0.2} direction="up">
                    <SpotlightCard className="rounded-3xl">
                      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden p-1">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--rose)]/10 via-transparent to-[var(--lilac)]/10" />
                        
                        {/* Rotating geometric elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-80 h-80 rounded-full border border-[var(--rose)]/20"
                            style={{ boxShadow: "0 0 50px rgba(244,184,200,0.08)" }}
                          />
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-60 h-60 rounded-full border border-[var(--lilac)]/15"
                          />
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-44 h-44 rounded-full border border-[var(--gold)]/20"
                          />
                          
                          {/* Center logo with glow */}
                          <motion.div 
                            className="relative z-10 animate-glow-breathe"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Logo className="w-32 h-32 drop-shadow-lg" />
                          </motion.div>
                        </div>
                        
                        {/* Floating info pills */}
                        <motion.div
                          animate={{ 
                            y: [-8, 8, -8], 
                            rotate: [-2, 2, -2],
                            boxShadow: [
                              "0 8px 30px rgba(244,184,200,0.15)",
                              "0 12px 40px rgba(244,184,200,0.25)",
                              "0 8px 30px rgba(244,184,200,0.15)"
                            ]
                          }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-10 right-10 px-5 py-3 rounded-2xl glass-rose"
                        >
                          <span className="text-sm text-[var(--rose-light)] font-medium">B.Com 2nd Year</span>
                        </motion.div>
                        
                        <motion.div
                          animate={{ 
                            y: [8, -8, 8], 
                            rotate: [2, -2, 2]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="absolute bottom-10 left-10 px-5 py-3 rounded-2xl glass-lilac"
                        >
                          <span className="text-sm text-[var(--lilac-light)] font-medium">Finance Enthusiast</span>
                        </motion.div>
                        
                        {/* Sparkle decorations */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full bg-white/50"
                            style={{
                              left: `${15 + i * 14}%`,
                              top: `${20 + (i % 3) * 25}%`,
                            }}
                            animate={{
                              opacity: [0.2, 0.9, 0.2],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2 + i * 0.4,
                              delay: i * 0.25,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </div>
                    </SpotlightCard>
                  </Parallax>
                </motion.div>
              </div>
              
              {/* Animated Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center text-[var(--foreground-faint)]"
                >
                  <span className="text-xs tracking-[0.3em] uppercase mb-4">Scroll to explore</span>
                  <motion.div
                    className="w-6 h-10 rounded-full border-2 border-[var(--foreground-faint)]/30 flex items-start justify-center p-1.5"
                  >
                    <motion.div
                      animate={{ y: [0, 14, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-[var(--rose)] to-[var(--lilac)]"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        
        {/* ===== WHAT I DO SECTION ===== */}
        <section className="relative py-32 overflow-hidden">
          {/* Lilac constellation background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(212,198,255,0.03)] to-transparent" />
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[var(--lilac)]"
                style={{ left: `${(i * 3.4) % 100}%`, top: `${(i * 3.2) % 100}%` }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 2 + (i % 3), delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </div>
          
          {/* Decorative gradient */}
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-15"
            style={{
              background: "radial-gradient(circle, var(--lilac), transparent 60%)",
              filter: "blur(100px)",
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal animation="fadeUp">
              <div className="text-center mb-20">
                <motion.span 
                  className="inline-block text-[var(--rose)] text-sm tracking-[0.3em] uppercase font-medium mb-4"
                >
                  ✦ What I Do
                </motion.span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  I specialize in building a{" "}
                  <span className="gradient-text-ethereal">strong foundation</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <StaggerReveal staggerDelay={0.12} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <StaggerItem key={idx}>
                  <FeatureCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    gradient={service.gradient}
                  />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>
        
        {/* ===== ABOUT PREVIEW SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)] overflow-hidden">
          {/* Floating rose petals background */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${(i * 8.5) % 100}%`, top: '-5%' }}
                animate={{
                  y: ['0%', '110vh'],
                  x: [0, (i % 2 === 0 ? 30 : -30)],
                  rotate: [0, 360],
                  opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{ duration: 20 + i * 2, delay: i * -2, repeat: Infinity, ease: 'linear' }}
              >
                <svg viewBox="0 0 20 30" fill="rgba(244, 184, 200, 0.4)" style={{ width: 12 + i % 4 * 3, height: 18 + i % 4 * 4 }}>
                  <ellipse cx="10" cy="15" rx="8" ry="12" />
                </svg>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-noise opacity-[0.015]" />
          
          {/* Decorative rose glow */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
            style={{ background: "radial-gradient(circle, var(--rose), transparent 60%)", filter: "blur(80px)" }}
            animate={{ scale: [1, 1.15, 1], x: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal animation="fadeRight">
                <motion.span 
                  className="inline-block text-[var(--lilac)] text-sm tracking-[0.3em] uppercase font-medium mb-4"
                >
                  ✦ About Me
                </motion.span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4 mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Get to know me{" "}
                  <span className="gradient-text">better</span>
                </h2>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                  I am a passionate 2nd year B.Com student with a keen interest in finance, 
                  accounting, and business analytics. Currently building a strong foundation 
                  while actively seeking opportunities to apply my knowledge.
                </p>
                <p className="text-[var(--foreground-subtle)] leading-relaxed mb-10">
                  My academic journey has equipped me with analytical skills, attention to detail, 
                  and a commitment to excellence. I am eager to learn and grow in the finance industry.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <Magnetic strength={0.2}>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-[var(--rose)] hover:gap-4 transition-all font-medium group"
                    >
                      <span>Learn More About Me</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </Magnetic>
                  <Link
                    href="/contact"
                    className="link-underline text-[var(--foreground-subtle)] font-medium"
                  >
                    Get In Touch
                  </Link>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, idx) => (
                    <Bento3DCard
                      key={idx}
                      className={idx === 2 ? "col-span-2" : ""}
                    >
                      <div className="p-7">
                        <motion.p 
                          className="text-5xl font-semibold gradient-text mb-2"
                          style={{ fontFamily: 'var(--font-space)' }}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.15, ...animations.bouncy }}
                          viewport={{ once: true }}
                        >
                          {stat.value}{stat.suffix}
                        </motion.p>
                        <p className="text-[var(--foreground-subtle)] text-sm">{stat.label}</p>
                      </div>
                    </Bento3DCard>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* ===== SKILLS PREVIEW ===== */}
        <section className="relative py-32 overflow-hidden">
          {/* Golden sparkles background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(240,215,140,0.02)] to-transparent" />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${(i * 5.2) % 100}%`, top: `${(i * 4.8) % 100}%` }}
                animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2 + i % 3, delay: i * 0.2, repeat: Infinity }}
              >
                <svg width={4 + i % 3 * 2} height={4 + i % 3 * 2} viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="rgba(240, 215, 140, 0.8)" />
                </svg>
              </motion.div>
            ))}
          </div>
          
          {/* Sage gradient orb */}
          <motion.div
            className="absolute right-10 top-20 w-[300px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--sage), transparent 70%)", filter: "blur(60px)" }}
            animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal animation="fadeUp">
              <div className="text-center mb-16">
                <motion.span 
                  className="inline-block text-[var(--sage)] text-sm tracking-[0.3em] uppercase font-medium mb-4"
                >
                  ✦ Skills & Technologies
                </motion.span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] mt-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The tools I&apos;m{" "}
                  <FlipWords 
                    words={["learning", "mastering", "exploring"]}
                    className="gradient-text-gold"
                    duration={2500}
                  />
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp" delay={0.15}>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {skillsHighlight.map((skill, idx) => (
                  <Magnetic key={idx} strength={0.25}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-6 py-4 rounded-full glass-iridescent hover:glass-rose transition-all cursor-pointer group hover-glow"
                      style={{
                        boxShadow: `0 0 0 1px ${skill.color}20`,
                      }}
                    >
                      <motion.span 
                        className="text-xl"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-[var(--foreground)] text-sm font-medium group-hover:text-[var(--rose-light)] transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="scale" delay={0.25}>
              <div className="text-center">
                <Magnetic strength={0.15}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={animations.snappy}
                  >
                    <Link
                      href="/skills"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-[var(--rose)] border border-[var(--rose)]/30 hover:bg-[var(--rose)]/5 hover:border-[var(--rose)]/50 transition-all font-medium group"
                    >
                      <span>View All Skills</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* ===== CTA SECTION ===== */}
        <section className="relative py-40 bg-[var(--background-secondary)] overflow-hidden">
          {/* Aurora waves background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-[200%] h-full -left-1/2"
              style={{
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(244, 184, 200, 0.05) 25%, 
                  rgba(212, 198, 255, 0.08) 50%, 
                  rgba(168, 219, 197, 0.05) 75%, 
                  transparent 100%)`,
              }}
              animate={{ x: ['-25%', '0%', '-25%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-[200%] h-full -left-1/4"
              style={{
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(240, 215, 140, 0.04) 30%, 
                  rgba(244, 184, 200, 0.06) 60%, 
                  transparent 100%)`,
              }}
              animate={{ x: ['0%', '-25%', '0%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, var(--rose), var(--lilac), transparent 60%)", filter: "blur(100px)" }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)", filter: "blur(60px)" }}
            animate={{ x: [-30, 30, -30], y: [20, -20, 20] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 bg-silk opacity-20" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal animation="scale">
              <motion.div className="space-y-8">
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-[var(--foreground)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Let&apos;s Work{" "}
                  <MorphingText 
                    texts={["Together", "Create", "Connect", "Grow"]}
                    className="gradient-text-luxury"
                    holdDuration={2500}
                  />
                </h2>
                
                <p className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Have an opportunity in mind or just want to connect? I&apos;m always open 
                  to discussing internships, projects, and learning experiences.
                </p>
                
                <motion.div 
                  className="flex flex-wrap justify-center gap-5 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Magnetic strength={0.2}>
                    <MagneticButton className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                      <Link href="/contact" className="flex items-center gap-2">
                        <span>Get In Touch</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </MagneticButton>
                  </Magnetic>
                  
                  <Magnetic strength={0.15}>
                    <motion.a
                      href="mailto:richakandhway11@gmail.com"
                      whileHover={{ scale: 1.02, borderColor: "var(--rose)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={animations.snappy}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[var(--foreground-muted)] border border-[var(--border-medium)] hover:text-[var(--foreground)] transition-colors"
                    >
                      richakandhway11@gmail.com
                    </motion.a>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
