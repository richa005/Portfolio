"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[1px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-30 group-hover:opacity-50 blur-xl transition duration-700 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f4a5b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#c8b6ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#e8c872,transparent),radial-gradient(circle_farthest-side_at_0_0,#a8d5ba,#151419)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform opacity-60",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#f4a5b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#c8b6ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#e8c872,transparent),radial-gradient(circle_farthest-side_at_0_0,#a8d5ba,#151419)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
