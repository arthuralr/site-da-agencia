import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface MotionSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportMargin?: string;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className = '',
  viewportMargin = '-40px',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // refined cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
