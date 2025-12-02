'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useCallback, useMemo } from 'react'

// Aurora Borealis Background - Elegant flowing gradients
export function AuroraBorealis() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background-secondary)]" />
      
      {/* Aurora layers with CSS animations */}
      <div 
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-aurora-wave-1"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(244, 184, 200, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 70%, rgba(212, 198, 255, 0.08) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />
      
      <div 
        className="absolute w-[180%] h-[180%] -top-1/4 -right-1/4 animate-aurora-wave-2"
        style={{
          background: `
            radial-gradient(ellipse 70% 45% at 70% 40%, rgba(168, 219, 197, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 30% 80%, rgba(240, 215, 140, 0.06) 0%, transparent 50%)
          `,
          filter: 'blur(70px)',
          willChange: 'transform',
        }}
      />
      
      <div 
        className="absolute w-[150%] h-[150%] top-0 left-1/4 animate-aurora-wave-3"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 202, 176, 0.06) 0%, transparent 50%)
          `,
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />
    </div>
  )
}

// Gradient Mesh with SVG - Static optimized pattern
export function GradientMesh() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40">
      <defs>
        <radialGradient id="mesh-glow-1" cx="30%" cy="30%">
          <stop offset="0%" stopColor="rgba(244, 184, 200, 0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="mesh-glow-2" cx="70%" cy="60%">
          <stop offset="0%" stopColor="rgba(212, 198, 255, 0.25)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="mesh-glow-3" cx="50%" cy="80%">
          <stop offset="0%" stopColor="rgba(168, 219, 197, 0.2)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="mesh-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
        </filter>
      </defs>
      
      <ellipse cx="30%" cy="30%" rx="400" ry="300" fill="url(#mesh-glow-1)" filter="url(#mesh-blur)" />
      <ellipse cx="70%" cy="60%" rx="350" ry="250" fill="url(#mesh-glow-2)" filter="url(#mesh-blur)" />
      <ellipse cx="50%" cy="85%" rx="300" ry="200" fill="url(#mesh-glow-3)" filter="url(#mesh-blur)" />
    </svg>
  )
}

// Interactive cursor glow - Optimized with reduced calculations
export function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 40, stiffness: 80, mass: 0.5 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])
  
  return (
    <motion.div
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
        background: `radial-gradient(circle, 
          rgba(244, 184, 200, 0.04) 0%, 
          rgba(212, 198, 255, 0.02) 30%,
          transparent 60%)`,
        filter: 'blur(30px)',
        willChange: 'transform',
      }}
    />
  )
}

// Floating Orbs - Reduced count, CSS optimized
export function FloatingOrbs() {
  const orbs = useMemo(() => [
    { 
      size: 400, 
      x: '10%', 
      y: '15%', 
      colors: ['rgba(244, 184, 200, 0.08)', 'rgba(255, 202, 176, 0.04)'],
      animation: 'animate-orb-drift-1'
    },
    { 
      size: 350, 
      x: '75%', 
      y: '25%', 
      colors: ['rgba(212, 198, 255, 0.07)', 'rgba(244, 184, 200, 0.04)'],
      animation: 'animate-orb-drift-2'
    },
    { 
      size: 300, 
      x: '60%', 
      y: '65%', 
      colors: ['rgba(168, 219, 197, 0.06)', 'rgba(212, 198, 255, 0.03)'],
      animation: 'animate-orb-drift-3'
    },
    { 
      size: 280, 
      x: '20%', 
      y: '75%', 
      colors: ['rgba(240, 215, 140, 0.05)', 'rgba(244, 184, 200, 0.03)'],
      animation: 'animate-orb-drift-4'
    },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.animation}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at 30% 30%, ${orb.colors[0]}, ${orb.colors[1]}, transparent 70%)`,
            filter: 'blur(50px)',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}

// Floating Particles - Minimal, elegant
export function FloatingParticles() {
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i * 5.2) % 100,
      y: (i * 4.8) % 100,
      size: 2 + (i % 3),
      duration: 15 + (i % 8) * 2,
      delay: i * -0.8,
    }))
  , [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.6), rgba(244, 184, 200, 0.4))',
            boxShadow: '0 0 6px rgba(244, 184, 200, 0.5)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Elegant Ribbons - Flowing gradient lines
