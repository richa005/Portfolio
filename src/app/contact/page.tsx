"use client";

import { useState } from "react";
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

// Contact info
const contactInfo = [
  {
    title: "Email",
    value: "richakandhway@gmail.com",
    icon: "📧",
    color: "#f4a5b8",
    link: "mailto:richakandhway@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    icon: "💼",
    color: "#c8b6ff",
    link: "https://www.linkedin.com/in/richa-kandhway-782655330",
  },
  {
    title: "Location",
    value: "India",
    icon: "📍",
    color: "#e8c872",
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

      <main className="min-h-screen bg-[#0a0a0c] pt-24">
        {/* ===== HERO SECTION ===== */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(168,213,186,0.08) 0%, transparent 60%)",
              top: "-10%",
              left: "-10%",
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
                  Get In Touch
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl text-white mt-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <AnimatedText text="Let's Connect" />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-[#8b8693] text-lg max-w-2xl mx-auto mt-6"
              >
                Have an opportunity or just want to say hello? I&apos;d love to hear from you.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT CARDS SECTION ===== */}
        <section className="relative py-12 bg-[#0d0d10]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <TiltCard glareEnabled={false}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={animations.smooth}
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          className="block p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors text-center h-full"
                        >
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                            style={{ backgroundColor: `${info.color}15` }}
                          >
                            {info.icon}
                          </div>
                          <h3
                            className="text-lg text-white font-medium mb-1"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {info.title}
                          </h3>
                          <p className="text-[#8b8693] text-sm">{info.value}</p>
                        </a>
                      ) : (
                        <div className="p-6 rounded-2xl bg-[#151419] border border-white/[0.05] hover:border-white/[0.1] transition-colors text-center h-full">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                            style={{ backgroundColor: `${info.color}15` }}
                          >
                            {info.icon}
                          </div>
                          <h3
                            className="text-lg text-white font-medium mb-1"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                          >
                            {info.title}
                          </h3>
                          <p className="text-[#8b8693] text-sm">{info.value}</p>
                        </div>
                      )}
                    </motion.div>
                  </TiltCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT FORM SECTION ===== */}
        <section className="relative py-32 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Form */}
              <FadeInSection>
                <div>
                  <h2
                    className="text-3xl md:text-4xl text-white mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Send me a <GradientText text="message" />
                  </h2>
                  <p className="text-[#8b8693] mb-8">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#a8a3b3] text-sm mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#151419] border border-white/[0.05] text-white placeholder-[#6d6875] focus:outline-none focus:border-[#f4a5b8]/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[#a8a3b3] text-sm mb-2">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#151419] border border-white/[0.05] text-white placeholder-[#6d6875] focus:outline-none focus:border-[#f4a5b8]/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[#a8a3b3] text-sm mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#151419] border border-white/[0.05] text-white placeholder-[#6d6875] focus:outline-none focus:border-[#f4a5b8]/50 transition-colors"
                        placeholder="Internship Opportunity"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[#a8a3b3] text-sm mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-[#151419] border border-white/[0.05] text-white placeholder-[#6d6875] focus:outline-none focus:border-[#f4a5b8]/50 transition-colors resize-none"
                        placeholder="Tell me about the opportunity..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={animations.snappy}
                      className={`w-full py-4 rounded-xl font-medium transition-all ${
                        submitted
                          ? "bg-[#a8d5ba] text-[#0a0a0c]"
                          : "bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] text-[#0a0a0c] hover:shadow-lg hover:shadow-[#f4a5b8]/25"
                      } disabled:opacity-70`}
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
                  </form>
                </div>
              </FadeInSection>

              {/* Right - FAQ */}
              <FadeInSection delay={0.2}>
                <div>
                  <h2
                    className="text-3xl md:text-4xl text-white mb-6"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Frequently asked
                  </h2>
                  <p className="text-[#8b8693] mb-8">
                    Common questions about working with me.
                  </p>

                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        initial={false}
                        className="rounded-2xl bg-[#151419] border border-white/[0.05] overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="text-white font-medium">{faq.question}</span>
                          <motion.svg
                            animate={{ rotate: openFaq === idx ? 180 : 0 }}
                            transition={animations.snappy}
                            className="w-5 h-5 text-[#f4a5b8] flex-shrink-0 ml-4"
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
                          <p className="px-6 pb-4 text-[#8b8693] text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ===== AVAILABILITY SECTION ===== */}
        <section className="relative py-32 bg-[#0d0d10]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151419] border border-white/[0.08] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5ba] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a8d5ba]"></span>
                </span>
                <span className="text-[#a8a3b3] text-sm">Currently available for opportunities</span>
              </div>

              <h2
                className="text-4xl md:text-5xl text-white mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to start your journey?
              </h2>
              <p className="text-[#8b8693] text-lg max-w-2xl mx-auto mb-10">
                Whether it&apos;s an internship, a project, or just a conversation about finance
                and career opportunities, I&apos;m excited to connect.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:richakandhway@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={animations.snappy}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-[#0a0a0c] bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] hover:shadow-lg hover:shadow-[#f4a5b8]/25 transition-shadow"
                >
                  📧 richakandhway@gmail.com
                </motion.a>
              </div>

              {/* Quick Links */}
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <Link href="/about" className="text-[#8b8693] hover:text-[#f4a5b8] transition-colors">
                  About Me
                </Link>
                <span className="text-[#6d6875]">•</span>
                <Link href="/skills" className="text-[#8b8693] hover:text-[#f4a5b8] transition-colors">
                  My Skills
                </Link>
                <span className="text-[#6d6875]">•</span>
                <Link href="/education" className="text-[#8b8693] hover:text-[#f4a5b8] transition-colors">
                  Education
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
