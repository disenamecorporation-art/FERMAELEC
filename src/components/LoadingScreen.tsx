import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#0B2A6B] flex flex-col items-center justify-center p-6 text-white"
        >
          {/* Logo SVG drawing animation */}
          <div className="w-64 sm:w-80 mb-8">
            <svg
              viewBox="0 0 240 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Outer logo circle */}
              <motion.circle
                cx="30"
                cy="30"
                r="22"
                stroke="white"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />

              {/* Electrocardiogram / Spark Pulse in Orange */}
              <motion.path
                d="M12 30H20L24 18L29 42L33 22L36 30H48"
                stroke="#F7931E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
              />

              {/* Text FERMAELEC */}
              <motion.text
                x="60"
                y="38"
                fill="white"
                fontFamily="Montserrat"
                fontWeight="300"
                fontSize="24"
                letterSpacing="2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 60 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                FERMAELEC
              </motion.text>
            </svg>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-blue-200 text-xs sm:text-sm font-light tracking-widest uppercase mb-8"
          >
            INNOVACIÓN • CALIDAD • CONFIANZA
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-48 sm:w-64 h-1 bg-white/20 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#F7931E]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <span className="mt-3 text-xs text-blue-200 font-mono">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
