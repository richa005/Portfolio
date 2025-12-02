"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GradientText } from "@/components/ui/animated-text";
import { ScrollProgress } from "@/components/ui/scroll-effects";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { animations, staggerContainer, fadeUp } from "@/lib/animations";
import { useLenis } from "@/hooks/useLenis";
import { FloatingOrbs } from "@/components/ui/floating-petals";
import { SpotlightCard } from "@/components/ui/spotlight";
import { MagneticButton, Magnetic } from "@/components/ui/magnetic";
import { WordPullUp } from "@/components/ui/text-animations";
import { ScrollReveal, StaggerReveal, StaggerItem, Parallax } from "@/components/ui/scroll-animations";
import { Bento3DCard } from "@/components/ui/bento-cards";

// Contact info
const contactInfo = [
  {
    title: "Email",
    value: "richakandhway11@gmail.com",
    icon: "📧",
    color: "#f2b5c4",
    link: "mailto:richakandhway11@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    icon: "💼",
    color: "#d4c6ff",
    link: "https://www.linkedin.com/in/richa-kandhway-782655330",
  },
  {
    title: "Location",
    value: "India",
    icon: "📍",
    color: "#f0d78c",
    link: null,
  },
];

// FAQ
const faqs = [
  {
    question: "Are you available for internships?",
    answer: "Yes! I am actively seeking internship opportunities in finance, accounting, or related fields where I can apply my academic knowledge and gain practical experience.",
  },
  {
    question: "What kind of opportunities are you looking for?",
    answer: "I'm interested in entry-level positions, internships, or project-based work in accounting, finance, data analysis, or business operations.",
  },
  {
    question: "Can you work remotely?",
    answer: "Yes, I'm comfortable with both remote and on-site work arrangements depending on the opportunity.",
  },
  {
    question: "What are your strongest skills?",
    answer: "My strongest skills include Excel, financial accounting basics, attention to detail, and excellent communication. I'm also a quick learner eager to develop new competencies.",
  },
];

