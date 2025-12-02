'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, ReactNode, useState, useCallback } from 'react'

interface Bento3DCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

// 3D Bento Card with perspective tilt and glow
export function Bento3DCard({ 
  children, 
  className = '',
  glowColor = 'var(--rose)'
}: Bento3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    mouseX.set(x)
    mouseY.set(y)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${(glowX.get() + 0.5) * 100}% ${(glowY.get() + 0.5) * 100}%, ${glowColor}25, transparent 40%)`,
          }}
        />
        
        {/* Card content */}
        <div className="relative z-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--background-card)] overflow-hidden transition-all duration-500 group-hover:border-[var(--border-medium)]">
          {/* Spotlight effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isHovered 
                ? `radial-gradient(400px circle at ${(glowX.get() + 0.5) * 100}% ${(glowY.get() + 0.5) * 100}%, rgba(244, 184, 200, 0.06), transparent 40%)`
                : 'transparent',
            }}
          />
          
          {children}
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)',
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          }}
          animate={{
            transform: isHovered ? ['translateX(-100%)', 'translateX(100%)'] : 'translateX(-100%)',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}

// Bento Grid Layout
export function BentoGrid({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  )
}

// Bento Item with size variants
export function BentoItem({
  children,
  className = '',
  size = 'default',
  glowColor
}: {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide' | 'tall' | 'large'
  glowColor?: string
}) {
  const sizeClasses = {
    default: '',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    large: 'md:col-span-2 md:row-span-2'
  }

  return (
    <Bento3DCard 
      className={`${sizeClasses[size]} ${className}`}
      glowColor={glowColor}
    >
      {children}
    </Bento3DCard>
  )
}

// Feature Card with icon and gradient
export function FeatureCard({
  icon,
  title,
  description,
  gradient = 'from-[var(--rose)] to-[var(--lilac)]',
  className = ''
}: {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  className?: string
}) {
  return (
    <Bento3DCard className={className}>
      <div className="p-6 md:p-8 h-full flex flex-col">
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-2xl text-white">{icon}</span>
        </motion.div>
        
        <h3 className="text-xl font-medium text-[var(--foreground)] mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>
          {title}
        </h3>
        
        <p className="text-[var(--foreground-subtle)] text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <motion.div
          className="mt-5 h-[2px] rounded-full overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={`h-full bg-gradient-to-r ${gradient} opacity-50`} />
        </motion.div>
      </div>
    </Bento3DCard>
  )
}

// Stats Card with animated number
export function StatsCard({
  value,
  label,
  suffix = '',
  prefix = '',
  className = ''
}: {
  value: string
  label: string
  suffix?: string
  prefix?: string
  className?: string
}) {
  return (
    <Bento3DCard className={className}>
      <div className="p-6 md:p-8 text-center">
        <motion.div
          className="text-5xl md:text-6xl font-bold gradient-text mb-3"
          style={{ fontFamily: 'var(--font-space)' }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {prefix}{value}{suffix}
        </motion.div>
        <p className="text-[var(--foreground-subtle)] text-sm">{label}</p>
      </div>
    </Bento3DCard>
  )
}

// Image Card with hover zoom
export function ImageCard({
  src,
  alt,
  overlay,
  className = ''
}: {
  src: string
  alt: string
  overlay?: ReactNode
  className?: string
}) {
  return (
    <Bento3DCard className={className}>
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 to-transparent flex items-end p-6">
            {overlay}
          </div>
        )}
      </div>
    </Bento3DCard>
  )
}
