import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#1D4FD8] flex items-center justify-center transition-colors duration-200"
      animate={{
        x: position.x - (isHovered ? 20 : 12),
        y: position.y - (isHovered ? 20 : 12),
        width: isHovered ? 40 : 24,
        height: isHovered ? 40 : 24,
        backgroundColor: isHovered ? 'rgba(247, 147, 30, 0.15)' : 'rgba(29, 79, 216, 0.05)',
        borderColor: isHovered ? '#F7931E' : '#1D4FD8',
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 400, mass: 0.2 }}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          isHovered ? 'bg-[#F7931E]' : 'bg-[#1D4FD8]'
        }`}
      />
    </motion.div>
  );
};
