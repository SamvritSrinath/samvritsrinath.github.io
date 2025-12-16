import React from 'react';

// Shared variants for consistency and performance
export const glassVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    // Removed blur to reduce repaints and improve performance
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Reduced from 0.5s for faster, less jarring animations
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
    },
  },
};

export const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const gradientFlowVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const staggerContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1 for faster cascading
      delayChildren: 0.05, // Reduced from 0.2s for faster initial animation
    },
  },
};

export const simpleVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
};

// Animation-ready hook to prevent double-renders in StrictMode
export const useAnimationReady = () => {
  const [isReady, setIsReady] = React.useState(false);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    // Small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      if (!hasAnimated.current) {
        setIsReady(true);
        hasAnimated.current = true;
      }
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return isReady;
};

// Optimized viewport settings for smoother animations
export const optimizedViewport = {
  once: true,
  margin: '-100px', // Trigger animations earlier
  amount: 0.1, // Trigger when 10% visible
};