export function FlowingRibbons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-60">
      {/* Ribbon 1 */}
      <div
        className="absolute top-[20%] -left-[10%] w-[120%] h-[2px] animate-ribbon-1"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(244, 184, 200, 0.5), rgba(212, 198, 255, 0.5), transparent)',
          filter: 'blur(0.5px)',
          willChange: 'transform',
        }}
      />
      
      {/* Ribbon 2 */}
      <div
        className="absolute top-[50%] -right-[10%] w-[120%] h-[1.5px] animate-ribbon-2"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 198, 255, 0.4), rgba(168, 219, 197, 0.4), transparent)',
          filter: 'blur(0.5px)',
          willChange: 'transform',
        }}
      />
      
      {/* Ribbon 3 */}
      <div
        className="absolute top-[80%] -left-[10%] w-[120%] h-[1px] animate-ribbon-3"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(240, 215, 140, 0.4), rgba(244, 184, 200, 0.4), transparent)',
          filter: 'blur(0.5px)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}

// Sparkle Effect - Minimal twinkling stars
export function SparkleField() {
  const sparkles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i * 6.8) % 100,
      y: (i * 7.2) % 100,
      size: 3 + (i % 3) * 2,
      delay: i * 0.3,
      duration: 2 + (i % 3),
    }))
  , [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              fill="rgba(255, 255, 255, 0.9)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Complete Background System - Combines all effects
export function PremiumBackground() {
  return (
    <>
      <AuroraBorealis />
      <FloatingOrbs />
      <CursorGlow />
      <FlowingRibbons />
      <SparkleField />
    </>
  )
}

// Rose Petals Background - For About Page
export function RosePetalsBackground() {
  const petals = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i * 6.8) % 100,
      size: 10 + (i % 4) * 4,
      duration: 20 + (i % 6) * 4,
      delay: i * -2,
      rotation: (i * 45) % 360,
      drift: (i % 2 === 0 ? 1 : -1) * (8 + (i % 3) * 4),
    }))
  , [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft rose gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[rgba(244,184,200,0.03)] to-[var(--background)]" />
      
      {/* Floating petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.x}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [`${petal.x}%`, `${petal.x + petal.drift}%`],
            rotate: [petal.rotation, petal.rotation + 540],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 20 30"
            fill="rgba(244, 184, 200, 0.4)"
            style={{ width: petal.size, height: petal.size * 1.5 }}
          >
            <ellipse cx="10" cy="15" rx="8" ry="12" />
            <ellipse cx="10" cy="12" rx="4" ry="6" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>
      ))}
      
      {/* Soft glow orbs */}
      <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full opacity-30 animate-orb-drift-1"
        style={{ background: 'radial-gradient(circle, rgba(244,184,200,0.12), transparent 60%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-25 animate-orb-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(212,198,255,0.1), transparent 60%)', filter: 'blur(60px)' }} />
      
      <CursorGlow />
    </div>
  )
}

// Constellation Background - For Skills Page  
export function ConstellationBackground() {
  const stars = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: (i * 2.6) % 100,
      y: (i * 2.4) % 100,
      size: 1.5 + (i % 3),
      duration: 3 + (i % 4),
      delay: i * 0.15,
    }))
  , [])

  const connections = useMemo(() => [
    { x1: 15, y1: 20, x2: 25, y2: 35 },
    { x1: 25, y1: 35, x2: 40, y2: 25 },
    { x1: 60, y1: 15, x2: 75, y2: 30 },
    { x1: 75, y1: 30, x2: 85, y2: 20 },
    { x1: 20, y1: 70, x2: 35, y2: 80 },
    { x1: 35, y1: 80, x2: 50, y2: 75 },
    { x1: 70, y1: 60, x2: 85, y2: 70 },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[rgba(212,198,255,0.02)] to-[var(--background)]" />
      
      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {connections.map((line, i) => (
          <motion.line
            key={i}
            x1={`${line.x1}%`} y1={`${line.y1}%`}
            x2={`${line.x2}%`} y2={`${line.y2}%`}
            stroke="rgba(212, 198, 255, 0.5)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </svg>
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: 'radial-gradient(circle, rgba(212,198,255,0.9), rgba(255,255,255,0.6))',
            boxShadow: '0 0 4px rgba(212,198,255,0.6)',
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity }}
        />
      ))}
      
      {/* Nebula glow */}
      <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] rounded-full opacity-20 animate-orb-drift-1"
        style={{ background: 'radial-gradient(ellipse, rgba(212,198,255,0.15), rgba(168,219,197,0.08), transparent 60%)', filter: 'blur(80px)' }} />
      
      <CursorGlow />
    </div>
  )
}

