'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Petal {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  rotation: number
  color: string
  drift: number
}

const colors = [
  'rgba(244, 184, 200, 0.45)',
  'rgba(212, 198, 255, 0.4)',
  'rgba(240, 215, 140, 0.35)',
  'rgba(168, 219, 197, 0.35)',
  'rgba(255, 196, 168, 0.4)',
]

export function FloatingPetals({ count = 20 }: { count?: number }) {
  const petals = useMemo<Petal[]>(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 5.2) % 100,
      size: 8 + (i % 5) * 3,
      duration: 22 + (i % 6) * 3,
      delay: (i % 8) * -3,
      rotation: (i * 37) % 360,
      color: colors[i % colors.length],
      drift: (i % 2 === 0 ? 1 : -1) * (5 + (i % 4) * 3),
    }))
  , [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-8%',
          }}
          animate={{
            y: ['0vh', '115vh'],
            x: [`${petal.x}%`, `${petal.x + petal.drift}%`],
            rotate: [petal.rotation, petal.rotation + 720],
            opacity: [0, 0.85, 0.85, 0],
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
            fill={petal.color}
            className="drop-shadow-sm"
            style={{ width: petal.size, height: petal.size * 1.5 }}
          >
            <ellipse cx="10" cy="15" rx="8" ry="12" />
            <ellipse cx="10" cy="12" rx="5" ry="8" fill="rgba(255,255,255,0.25)" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export function FloatingOrbs({ count = 6 }: { count?: number }) {
  const orbs = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 10 + (i * 15) % 80,
      y: 10 + (i * 18) % 80,
      size: 200 + (i % 4) * 100,
      duration: 18 + (i % 5) * 4,
      color: colors[i % colors.length],
    }))
  , [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 40],
            y: [0, -30],
            scale: [1, 1.08],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
