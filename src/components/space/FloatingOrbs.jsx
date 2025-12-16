import { useMemo } from 'react';

// Limit particle count based on device performance
const getParticleCount = () => {
  if (typeof window === 'undefined') return 8;
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  return isLowEnd ? 5 : 8;
};

export const FloatingOrbs = () => {
  const particleCount = useMemo(() => getParticleCount(), []);
  
  const orbs = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    })), [particleCount]
  );

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-blue-400/30 animate-float"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            bottom: '-10%',
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

