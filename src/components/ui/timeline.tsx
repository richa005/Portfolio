"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#151419] flex items-center justify-center border border-white/[0.06]">
                <div className="h-3 w-3 rounded-full" style={{ background: 'linear-gradient(135deg, #f4a5b8, #c8b6ff)' }} />
              </div>
              <h3 
                className="hidden md:block text-xl md:pl-20 md:text-3xl"
                style={{ 
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #f4a5b8, #c8b6ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 
                className="md:hidden block text-2xl mb-4 text-left text-[#f4a5b8]"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[1px]"
        >
          <div 
            className="absolute inset-0 w-full"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)' }}
          />
          <motion.div
            className="absolute inset-x-0 top-0 w-[1px] rounded-full"
            style={{ 
              height: "100%",
              opacity: 0.6,
              background: 'linear-gradient(to top, #f4a5b8, #c8b6ff, transparent)' 
            }}
          />
        </div>
      </div>
    </div>
  );
};
