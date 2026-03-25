import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {FolderOpen, FileText, FlaskConical, GraduationCap} from 'lucide-react';
import {cn} from '@/lib/utils';

const navItems = [
  {id: 'experience', label: 'Experience'},
  {id: 'featured-works', label: 'Featured Works'},
  {id: 'research', label: 'Published Research'},
  {id: 'contact', label: 'Contact'},
];

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

const Header = ({theme}) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'experience',
        'featured-works',
        'research',
        'ucsd',
        'contact',
      ];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Google Drive resume link - update this with your actual Drive shareable link
  const resumeLink =
    import.meta.env.VITE_RESUME_DRIVE_LINK ||
    'https://drive.google.com/file/d/YOUR_FILE_ID/view';

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full',
          'bg-background/80 backdrop-blur-xl',
          'border-b border-border/40',
          'supports-[backdrop-filter]:bg-background/60',
        )}
        style={{
          background:
            theme === 'dark'
              ? 'rgba(18, 18, 18, 0.6)'
              : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            {isHome ? (
              <Link
                to="home"
                {...scrollProps}
                className="text-2xl font-bold font-mono text-primary hover:text-primary/80 transition-colors cursor-pointer">
                SS
              </Link>
            ) : (
              <RouterLink
                to="/"
                className="text-2xl font-bold font-mono text-primary hover:text-primary/80 transition-colors">
                SS
              </RouterLink>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {isHome ? (
                <>
                  {/* Removed top nav items here, moved to vertical sidebar */}

                  {/* External links with icons */}
                  <div className="flex items-center gap-2">
                    <RouterLink
                      to="/research"
                      className="group flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300"
                      aria-label="View Research Projects">
                      <FlaskConical className="w-4 h-4 text-[#F472B6] group-hover:text-[#F472B6]/80 transition-colors duration-300" />
                      <span className="text-sm font-medium hidden md:inline">
                        Research
                      </span>
                    </RouterLink>
                    <RouterLink
                      to="/projects"
                      className="group flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300"
                      aria-label="View All Projects">
                      <FolderOpen className="w-4 h-4 text-[#2DD4BF] group-hover:text-[#2DD4BF]/80 transition-colors duration-300" />
                      <span className="text-sm font-medium hidden md:inline">
                        Projects
                      </span>
                    </RouterLink>
                    <RouterLink
                      to="/ucsd"
                      className="group flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300"
                      aria-label="View UCSD Page">
                      <GraduationCap className="w-4 h-4 text-[#D4AF37] group-hover:text-[#D4AF37]/80 transition-colors duration-300" />
                      <span className="text-sm font-medium hidden md:inline">
                        @ UCSD
                      </span>
                    </RouterLink>
                    <a
                      href={resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300"
                      aria-label="Download Resume">
                      <FileText className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors duration-300" />
                      <span className="text-sm font-medium hidden md:inline">
                        Resume
                      </span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <RouterLink
                    to="/"
                    className="text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </RouterLink>
                  <RouterLink
                    to="/projects"
                    className={cn(
                      'text-sm font-medium transition-colors',
                      location.pathname === '/projects'
                        ? 'text-primary'
                        : 'hover:text-primary',
                    )}>
                    Projects
                  </RouterLink>
                  <RouterLink
                    to="/research"
                    className={cn(
                      'text-sm font-medium transition-colors',
                      location.pathname === '/research'
                        ? 'text-primary'
                        : 'hover:text-primary',
                    )}>
                    Research
                  </RouterLink>
                  <RouterLink
                    to="/ucsd"
                    className={cn(
                      'text-sm font-medium transition-colors',
                      location.pathname === '/ucsd'
                        ? 'text-primary'
                        : 'hover:text-primary',
                    )}>
                    @ UCSD
                  </RouterLink>
                </>
              )}

            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            'fixed inset-0 z-50 md:hidden',
            'bg-background/95 backdrop-blur-xl',
            'supports-[backdrop-filter]:bg-background/80',
          )}
          style={{
            background:
              theme === 'dark'
                ? 'rgba(18, 18, 18, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {isHome ? (
              <>
                {/* Removed mobile nav items here */}
                <RouterLink
                  to="/research"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors">
                  <FlaskConical className="w-5 h-5" />
                  Research
                </RouterLink>
                <RouterLink
                  to="/projects"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors">
                  <FolderOpen className="w-5 h-5" />
                  Projects
                </RouterLink>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors">
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </>
            ) : (
              <>
                <RouterLink
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-xl font-medium hover:text-primary transition-colors">
                  Home
                </RouterLink>
                <RouterLink
                  to="/projects"
                  onClick={closeMobileMenu}
                  className={cn(
                    'text-xl font-medium transition-colors',
                    location.pathname === '/projects'
                      ? 'text-primary'
                      : 'hover:text-primary',
                  )}>
                  Projects
                </RouterLink>
                <RouterLink
                  to="/research"
                  onClick={closeMobileMenu}
                  className={cn(
                    'text-xl font-medium transition-colors',
                    location.pathname === '/research'
                      ? 'text-primary'
                      : 'hover:text-primary',
                  )}>
                  Research
                </RouterLink>
              </>
            )}
          </div>
        </div>
      )}
      {/* Right Sidebar for Navigation instead of top nav */}
      {isHome && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-12 font-label text-[10px] tracking-[0.2em] text-[#888888] uppercase">
          {navItems.map((item) => (
            <div key={item.id} className="relative group flex items-center">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={cn(
                  'cursor-pointer transition-colors [writing-mode:vertical-rl] rotate-180 hover:text-[#D4AF37]',
                  activeSection === item.id && 'text-[#D4AF37] font-bold'
                )}
              >
                {item.label}
              </Link>
              {activeSection === item.id && (
                <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-[2px] h-8 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Header;
