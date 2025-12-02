'use client'

import { motion } from 'framer-motion'

interface SilkWavesProps {
  className?: string
}

export function SilkWaves({ className = '' }: SilkWavesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* First Wave Layer */}
      <motion.svg
        className="absolute bottom-0 w-full h-48 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <motion.stop
              offset="0%"
              animate={{
                stopColor: ['rgba(242,181,196,0.15)', 'rgba(212,198,255,0.15)', 'rgba(242,181,196,0.15)'],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.stop
              offset="50%"
              animate={{
                stopColor: ['rgba(212,198,255,0.12)', 'rgba(168,219,197,0.12)', 'rgba(212,198,255,0.12)'],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.stop
              offset="100%"
              animate={{
                stopColor: ['rgba(168,219,197,0.1)', 'rgba(242,181,196,0.1)', 'rgba(168,219,197,0.1)'],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#waveGradient1)"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>

      {/* Second Wave Layer - Offset */}
      <motion.svg
        className="absolute bottom-0 w-full h-36 md:h-48"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(212,198,255,0.08)" />
            <stop offset="100%" stopColor="rgba(242,181,196,0.08)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#waveGradient2)"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  )
}

export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 80, x: '10%', y: '20%', duration: 15, delay: 0 },
    { type: 'circle', size: 60, x: '85%', y: '30%', duration: 18, delay: 2 },
    { type: 'circle', size: 40, x: '70%', y: '70%', duration: 12, delay: 1 },
    { type: 'circle', size: 100, x: '20%', y: '75%', duration: 20, delay: 3 },
    { type: 'ring', size: 120, x: '80%', y: '15%', duration: 25, delay: 0 },
    { type: 'ring', size: 80, x: '15%', y: '50%', duration: 22, delay: 1 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -20, 10, -15, 0],
            x: [0, 10, -10, 5, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' ? (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(242,181,196,0.1), rgba(212,198,255,0.05))',
                border: '1px solid rgba(242,181,196,0.1)',
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-full"
              style={{
                border: '1px solid rgba(212,198,255,0.15)',
                background: 'transparent',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
