import { motion, useScroll, useVelocity, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const NebulousBackground = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [agitation, setAgitation] = useState(1);

  // React to scroll speed - faster scroll = more agitation
  useEffect(() => {
    const unsubscribe = scrollVelocity.on('change', (latest) => {
      const velocity = Math.abs(latest);
      // Scale agitation based on scroll speed
      const newAgitation = 1 + Math.min(velocity / 1000, 2);
      setAgitation(newAgitation);
    });

    return () => unsubscribe();
  }, [scrollVelocity]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base cosmic gradient - ALWAYS VISIBLE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1a2847] to-[#0f1f3d]" />

      {/* Star field */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Large nebula clouds - HIGH OPACITY for visibility */}
      <motion.div
        className="absolute top-0 left-1/4 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35), rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          filter: `blur(${80 * agitation}px)`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1 * agitation, 1],
        }}
        transition={{
          duration: 20 / agitation,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
          filter: `blur(${90 * agitation}px)`,
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15 * agitation, 1],
        }}
        transition={{
          duration: 25 / agitation,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25), rgba(6, 182, 212, 0.12) 50%, transparent 70%)',
          filter: `blur(${100 * agitation}px)`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2 * agitation, 1],
        }}
        transition={{
          duration: 35 / agitation,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Gaseous particles that agitate on scroll */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(56, 189, 248, ${Math.random() * 0.15 + 0.1}), transparent 70%)`,
              filter: `blur(${Math.random() * 40 + 30}px)`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200 * agitation],
              y: [0, (Math.random() - 0.5) * 200 * agitation],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1929]/50" />
    </div>
  );
};




