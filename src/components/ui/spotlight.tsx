'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SpotlightProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export function Spotlight({ 
  children, 
  className = '',
  spotlightColor = 'rgba(244, 184, 200, 0.15)'
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    })
  }, [])

  const handleMouseEnter = useCallback(() => setOpacity(1), [])
  const handleMouseLeave = useCallback(() => setOpacity(0), [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    container.addEventListener('mousemove', handleMouseMove, { passive: true })
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 rounded-inherit"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </div>
  )
}

// Spotlight Card with hover border glow
export function SpotlightCard({ 
  children, 
  className = '',
  glowColor = 'var(--rose)'
}: { 
  children: React.ReactNode
  className?: string
  glowColor?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    })
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    
    card.addEventListener('mousemove', handleMouseMove, { passive: true })
    card.addEventListener('mouseenter', () => setOpacity(1))
    card.addEventListener('mouseleave', () => setOpacity(0))
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', () => setOpacity(1))
      card.removeEventListener('mouseleave', () => setOpacity(0))
    }
  }, [handleMouseMove])

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--background-card)] transition-all duration-500 ${className}`}
    >
      {/* Border glow on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}30, transparent 40%)`,
        }}
      />
      
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(244, 184, 200, 0.08), transparent 40%)`,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.2 }}
      />
      
      <div className="relative z-20">{children}</div>
    </div>
  )
}
