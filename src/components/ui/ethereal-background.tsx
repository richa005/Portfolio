'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo, useCallback } from 'react'

// ============ MAIN ETHEREAL BACKGROUND ============
// Optimized for performance with CSS animations + beautiful gradients

export function EtherealBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform">
      {/* Deep Rich Base Gradient - Static for performance */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -30%, rgba(244, 184, 200, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 110% 50%, rgba(212, 198, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at -10% 70%, rgba(168, 219, 197, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 50% 130%, rgba(255, 196, 168, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 30% 40%, rgba(240, 215, 140, 0.12) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Elegant Flowing Aurora - CSS Animated */}
      <FlowingAurora />
      
      {/* Gradient Orbs - Reduced count, CSS animated */}
      <GradientOrbs />
      
      {/* Gradient Mesh Pattern - Static */}
      <GradientMesh />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
    </div>
  )
}

// ============ FLOWING AURORA - CSS Optimized ============
function FlowingAurora() {
  return (
    <div className="absolute inset-0">
      {/* Primary Rose Aurora - CSS Animation */}
      <div
        className="absolute w-[140%] h-[100%] -top-[25%] -left-[20%] animate-aurora-float-1"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 30% 30%,
              rgba(244, 184, 200, 0.3) 0%,
              rgba(244, 184, 200, 0.15) 30%,
              transparent 60%)
          `,
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      
      {/* Secondary Lilac Aurora - CSS Animation */}
      <div
        className="absolute w-[120%] h-[80%] top-[5%] -right-[30%] animate-aurora-float-2"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 70% 50%,
              rgba(212, 198, 255, 0.28) 0%,
              rgba(212, 198, 255, 0.14) 35%,
              transparent 60%)
          `,
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
      />
      
      {/* Tertiary Sage Aurora - CSS Animation */}
      <div
        className="absolute w-[100%] h-[70%] bottom-[-10%] left-[5%] animate-aurora-float-3"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 40% 80%,
              rgba(168, 219, 197, 0.22) 0%,
              rgba(168, 219, 197, 0.1) 40%,
              transparent 65%)
          `,
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}

// ============ GRADIENT ORBS - CSS Animated ============
function GradientOrbs() {
  return (
    <div className="absolute inset-0">
      {/* Large Rose-Gold Gradient Orb */}
      <div
        className="absolute w-[500px] h-[500px] top-[10%] left-[5%] rounded-full animate-orb-pulse-1"
        style={{
          background: `
            radial-gradient(circle at 30% 30%,
              rgba(244, 184, 200, 0.2) 0%,
              rgba(240, 215, 140, 0.12) 40%,
              transparent 70%)
          `,
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Lilac-Peach Gradient Orb */}
      <div
        className="absolute w-[450px] h-[450px] top-[20%] right-[5%] rounded-full animate-orb-pulse-2"
        style={{
          background: `
            radial-gradient(circle at 70% 30%,
              rgba(212, 198, 255, 0.22) 0%,
              rgba(255, 202, 176, 0.12) 45%,
              transparent 70%)
          `,
          filter: 'blur(70px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Sage-Lilac Gradient Orb */}
      <div
        className="absolute w-[400px] h-[400px] bottom-[15%] left-[30%] rounded-full animate-orb-pulse-3"
        style={{
          background: `
            radial-gradient(circle at 50% 60%,
              rgba(168, 219, 197, 0.18) 0%,
              rgba(212, 198, 255, 0.1) 50%,
              transparent 70%)
          `,
          filter: 'blur(65px)',
          willChange: 'transform, opacity',
        }}
      />
      
      {/* Center Rose-Lilac Blend */}
      <div
        className="absolute w-[350px] h-[350px] top-[40%] left-[40%] rounded-full animate-orb-pulse-4"
        style={{
          background: `
            radial-gradient(circle,
              rgba(244, 184, 200, 0.15) 0%,
              rgba(212, 198, 255, 0.1) 40%,
              rgba(240, 215, 140, 0.06) 60%,
              transparent 75%)
          `,
          filter: 'blur(55px)',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}

// ============ GRADIENT MESH - Static ============
function GradientMesh() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
      <defs>
        <pattern id="elegant-mesh" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="0.8" fill="rgba(244, 184, 200, 0.9)" />
          <circle cx="25" cy="25" r="0.5" fill="rgba(212, 198, 255, 0.8)" />
          <circle cx="75" cy="75" r="0.5" fill="rgba(168, 219, 197, 0.8)" />
        </pattern>
        <linearGradient id="mesh-gradient-elegant" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(244, 184, 200, 0.5)" />
          <stop offset="33%" stopColor="rgba(212, 198, 255, 0.5)" />
          <stop offset="66%" stopColor="rgba(168, 219, 197, 0.5)" />
          <stop offset="100%" stopColor="rgba(240, 215, 140, 0.4)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#elegant-mesh)" />
      <rect width="100%" height="100%" fill="url(#mesh-gradient-elegant)" opacity="0.35" />
    </svg>
  )
}

// ============ INTERACTIVE GLOW - Optimized ============
export function InteractiveGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Reduced stiffness for smoother, less CPU-intensive animation
  const springConfig = { damping: 50, stiffness: 100, mass: 0.8 }
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
      className="fixed w-[550px] h-[550px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
        background: `radial-gradient(circle, 
          rgba(244, 184, 200, 0.12) 0%, 
          rgba(212, 198, 255, 0.07) 35%,
          rgba(240, 215, 140, 0.04) 55%,
          transparent 70%)`,
        filter: 'blur(40px)',
        willChange: 'transform',
      }}
    />
  )
}

// ============ PETAL RAIN - Reduced count, CSS optimized ============
export function PetalRain() {
  const petals = useMemo(() => {
    const colors = [
      '#f4b8c8',
      '#d8c8ff',
      '#ffe5ea',
      '#ebe0ff',
      '#ffd4e0',
    ]

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: (i * 12.5) % 100,
      size: 16 + (i % 4) * 3,
      duration: 32 + (i % 5) * 4,
      delay: i * -4,
      rotation: (i * 45) % 360,
      color: colors[i % colors.length],
      drift: (i % 2 === 0 ? 1 : -1) * (4 + (i % 3) * 2),
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute will-change-transform"
          style={{
            left: `${petal.x}%`,
            top: '-8%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [`${petal.x}%`, `${petal.x + petal.drift}%`],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.4}
            viewBox="0 0 24 34"
            fill="none"
          >
            <path
              d="M12 0C12 0 24 12 24 22C24 28.627 18.627 34 12 34C5.373 34 0 28.627 0 22C0 12 12 0 12 0Z"
              fill={petal.color}
              fillOpacity="0.5"
            />
            <path
              d="M12 4C12 4 20 12 20 20C20 25.523 16.418 30 12 30"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// ============ FLOATING DIAMONDS - Reduced, CSS optimized ============
export function FloatingDiamonds() {
  const diamonds = useMemo(() => [
    { x: '12%', y: '20%', size: 28, animClass: 'animate-float-1' },
    { x: '85%', y: '18%', size: 24, animClass: 'animate-float-2' },
    { x: '70%', y: '58%', size: 30, animClass: 'animate-float-3' },
    { x: '20%', y: '70%', size: 26, animClass: 'animate-float-1' },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {diamonds.map((diamond, i) => (
        <div
          key={i}
          className={`absolute ${diamond.animClass}`}
          style={{
            left: diamond.x,
            top: diamond.y,
            willChange: 'transform, opacity',
          }}
        >
          <svg
            width={diamond.size}
            height={diamond.size}
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 0L40 20L20 40L0 20L20 0Z"
              fill="url(#diamond-gradient-opt)"
              fillOpacity="0.5"
            />
            <path
              d="M20 0L40 20L20 40L0 20L20 0Z"
              stroke="url(#diamond-stroke-opt)"
              strokeOpacity="0.7"
              strokeWidth="0.5"
              fill="none"
            />
            <defs>
              <linearGradient id="diamond-gradient-opt" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#f4b8c8" />
                <stop offset="50%" stopColor="#d8c8ff" />
                <stop offset="100%" stopColor="#f0d898" />
              </linearGradient>
              <linearGradient id="diamond-stroke-opt" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#f4b8c8" />
                <stop offset="100%" stopColor="#d8c8ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  )
}

// ============ LIGHT RAYS - CSS Animated ============
export function LightRays() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {/* Top right rays */}
      <div
        className="absolute -top-[15%] -right-[5%] w-[65%] h-[85%] animate-ray-pulse"
        style={{
          background: `
            conic-gradient(from 200deg at 100% 0%,
              transparent 0deg,
              rgba(244, 184, 200, 0.14) 20deg,
              transparent 40deg,
              rgba(212, 198, 255, 0.12) 60deg,
              transparent 80deg,
              rgba(240, 215, 140, 0.1) 100deg,
              transparent 120deg)
          `,
          filter: 'blur(25px)',
          willChange: 'opacity',
        }}
      />
      
      {/* Bottom left rays */}
      <div
        className="absolute -bottom-[8%] -left-[8%] w-[55%] h-[65%] animate-ray-pulse-alt"
        style={{
          background: `
            conic-gradient(from 45deg at 0% 100%,
              transparent 0deg,
              rgba(168, 219, 197, 0.12) 30deg,
              transparent 60deg,
              rgba(212, 198, 255, 0.1) 90deg,
              transparent 120deg)
          `,
          filter: 'blur(35px)',
          willChange: 'opacity',
        }}
      />
    </div>
  )
}

// ============ SPARKLE STARS - Reduced, CSS animated ============
export function SparkleStars() {
  const stars = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: (i * 8.5) % 100,
      y: (i * 9.2) % 100,
      size: 4 + (i % 3) * 2,
      animClass: i % 3 === 0 ? 'animate-sparkle-1' : i % 3 === 1 ? 'animate-sparkle-2' : 'animate-sparkle-3',
    }))
  , [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${star.animClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            willChange: 'transform, opacity',
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              fill="rgba(255, 255, 255, 0.7)"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

// ============ GRADIENT RIBBON - New elegant element ============
export function GradientRibbon() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Flowing gradient ribbon */}
      <div
        className="absolute top-[15%] -left-[20%] w-[140%] h-[3px] animate-ribbon-flow"
        style={{
          background: `linear-gradient(90deg,
            transparent 0%,
            rgba(244, 184, 200, 0.6) 20%,
            rgba(212, 198, 255, 0.7) 40%,
            rgba(240, 215, 140, 0.6) 60%,
            rgba(168, 219, 197, 0.7) 80%,
            transparent 100%)`,
          filter: 'blur(1px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute top-[45%] -right-[20%] w-[140%] h-[2px] animate-ribbon-flow-reverse"
        style={{
          background: `linear-gradient(90deg,
            transparent 0%,
            rgba(212, 198, 255, 0.5) 25%,
            rgba(244, 184, 200, 0.6) 50%,
            rgba(212, 198, 255, 0.5) 75%,
            transparent 100%)`,
          filter: 'blur(1px)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute top-[75%] -left-[20%] w-[140%] h-[2px] animate-ribbon-flow-slow"
        style={{
          background: `linear-gradient(90deg,
            transparent 0%,
            rgba(168, 219, 197, 0.5) 30%,
            rgba(240, 215, 140, 0.6) 50%,
            rgba(244, 184, 200, 0.5) 70%,
            transparent 100%)`,
          filter: 'blur(1px)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
