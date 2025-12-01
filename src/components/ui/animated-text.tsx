"use client";

import { motion } from "framer-motion";
import { characterStagger, characterVariants } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", once = true, delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ");
  
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={characterVariants}
              className="inline-block"
              style={{ transformOrigin: "center bottom" }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
};

// Gradient text with animation
export const GradientText = ({ 
  text, 
  className = "",
  gradient = "from-[#f4a5b8] via-[#c8b6ff] to-[#a8d5ba]"
}: { 
  text: string; 
  className?: string;
  gradient?: string;
}) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={characterStagger}
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className="inline-block"
          style={{ transformOrigin: "center bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Text scramble effect
export const ScrambleText = ({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string;
}) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
            delay: index * 0.03,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Typewriter effect
export const TypewriterText = ({
  text,
  className = "",
  speed = 0.05,
  delay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) => {
  return (
    <motion.span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
