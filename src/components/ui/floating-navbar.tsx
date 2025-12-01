"use client";

import { motion } from "framer-motion";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`flex max-w-fit fixed top-8 inset-x-0 mx-auto border border-white/[0.08] rounded-full z-[5000] px-2 py-2 items-center justify-center gap-1 ${className}`}
      style={{ 
        background: 'rgba(10,10,12,0.8)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {navItems.map((navItem, idx) => (
        <motion.a
          key={`link-${idx}`}
          href={navItem.link}
          className="relative px-4 py-2 rounded-full text-[#a09aab] items-center flex space-x-1 hover:text-[#faf8f5] hover:bg-white/[0.05] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-[13px] font-medium tracking-wide">{navItem.name}</span>
        </motion.a>
      ))}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        className="text-[13px] font-medium relative px-5 py-2 rounded-full transition-all duration-300 ml-1"
        style={{ 
          background: 'linear-gradient(135deg, #f4a5b8 0%, #c8b6ff 100%)',
          color: '#0a0a0c',
        }}
      >
        <span>Let's Talk</span>
      </motion.a>
    </motion.div>
  );
};
