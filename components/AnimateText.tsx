"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  characterDelay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, characterDelay = 0.1 }) => {
  const lines = text.split("\\n");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: characterDelay * 5, // Adjust the staggering for lines
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: characterDelay,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {lines.map((line, lineIndex) => (
        <motion.div key={lineIndex} variants={lineVariants} className="flex justify-center lg:justify-start">
          {line.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={charVariants} className='text-8xl md:text-9xl font-bold pb-2 animate-fadeToTransparent'>
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
