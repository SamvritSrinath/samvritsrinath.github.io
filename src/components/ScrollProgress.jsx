import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'featured-works', label: 'Featured Works' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'ucsd', label: '@ UCSD' },
  { id: 'contact', label: 'Contact' },
];

// Debounce utility
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));

    // Determine active section
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, []);

  const debouncedHandleScroll = useMemo(
    () => debounce(handleScroll, 10),
    [handleScroll]
  );

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [debouncedHandleScroll, handleScroll]);

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      aria-label="Section navigation"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Progress bar */}
        <div
          className="relative h-64 w-1 bg-muted/20 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Page scroll progress"
        >
          <div
            className="absolute bottom-0 left-0 w-full bg-primary transition-all duration-300 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section indicators */}
        <div className="flex flex-col gap-3 items-center" role="list">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={cn(
                'w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                activeSection === section.id
                  ? 'bg-primary border-primary scale-125'
                  : 'bg-background border-muted hover:border-primary/50'
              )}
              title={section.label}
              aria-label={`Navigate to ${section.label} section`}
              role="listitem"
              aria-current={activeSection === section.id ? 'location' : undefined}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ScrollProgress;
