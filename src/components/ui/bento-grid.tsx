"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: springConfig }}
      transition={springConfig}
      viewport={{ once: true }}
      className={cn(
        "row-span-1 rounded-2xl group/bento transition-all duration-300 p-5 bg-[#151419] border border-white/[0.06] hover:border-[#f4a5b8]/20 justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition-transform duration-300">
        {icon}
        <div className="text-[#faf8f5] mb-2 mt-2 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
          {title}
        </div>
        <div className="text-[#8b8693] text-xs font-light leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
