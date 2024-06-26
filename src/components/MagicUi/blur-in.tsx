import React from 'react';
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  highlightWord?: string | string[];
  highlightColor?: string;
}

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  highlightWord = "Rust",
  highlightColor = "text-gray-500"
}: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  const words = word.split(' ');

  const gradientStyle = {
    background: "linear-gradient(45deg, #711a5f, #fda7df 70%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-8xl md:leading-[6.6rem]",
      )}
    >
      {words.map((w, index) => (
        <React.Fragment key={index}>
          {w.toLowerCase() === highlightWord.toLowerCase() ? (
            <span style={gradientStyle}>{w}</span>
          ) : (
            w
          )}
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.h1>
  );
};

export default BlurIn;
