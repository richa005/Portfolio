'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function Parallax({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  
  // Determine output range based on direction
  const isHorizontal = direction === 'left' || direction === 'right'
  const isPositive = direction === 'down' || direction === 'right'
  const outputRange = isPositive 
    ? [-100 * speed, 100 * speed] 
    : [100 * speed, -100 * speed]
  
  const transformValue = useTransform(scrollYProgress, [0, 1], outputRange)
  const smoothTransform = useSpring(transformValue, springConfig)

  const style = isHorizontal 
    ? { x: smoothTransform }
    : { y: smoothTransform }

  return (
    <motion.div ref={ref} className={className} style={style}>
      {children}
    </motion.div>
  )
}

// Reveal on scroll with multiple animation options
export function ScrollReveal({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8
}: {
  children: ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur' | 'flip'
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const getAnimationProps = () => {
    switch (animation) {
      case 'fadeUp':
        return {
          initial: { opacity: 0, y: 60, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }
        }
      case 'fadeDown':
        return {
          initial: { opacity: 0, y: -60 },
          whileInView: { opacity: 1, y: 0 }
        }
      case 'fadeLeft':
        return {
          initial: { opacity: 0, x: 60 },
          whileInView: { opacity: 1, x: 0 }
        }
      case 'fadeRight':
        return {
          initial: { opacity: 0, x: -60 },
          whileInView: { opacity: 1, x: 0 }
        }
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 }
        }
      case 'blur':
        return {
          initial: { opacity: 0, filter: 'blur(20px)' },
          whileInView: { opacity: 1, filter: 'blur(0px)' }
        }
      case 'flip':
        return {
          initial: { opacity: 0, rotateX: -80, transformPerspective: 1000 },
          whileInView: { opacity: 1, rotateX: 0 }
        }
    }
  }

  const animationProps = getAnimationProps()

  return (
    <motion.div
      ref={ref}
      className={className}
      {...animationProps}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation on scroll
export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  containerDelay = 0
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  containerDelay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: containerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Scale reveal for images
export function ImageReveal({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 1.3, filter: 'blur(10px)' }}
        whileInView={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Scroll-driven line progress
export function ScrollLine({
  className = ''
}: {
  className?: string
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[2px] origin-left z-50 ${className}`}
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--rose), var(--lilac), var(--sage))'
      }}
    />
  )
}

// Scroll-triggered counter
export function CountUp({
  end,
  suffix = '',
  prefix = '',
  className = ''
}: {
  end: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center']
  })
  
  const count = useTransform(scrollYProgress, [0, 1], [0, end])
  const springCount = useSpring(count, { stiffness: 80, damping: 30 })

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>
        {springCount.get().toFixed(0)}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

// 3D Tilt on scroll
export function ScrollTilt({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        scale,
        opacity,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  )
}
