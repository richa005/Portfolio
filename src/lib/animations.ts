/**
 * ✨ Ethereal Animation Library
 * Feminine, elegant motion design for a luxury portfolio experience
 * Inspired by silk, petals, and aurora movements
 */

// Elegant easing curves - smooth and graceful
export const easings = {
  // Silk-smooth entrance
  silkIn: [0.22, 1, 0.36, 1] as const,
  // Graceful exit
  silkOut: [0.55, 0.055, 0.675, 0.19] as const,
  // Bouncy feminine
  petal: [0.34, 1.56, 0.64, 1] as const,
  // Elegant smooth
  elegant: [0.4, 0, 0.2, 1] as const,
  // Breathing motion
  breathing: [0.37, 0, 0.63, 1] as const,
  // Gentle float
  gentle: [0.45, 0.05, 0.55, 0.95] as const,
};

// Animation configurations with feminine touch
export const animations = {
  // For small UI elements - delicate and precise
  snappy: {
    type: "spring" as const,
    stiffness: 350,
    damping: 28,
    mass: 0.8,
  },
  
  // For cards and sections - silk-smooth
  smooth: {
    type: "spring" as const,
    stiffness: 120,
    damping: 18,
    mass: 1,
  },
  
  // Soft bouncy - like a petal landing
  bouncy: {
    type: "spring" as const,
    stiffness: 260,
    damping: 15,
    mass: 0.9,
  },
  
  // For large elements - gentle aurora-like
  slow: {
    type: "spring" as const,
    stiffness: 40,
    damping: 15,
    mass: 1.2,
  },
  
  // For text reveals - elegant
  text: {
    type: "spring" as const,
    stiffness: 130,
    damping: 20,
    mass: 0.9,
  },
  
  // Ultra soft for background elements
  ethereal: {
    type: "spring" as const,
    stiffness: 30,
    damping: 12,
    mass: 1.5,
  },
  
  // Quick micro-interactions
  micro: {
    type: "spring" as const,
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  },
  
  // Breathing motion for living elements
  breathing: {
    type: "tween" as const,
    ease: easings.breathing,
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

// Stagger container variants - elegant reveal
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
      ease: easings.silkIn,
    },
  },
};

// Faster stagger for dense content
export const staggerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Character stagger for text - silky reveal
export const characterStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.05,
    },
  },
};

// Elegant fade up - main entrance
export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: "blur(8px)",
  },
  show: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...animations.smooth,
      filter: { duration: 0.4 },
    },
  },
};

// Gentle fade up for smaller elements
export const fadeUpGentle = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: animations.smooth,
  },
};

// Bloom effect - scale with glow
export const bloom = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)",
  },
  show: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...animations.bouncy,
      filter: { duration: 0.5 },
    },
  },
};

// Fade in scale - soft
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.92,
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: animations.snappy,
  },
};

// Slide from left with grace
export const slideFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -80,
    filter: "blur(6px)",
  },
  show: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: animations.smooth,
  },
};

// Slide from right with grace
export const slideFromRight = {
  hidden: { 
    opacity: 0, 
    x: 80,
    filter: "blur(6px)",
  },
  show: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: animations.smooth,
  },
};

// Float in from bottom
export const floatIn = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: 15,
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: animations.smooth,
  },
};

// Character animation for text - 3D flip
export const characterVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -80,
    filter: "blur(4px)",
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      ...animations.text,
      filter: { duration: 0.3 },
    },
  },
};

// Gradient text reveal
export const gradientTextReveal = {
  hidden: { 
    opacity: 0, 
    y: 40,
    backgroundPosition: "200% center",
  },
  show: { 
    opacity: 1, 
    y: 0,
    backgroundPosition: "0% center",
    transition: {
      ...animations.smooth,
      backgroundPosition: {
        duration: 1.5,
        ease: easings.silkIn,
      },
    },
  },
};

// Card hover variants - elegant lift
export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
  hover: {
    y: -8,
    scale: 1.015,
    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(242, 181, 196, 0.1)",
    transition: animations.snappy,
  },
  tap: {
    scale: 0.98,
    transition: animations.micro,
  },
};

// Button hover with glow
export const buttonHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(242, 181, 196, 0.1)",
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 40px rgba(242, 181, 196, 0.25)",
    transition: animations.snappy,
  },
  tap: {
    scale: 0.97,
    transition: animations.micro,
  },
};

// For hover 3D tilt effect
export const tiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: animations.smooth,
  },
  hover: {
    scale: 1.025,
    transition: animations.snappy,
  },
};

// Link underline animation
export const linkUnderline = {
  rest: {
    width: "0%",
    opacity: 0,
  },
  hover: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.silkIn,
    },
  },
};

// Icon float animation
export const iconFloat = {
  rest: {
    y: 0,
    rotate: 0,
  },
  hover: {
    y: -4,
    rotate: 5,
    transition: animations.bouncy,
  },
};

// Page transition variants - cinematic
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 40,
    filter: "blur(12px)",
    scale: 0.98,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easings.silkIn,
      filter: { duration: 0.5 },
    },
  },
  exit: { 
    opacity: 0, 
    y: -30,
    filter: "blur(8px)",
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: easings.silkOut,
    },
  },
};

// Section reveal from below
export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...animations.smooth,
      staggerChildren: 0.15,
    },
  },
};

// Parallax scroll variants
export const parallax = (strength: number = 0.5) => ({
  initial: { y: 0 },
  scroll: {
    y: (offset: number) => offset * strength,
    transition: { type: "tween", ease: "linear" },
  },
});

// Continuous floating animation
export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Gentle rotation
export const gentleRotate = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Glow pulse
export const glowPulse = {
  initial: { 
    boxShadow: "0 0 20px rgba(242, 181, 196, 0.1)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(242, 181, 196, 0.1)",
      "0 0 40px rgba(242, 181, 196, 0.2)",
      "0 0 20px rgba(242, 181, 196, 0.1)",
    ],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// Mask reveal
export const maskReveal = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      duration: 0.8,
      ease: easings.silkIn,
    },
  },
};

// Line draw animation
export const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: easings.elegant },
      opacity: { duration: 0.3 },
    },
  },
};

// Staggered grid reveal
export const gridStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// Grid item variants
export const gridItem = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: animations.bouncy,
  },
};
