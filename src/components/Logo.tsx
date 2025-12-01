"use client";

import { motion } from "framer-motion";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <defs>
        {/* Elegant Rose to Lilac Gradient */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f4a5b8" }} />
          <stop offset="100%" style={{ stopColor: "#c8b6ff" }} />
        </linearGradient>
        
        {/* Subtle Glow */}
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Elegant Square Frame */}
      <motion.rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="8"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      
      {/* Stylized R - Clean Modern Design */}
      <motion.g filter="url(#softGlow)">
        {/* R vertical stroke */}
        <motion.path
          d="M16 14 L16 34"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* R bowl curve */}
        <motion.path
          d="M16 14 C16 14 18 13 22 13 C28 13 30 16 30 20 C30 24 27 26 22 26 L16 26"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* R leg - elegant diagonal */}
        <motion.path
          d="M22 26 L32 34"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        />
      </motion.g>
      
      {/* Accent dot */}
      <motion.circle
        cx="36"
        cy="14"
        r="2"
        fill="url(#logoGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
      />
    </motion.svg>
  );
};
