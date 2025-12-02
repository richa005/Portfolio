'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Aurora Layer */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[150%] h-[100%] opacity-35"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, 
              rgba(244, 184, 200, 0.35) 0%,
              rgba(212, 198, 255, 0.22) 30%,
              transparent 70%)
          `,
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 80],
          y: [0, -40],
          scale: [1, 1.08],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Aurora Layer */}
      <motion.div
        className="absolute top-1/4 -right-1/4 w-[100%] h-[80%] opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 80% 40%, 
              rgba(212, 198, 255, 0.32) 0%,
              rgba(168, 219, 197, 0.18) 40%,
              transparent 70%)
          `,
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -60],
          y: [0, 45],
          scale: [1, 0.94],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Tertiary Aurora - Bottom */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[80%] h-[50%] opacity-25"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 100%, 
              rgba(255, 196, 168, 0.28) 0%,
              rgba(240, 215, 140, 0.18) 30%,
              transparent 60%)
          `,
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, 40],
          scale: [1, 1.06],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Floating Glow Dots */}
      <FloatingGlowDots />
    </div>
  )
}

function FloatingGlowDots() {
  const dots = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: 12 + (i * 9) % 80,
      y: 18 + (i * 11) % 65,
      duration: 4.5 + (i % 5) * 0.6,
      delay: (i % 6) * 0.4,
    }))
  , [])

  return (
    <>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: 'rgba(244, 184, 200, 0.65)',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            boxShadow: '0 0 22px rgba(244, 184, 200, 0.45)',
          }}
          animate={{
            y: [0, -25],
            opacity: [0.45, 0.85],
            scale: [1, 1.4],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large Rose Orb */}
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(244, 184, 200, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          left: '-10%',
          top: '8%',
        }}
        animate={{
          x: [0, 80],
          y: [0, -40],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Large Lilac Orb */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212, 198, 255, 0.16) 0%, transparent 70%)',
          filter: 'blur(50px)',
          right: '-5%',
          top: '28%',
        }}
        animate={{
          x: [0, -65],
          y: [0, 50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Sage Bottom Orb */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 219, 197, 0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
          left: '28%',
          bottom: '-8%',
        }}
        animate={{
          x: [0, 45],
          scale: [1, 1.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
