import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll tracking with physics-based spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none">
      {/* Background track (subtle) */}
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />

      {/* Animated scroll bar with emerald-to-teal gradient */}
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 origin-left shadow-[0_0_12px_rgba(16,185,129,0.5)]"
      />
    </div>
  );
};
