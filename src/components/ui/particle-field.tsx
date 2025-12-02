'use client'

import { motion } from 'framer-motion'
import { useMemo, useCallback, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function ParticleField({ count = 50 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'rgba(244, 184, 200, 0.65)',
      'rgba(212, 198, 255, 0.55)',
      'rgba(240, 215, 140, 0.5)',
      'rgba(168, 219, 197, 0.5)',
      'rgba(255, 255, 255, 0.45)',
    ]
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 2.1) % 100,
      y: (i * 2.7) % 100,
      size: 1 + (i % 4),
      color: colors[i % colors.length],
      duration: 3 + (i % 5) * 0.8,
      delay: (i % 12) * 0.2,
    }))
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            opacity: [0.25, 0.85],
            scale: [1, 1.5],
            y: [0, -12],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function SparkleEffect() {
  const sparkles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 3.4) % 100,
      y: (i * 4.1) % 100,
      size: 5 + (i % 4) * 2,
      duration: 2.5 + (i % 4) * 0.5,
      delay: (i % 10) * 0.15,
    }))
  , [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1],
            scale: [0.6, 1.2],
            rotate: [0, 180],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatType: 'reverse',
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
              fill="rgba(244, 184, 200, 0.65)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export function MagicCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 30, stiffness: 200 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        width: 45,
        height: 45,
        background: 'radial-gradient(circle, rgba(244, 184, 200, 0.18), transparent)',
        filter: 'blur(8px)',
      }}
      animate={{
        scale: [1, 1.15],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  )
}
