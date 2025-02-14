"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-orange-950 dark:to-orange-900'>
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-orange-950 dark:to-orange-900'
        animate={{
          background: [
            "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
            "linear-gradient(to right, var(--tw-gradient-to), var(--tw-gradient-from))",
            "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {mounted &&
        [...Array(20)].map((_, i) => {
          const width = 50 + Math.floor(Math.random() * 100);
          const height = 50 + Math.floor(Math.random() * 100);
          const left = `${Math.floor(Math.random() * 100)}%`;
          const top = `${Math.floor(Math.random() * 100)}%`;

          return (
            <motion.div
              key={i}
              className='absolute rounded-full opacity-10 bg-gray-400 dark:bg-orange-700'
              style={{
                width,
                height,
                left,
                top,
              }}
              animate={{
                x: [0, Math.floor(Math.random() * 100) - 50],
                y: [0, Math.floor(Math.random() * 100) - 50],
              }}
              transition={{
                duration: 10 + Math.floor(Math.random() * 10),
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
    </div>
  );
};
