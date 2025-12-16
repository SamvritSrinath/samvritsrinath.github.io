import { motion } from 'framer-motion';
import { useScrollSection } from '@/hooks/useScrollSection';

const sectionThemes = {
  home: { from: '#0a0a12', to: '#1a1a3e', accent: '#00ffff' },
  experience: { from: '#1a1a3e', to: '#2d1b4e', accent: '#a855f7' },
  'featured-works': { from: '#2d1b4e', to: '#3d1f5c', accent: '#ec4899' },
  projects: { from: '#3d1f5c', to: '#4d1f6c', accent: '#ec4899' },
  research: { from: '#4d1f6c', to: '#5d1f7c', accent: '#a855f7' },
  ucsd: { from: '#5d1f7c', to: '#6d1f8c', accent: '#00ffff' },
  contact: { from: '#6d1f8c', to: '#0a0a12', accent: '#00ffff' },
};

export const CosmicBackground = () => {
  const currentSection = useScrollSection();
  const theme = sectionThemes[currentSection] || sectionThemes.home;

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: `linear-gradient(180deg, ${theme.from}, ${theme.to})`,
      }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {/* Nebula effect overlays */}
      <div className="absolute inset-0 bg-nebula-radial opacity-30" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.accent}40, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.accent}30, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};




