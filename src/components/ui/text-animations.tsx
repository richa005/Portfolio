'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

interface FlipWordsProps {
  words: string[]
  className?: string
  duration?: number
}

export function FlipWords({ words, className = '', duration = 3000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 30, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 90 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'center bottom' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Morphing Text with character-by-character animation
export function MorphingText({ 
  texts,
  className = '',
  charDelay = 0.03,
  holdDuration = 2000
}: {
  texts: string[]
  className?: string
  charDelay?: number
  holdDuration?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const currentText = texts[currentIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, currentText.length * charDelay * 1000 + 500)
    }, holdDuration)
    
    return () => clearTimeout(timeout)
  }, [currentIndex, currentText.length, charDelay, holdDuration, texts.length])

  return (
    <span className={`relative inline-block ${className}`}>
      {currentText.split('').map((char, i) => (
        <motion.span
          key={`${currentIndex}-${i}`}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ 
            opacity: isAnimating ? 0 : 1, 
            y: isAnimating ? -10 : 0,
            filter: isAnimating ? 'blur(4px)' : 'blur(0px)'
          }}
          transition={{
            duration: 0.4,
            delay: i * charDelay,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Text Reveal Animation - Elegant line-by-line reveal
export function TextReveal({ 
  children, 
  className = '',
  delay = 0
}: { 
  children: string
  className?: string
  delay?: number
}) {
  return (
    <span className={`overflow-hidden inline-block ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// Gradient Text Reveal with mask
export function GradientTextReveal({
  children,
  className = '',
  gradient = 'from-[var(--rose)] via-[var(--lilac)] to-[var(--rose)]'
}: {
  children: string
  className?: string
  gradient?: string
}) {
  return (
    <motion.span
      className={`inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent bg-[length:200%_100%] ${className}`}
      initial={{ backgroundPosition: '200% center', opacity: 0 }}
      whileInView={{ backgroundPosition: '0% center', opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  )
}

// Word Pull Up Animation
export function WordPullUp({ 
  words,
  className = '',
  wrapperClassName = ''
}: {
  words: string
  className?: string
  wrapperClassName?: string
}) {
  const wordArray = words.split(' ')
  
  return (
    <span className={wrapperClassName}>
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-2 ${className}`}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Typing Animation with cursor
export function TypingAnimation({ 
  texts,
  className = '',
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000
}: {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  )
}

// Letter Shuffle Animation
export function LetterShuffle({
  children,
  className = ''
}: {
  children: string
  className?: string
}) {
  const [displayText, setDisplayText] = useState(children)
  const [isHovered, setIsHovered] = useState(false)
  
  const shuffleLetters = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let iterations = 0
    
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split('').map((char, i) => {
          if (i < iterations) return children[i]
          if (char === ' ') return ' '
          return letters[Math.floor(Math.random() * letters.length)]
        }).join('')
      )
      
      iterations += 1/3
      
      if (iterations >= children.length) {
        clearInterval(interval)
        setDisplayText(children)
      }
    }, 30)
  }, [children])

  useEffect(() => {
    if (isHovered) shuffleLetters()
  }, [isHovered, shuffleLetters])

  return (
    <span
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  )
}
