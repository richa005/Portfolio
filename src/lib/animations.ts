// Animation hierarchy - different configs for different purposes

export const animations = {
  // For small UI elements - buttons, badges, icons
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
  
  // For medium elements - cards, sections
  smooth: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
  },
  
  // For playful bouncy effects
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 10,
  },
  
  // For large background elements
  slow: {
    type: "spring" as const,
    stiffness: 50,
    damping: 20,
  },
  
  // For text reveals
  text: {
    type: "spring" as const,
    stiffness: 150,
    damping: 25,
  },
};

// Stagger container variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Character stagger for text
export const characterStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

// Fade up variants
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: animations.smooth,
  },
};

// Fade in scale
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: animations.snappy,
  },
};

// Slide from left
export const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: animations.smooth,
  },
};

// Slide from right
export const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: animations.smooth,
  },
};

// Character animation for text
export const characterVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 20,
    },
  },
};

// For hover 3D tilt effect
export const tiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: animations.snappy,
  },
};

// Page transition variants
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)",
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
    },
  },
};