export default function ContactPage() {
  useLenis();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      
      {/* Serene Orbs Background - Contact */}
      <FloatingOrbs count={7} />

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
                <span className="inline-block px-4 py-2 rounded-full glass-sage text-[var(--sage)] text-sm tracking-[0.25em] uppercase font-medium">
                  ✦ Get In Touch
                </span>
              </motion.div>
              
              <Parallax speed={0.3} className="mt-6">
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl md:text-7xl lg:text-8xl text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  <WordPullUp words="Let's Connect" />
                </motion.h1>
              </Parallax>
              
              <motion.p
                variants={fadeUp}
                className="text-[var(--foreground-subtle)] text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
              >
                Have an opportunity or just want to say hello? I&apos;d love to hear from you.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT CARDS SECTION ===== */}
        <section className="relative py-12 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, idx) => (
                  <StaggerItem key={idx}>
                    <SpotlightCard className="h-full">
                      {info.link ? (
                        <Magnetic strength={0.15}>
                          <a
                            href={info.link}
                            className="block p-6 rounded-2xl text-center h-full relative overflow-hidden group"
                          >
                            <motion.div
                              className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl glass"
                              style={{ backgroundColor: `${info.color}20` }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {info.icon}
                            </motion.div>
                            <h3
                              className="relative z-10 text-lg text-[var(--foreground)] font-medium mb-1"
                              style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                              {info.title}
                            </h3>
                            <p className="relative z-10 text-[var(--foreground-subtle)] text-sm">{info.value}</p>
                          </a>
                        </Magnetic>
                      ) : (
                        <div className="p-6 rounded-2xl text-center h-full relative overflow-hidden group">
                          <motion.div
                            className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl glass"
                            style={{ backgroundColor: `${info.color}20` }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {info.icon}
                          </motion.div>
                          <h3
                            className="relative z-10 text-lg text-[var(--foreground)] font-medium mb-1"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {info.title}
                          </h3>
                          <p className="relative z-10 text-[var(--foreground-subtle)] text-sm">{info.value}</p>
                        </div>
                      )}
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* ===== CONTACT FORM SECTION ===== */}
        <section className="relative py-32 bg-[var(--background)]">
          <div className="absolute inset-0 bg-grid-elegant opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Form */}
              <ScrollReveal>
                <Bento3DCard>
                  <div className="p-8 rounded-3xl">
                    <h2
                      className="text-3xl md:text-4xl mb-6"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      <span className="gradient-text">Send me a</span> <GradientText text="Message" />
                    </h2>
                    <p className="text-[var(--foreground-subtle)] mb-8">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[var(--foreground-subtle)] text-sm mb-2">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--rose)]/50 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-[var(--foreground-subtle)] text-sm mb-2">Your Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--rose)]/50 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-[var(--foreground-subtle)] text-sm mb-2">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--rose)]/50 transition-colors"
                          placeholder="Internship Opportunity"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[var(--foreground-subtle)] text-sm mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/[0.08] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--rose)]/50 transition-colors resize-none"
                          placeholder="Tell me about the opportunity..."
                        />
                      </div>

                      {/* Submit Button */}
                      <MagneticButton>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting || submitted}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-4 rounded-xl font-medium transition-all relative overflow-hidden ${
                            submitted
                              ? "bg-[var(--sage)] text-[var(--background)]"
                              : "btn-primary"
                          } ${(isSubmitting || submitted) ? 'opacity-70' : ''}`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Sending...
                            </span>
                          ) : submitted ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Message Sent!
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Send Message
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        )}
                        </motion.button>
                      </MagneticButton>
                    </form>
                  </div>
                </Bento3DCard>
              </ScrollReveal>

              {/* Right - FAQ */}
              <ScrollReveal delay={0.2}>
                <div>
                  <h2
                    className="text-3xl md:text-4xl gradient-text mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Frequently asked
                  </h2>
                  <p className="text-[var(--foreground-subtle)] mb-8">
                    Common questions about working with me.
                  </p>

                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <Bento3DCard key={idx}>
                        <div className="rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left"
                          >
                            <span className="text-[var(--foreground)] font-medium">{faq.question}</span>
                            <motion.svg
                              animate={{ rotate: openFaq === idx ? 180 : 0 }}
                              transition={animations.snappy}
                              className="w-5 h-5 text-[var(--rose)] flex-shrink-0 ml-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </button>
                          <motion.div
                            initial={false}
                            animate={{
                              height: openFaq === idx ? "auto" : 0,
                              opacity: openFaq === idx ? 1 : 0,
                            }}
                            transition={animations.smooth}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-4 text-[var(--foreground-subtle)] text-sm leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </div>
                      </Bento3DCard>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== AVAILABILITY SECTION ===== */}
        <section className="relative py-32 bg-[var(--background-secondary)]">
          <div className="absolute inset-0 bg-noise opacity-30" />
          
          {/* Decorative gradient orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(168,219,197,0.15), transparent 60%)', filter: 'blur(80px)' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sage border border-[var(--sage)]/20 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--sage)]"></span>
                </span>
                <span className="text-[var(--foreground-subtle)] text-sm">Currently available for opportunities</span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl gradient-text-animated mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to start your journey?
              </h2>
              <p className="text-[var(--foreground-subtle)] text-lg max-w-2xl mx-auto mb-10">
                Whether it&apos;s an internship, a project, or just a conversation about finance
                and career opportunities, I&apos;m excited to connect.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <a
                    href="mailto:richakandhway11@gmail.com"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    📧 richakandhway11@gmail.com
                  </a>
                </MagneticButton>
              </div>

              {/* Quick Links */}
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <Magnetic strength={0.2}>
                  <Link href="/about" className="text-[var(--foreground-subtle)] hover:text-[var(--rose)] transition-colors">
                    About Me
                  </Link>
                </Magnetic>
                <span className="text-[var(--foreground-muted)]">•</span>
                <Magnetic strength={0.2}>
                  <Link href="/skills" className="text-[var(--foreground-subtle)] hover:text-[var(--rose)] transition-colors">
                    My Skills
                  </Link>
                </Magnetic>
                <span className="text-[var(--foreground-muted)]">•</span>
                <Magnetic strength={0.2}>
                  <Link href="/education" className="text-[var(--foreground-subtle)] hover:text-[var(--rose)] transition-colors">
                    Education
                  </Link>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
