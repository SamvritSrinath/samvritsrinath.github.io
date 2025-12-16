import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const SpaceStation3D = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  // Smooth 3D rotation based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center">
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
        }}
        className="w-96 h-96 relative"
      >
        {/* Glass sphere with floating elements */}
        <div className="absolute inset-0 rounded-full glass-morphism border-2 border-blue-400/20 shadow-glow-blue">
          {/* Orbital rings */}
          <div 
            className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin" 
            style={{ animationDuration: '20s' }} 
          />
          <div 
            className="absolute inset-4 rounded-full border border-blue-400/30 animate-spin" 
            style={{ animationDuration: '15s', animationDirection: 'reverse' }} 
          />
          
          {/* Glowing core */}
          <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-indigo-500/40 blur-2xl" />
        </div>
      </motion.div>
    </div>
  );
};




