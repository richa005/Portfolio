"use client";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useState } from "react";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "richakandhway11@gmail.com",
      href: "mailto:richakandhway11@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "India",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Availability",
      value: "Open to Opportunities",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#0a0a0c]">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="text-center"
        >
          <span className="text-[#8b8693] text-xs tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl text-[#faf8f5] mt-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Let&apos;s Connect</h2>
        </motion.div>
      </LampContainer>

      <div className="relative -mt-40 pb-32 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              <h3 className="text-2xl text-[#faf8f5] mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>Let&apos;s Work Together</h3>
              <p className="text-[#8b8693] mb-8 leading-relaxed font-light text-sm">
                I&apos;m always open to discussing new opportunities, creative ideas, or ways to 
                contribute to your organization&apos;s success.
              </p>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springConfig, delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-[#151419] text-[#f4a5b8] group-hover:scale-105 transition-transform duration-300 border border-white/[0.06]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#8b8693] text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#faf8f5] font-light hover:text-[#f4a5b8] transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#faf8f5] font-light">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ),
                    href: "#",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    ),
                    href: "#",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    href: "mailto:richakandhway11@gmail.com",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springConfig}
                    className="p-3 bg-[#151419] rounded-xl text-[#a09aab] hover:text-[#f4a5b8] transition-colors duration-300 border border-white/[0.06]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
            >
              <BackgroundGradient className="rounded-[1.5rem] p-[1px]">
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#151419] rounded-[1.5rem] p-8"
                >
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#8b8693] text-xs uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.06] rounded-xl text-[#faf8f5] placeholder-[#6d6875] focus:border-[#f4a5b8]/50 focus:ring-1 focus:ring-[#f4a5b8]/50 outline-none transition-all duration-300 text-sm"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8b8693] text-xs uppercase tracking-wider mb-2">Your Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.06] rounded-xl text-[#faf8f5] placeholder-[#6d6875] focus:border-[#f4a5b8]/50 focus:ring-1 focus:ring-[#f4a5b8]/50 outline-none transition-all duration-300 text-sm"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-[#8b8693] text-xs uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.06] rounded-xl text-[#faf8f5] placeholder-[#6d6875] focus:border-[#f4a5b8]/50 focus:ring-1 focus:ring-[#f4a5b8]/50 outline-none transition-all duration-300 text-sm"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-[#8b8693] text-xs uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.06] rounded-xl text-[#faf8f5] placeholder-[#6d6875] focus:border-[#f4a5b8]/50 focus:ring-1 focus:ring-[#f4a5b8]/50 outline-none transition-all duration-300 resize-none text-sm"
                      placeholder="Share your thoughts..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={springConfig}
                    className="w-full py-3.5 bg-gradient-to-r from-[#f4a5b8] to-[#c8b6ff] text-[#0a0a0c] font-medium rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
