"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderedWords(wordsArray);
    }, 100);
    return () => clearTimeout(timeout);
  }, [words]);

  return (
    <div className={className}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
            }}
            className="text-slate-300 inline-block mr-1"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
