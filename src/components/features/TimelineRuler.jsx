import {motion, useScroll, useTransform} from 'framer-motion';
import {useEffect, useState} from 'react';
import {useTheme} from '@/hooks/useTheme';

const sections = [
  {id: 'experience', label: 'Experience', color: '#38bdf8'},
  {id: 'featured-works', label: 'Featured Works', color: '#3b82f6'},
  {id: 'research', label: 'Research', color: '#6366f1'},
  {id: 'ucsd', label: '@ UCSD', color: '#8b5cf6'},
  {id: 'contact', label: 'Contact', color: '#06b6d4'},
];

export const TimelineRuler = () => {
  const {theme} = useTheme();
  const [activeSection, setActiveSection] = useState('experience');
  const [prevActiveSection, setPrevActiveSection] = useState(null);
  const [sectionPositions, setSectionPositions] = useState([]);
  const {scrollYProgress} = useScroll();

  // Calculate section positions for ruler alignment
  useEffect(() => {
    const calculatePositions = () => {
      const positions = [];
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteTop = window.scrollY + rect.top;
          const position =
            scrollableHeight > 0 ? (absoluteTop / scrollableHeight) * 100 : 0;
          positions.push({
            id: section.id,
            position: Math.max(0, Math.min(100, position)),
          });
        }
      });

      setSectionPositions(positions);
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    window.addEventListener('scroll', calculatePositions, {passive: true});
    return () => {
      window.removeEventListener('resize', calculatePositions);
      window.removeEventListener('scroll', calculatePositions);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Trigger when section top is 100px from viewport top
      let currentActive = sections[0].id; // Default to first section

      // Find which section we're currently viewing
      // Check from bottom to top to get the most recent section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          // Section becomes active when its top enters the threshold area (100px from viewport top)
          // This ensures sections activate when they become visible at the top
          if (rect.top <= threshold && rect.bottom > 0) {
            currentActive = section.id;
            break;
          }
        }
      }

      // Update if changed
      if (currentActive !== activeSection) {
        setPrevActiveSection(activeSection);
        setActiveSection(currentActive);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Helper to get position for a section
  const getSectionPosition = (sectionId, index) => {
    const positionData = sectionPositions.find(p => p.id === sectionId);
    if (positionData && sectionPositions.length > 0) {
      return positionData.position;
    }
    // Fallback to even distribution if positions not calculated yet
    return (index / (sections.length - 1)) * 100;
  };

  // Generate more intermediate ticks with varying lengths
  const generateTicks = () => {
    const ticks = [];
    const numSubdivisions = 4;

    for (let i = 0; i < sections.length - 1; i++) {
      const pos1 = getSectionPosition(sections[i].id, i);
      const pos2 = getSectionPosition(sections[i + 1].id, i + 1);
      const range = pos2 - pos1;

      for (let j = 1; j < numSubdivisions; j++) {
        const position = pos1 + (range * j) / numSubdivisions;
        const isMidPoint = j === Math.floor(numSubdivisions / 2);
        const length = isMidPoint ? 'w-3' : 'w-2';
        const opacity = isMidPoint ? 'opacity-30' : 'opacity-20';

        ticks.push({
          position,
          length,
          opacity,
          sectionIndex: i,
        });
      }
    }

    return ticks;
  };

  const intermediateTicks = generateTicks();

  return (
    <div className="fixed right-4 top-24 bottom-8 z-40 hidden lg:block">
      <div className="relative h-full w-1 flex flex-col items-center">
        {/* Ruler base line */}
        <div className="absolute inset-0 w-0.5 bg-primary/20 rounded-full" />

        {/* Active progress line */}
        <motion.div
          className="absolute left-0 top-0 w-0.5 bg-primary rounded-full origin-top"
          style={{height: progressHeight}}
        />

        {/* Intermediate/vestigial ticks */}
        {intermediateTicks.map((tick, index) => {
          const targetSection =
            sections[tick.sectionIndex + 1] || sections[tick.sectionIndex];
          return (
            <a
              key={`intermediate-${index}`}
              href={`#${targetSection.id}`}
              className={`absolute left-0 ${tick.length} h-0.5 ${
                tick.opacity
              } transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/20 hover:bg-white/40'
                  : 'bg-gray-700/20 hover:bg-gray-700/40'
              }`}
              style={{
                top: `${tick.position}%`,
                transform: 'translateY(-50%)',
              }}
              aria-label={`Go to ${targetSection.label}`}>
              <span className="sr-only">{targetSection.label}</span>
            </a>
          );
        })}

        {/* Main section markers with ticks */}
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const position = getSectionPosition(section.id, index);

          return (
            <motion.div
              key={section.id}
              className="absolute left-0 flex items-center justify-center"
              style={{top: `${position}%`, transform: 'translateY(-50%)'}}>
              <motion.a
                href={`#${section.id}`}
                className="cursor-pointer"
                animate={{
                  scaleX: isActive ? 1.5 : 1,
                }}
                transition={{duration: 0.3}}
                whileHover={{scaleX: 1.3}}>
                <motion.div
                  className="w-4 h-0.5"
                  style={{
                    backgroundColor: isActive
                      ? section.color
                      : theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.4)'
                      : 'rgba(0, 0, 0, 0.3)',
                  }}
                  animate={{
                    width: isActive ? '20px' : '12px',
                  }}
                  transition={{duration: 0.3}}
                />
              </motion.a>
            </motion.div>
          );
        })}

        {/* Section title labels */}
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const justBecameActive =
            isActive &&
            prevActiveSection !== section.id &&
            prevActiveSection !== null;
          const position = getSectionPosition(section.id, index);

          return (
            <motion.div
              key={`label-${section.id}`}
              className="absolute left-0 flex items-center"
              style={{
                top: `${position}%`,
                transform: 'translateY(-50%)',
                zIndex: isActive ? 50 : 40,
              }}>
              <motion.a
                href={`#${section.id}`}
                className="absolute right-6 flex items-center whitespace-nowrap cursor-pointer"
                animate={{
                  scale: isActive
                    ? justBecameActive
                      ? [1, 1.25, 1.1]
                      : 1.1
                    : 0.9,
                  opacity: isActive ? 1 : 0.6,
                  x: 0,
                }}
                transition={{
                  scale: {
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                    times: justBecameActive ? [0, 0.5, 1] : undefined,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                  x: {
                    duration: 0.25,
                    ease: 'easeOut',
                  },
                }}
                whileHover={{
                  scale: isActive ? 1.15 : 1.0,
                }}>
                <span
                  className="px-2 py-1 rounded text-xs font-medium backdrop-blur-xl border transition-colors duration-300"
                  style={{
                    backgroundColor: isActive
                      ? `${section.color}20`
                      : theme === 'dark'
                      ? 'rgba(15, 30, 60, 0.7)'
                      : 'rgba(255, 255, 255, 0.9)',
                    borderColor: section.color,
                    color: isActive
                      ? section.color
                      : theme === 'dark'
                      ? section.color
                      : '#1e40af',
                    boxShadow: isActive
                      ? `0 0 12px ${section.color}40`
                      : 'none',
                    display: 'block',
                  }}>
                  {section.label}
                </span>
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