// Golden Waves Background - For Education Page
export function GoldenWavesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[rgba(240,215,140,0.02)] to-[var(--background)]" />
      
      {/* Wave layers */}
      <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-30">
        <defs>
          <linearGradient id="goldWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(240,215,140,0.2)" />
            <stop offset="50%" stopColor="rgba(244,184,200,0.15)" />
            <stop offset="100%" stopColor="rgba(240,215,140,0.2)" />
          </linearGradient>
          <linearGradient id="goldWave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168,219,197,0.15)" />
            <stop offset="50%" stopColor="rgba(240,215,140,0.1)" />
            <stop offset="100%" stopColor="rgba(168,219,197,0.15)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 Q200,100 400,200 T800,200 T1200,200 T1600,200 L1600,600 L0,600 Z"
          fill="url(#goldWave1)"
          animate={{ d: [
            "M0,200 Q200,100 400,200 T800,200 T1200,200 T1600,200 L1600,600 L0,600 Z",
            "M0,200 Q200,250 400,200 T800,150 T1200,200 T1600,200 L1600,600 L0,600 Z",
            "M0,200 Q200,100 400,200 T800,200 T1200,200 T1600,200 L1600,600 L0,600 Z"
          ]}}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,280 Q200,200 400,280 T800,280 T1200,280 T1600,280 L1600,600 L0,600 Z"
          fill="url(#goldWave2)"
          animate={{ d: [
            "M0,280 Q200,200 400,280 T800,280 T1200,280 T1600,280 L1600,600 L0,600 Z",
            "M0,280 Q200,320 400,280 T800,240 T1200,280 T1600,280 L1600,600 L0,600 Z",
            "M0,280 Q200,200 400,280 T800,280 T1200,280 T1600,280 L1600,600 L0,600 Z"
          ]}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>
      
      {/* Floating academic symbols */}
      <motion.div className="absolute top-[15%] left-[10%] text-4xl opacity-10"
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity }}>📚</motion.div>
      <motion.div className="absolute top-[25%] right-[15%] text-3xl opacity-10"
        animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}>🎓</motion.div>
      <motion.div className="absolute bottom-[30%] left-[20%] text-3xl opacity-10"
        animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
        transition={{ duration: 9, repeat: Infinity, delay: 2 }}>✨</motion.div>
      
      {/* Warm glow orbs */}
      <div className="absolute top-[20%] right-[25%] w-[400px] h-[400px] rounded-full opacity-25 animate-orb-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(240,215,140,0.12), transparent 60%)', filter: 'blur(60px)' }} />
      
      <CursorGlow />
    </div>
  )
}

// Ethereal Mist Background - For Contact Page
export function EtherealMistBackground() {
  const mists = useMemo(() => [
    { x: '10%', y: '20%', size: 500, color: 'rgba(168,219,197,0.08)', duration: 20 },
    { x: '70%', y: '30%', size: 450, color: 'rgba(244,184,200,0.06)', duration: 18 },
    { x: '40%', y: '60%', size: 400, color: 'rgba(212,198,255,0.07)', duration: 22 },
    { x: '80%', y: '70%', size: 350, color: 'rgba(240,215,140,0.05)', duration: 16 },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Serene gradient base */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[rgba(168,219,197,0.015)] to-[var(--background)]" />
      
      {/* Floating mist layers */}
      {mists.map((mist, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: mist.size,
            height: mist.size,
            left: mist.x,
            top: mist.y,
            background: `radial-gradient(circle, ${mist.color}, transparent 70%)`,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [-30, 30, -30],
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: mist.duration, repeat: Infinity, ease: 'easeInOut', delay: i * 2 }}
        />
      ))}
      
      {/* Gentle sparkles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 4) * 18}%`,
            background: 'rgba(255,255,255,0.7)',
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.5, delay: i * 0.4, repeat: Infinity }}
        />
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line x1="20%" y1="30%" x2="40%" y2="50%" stroke="rgba(168,219,197,0.5)" strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.line x1="60%" y1="40%" x2="80%" y2="60%" stroke="rgba(244,184,200,0.5)" strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
      </svg>
      
      <CursorGlow />
    </div>
  )
}
