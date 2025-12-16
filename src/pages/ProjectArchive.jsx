import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {GlassCard} from '@/components/glass/GlassCard';
import {resumeData} from '@/data/resumeData';
import {cn} from '@/lib/utils';
import {techIconMap} from '@/utils/techIcons.jsx';

// Categorize projects
const categorizeProjects = projects => {
  const categories = {
    'AI + ML': [],
    Systems: [],
    'Full Stack': [],
  };

  projects.forEach(project => {
    const title = project.title.toLowerCase();
    const tech = project.technologies.map(t => t.toLowerCase()).join(' ');
    const desc = project.description.toLowerCase();

    // AI + ML projects
    if (
      title.includes('llm') ||
      title.includes('honey') ||
      title.includes('ip-sage') ||
      title.includes('parkinson') ||
      title.includes('sentiment') ||
      title.includes('bert') ||
      title.includes('machine learning') ||
      title.includes('cs1-llm') ||
      tech.includes('llm') ||
      tech.includes('pytorch') ||
      tech.includes('tensorflow') ||
      tech.includes('scikit-learn') ||
      tech.includes('openai') ||
      tech.includes('claude')
    ) {
      categories['AI + ML'].push(project);
    }
    // Systems projects
    else if (
      title.includes('gpu') ||
      title.includes('megakernel') ||
      title.includes('cuda') ||
      title.includes('thunderkittens') ||
      title.includes('country-in-the-middle') ||
      title.includes('country in the middle') ||
      tech.includes('cuda') ||
      tech.includes('c++') ||
      desc.includes('gpu') ||
      desc.includes('kernel') ||
      desc.includes('network paths') ||
      desc.includes('internet measurement')
    ) {
      categories['Systems'].push(project);
    }
    // Full Stack projects
    else {
      categories['Full Stack'].push(project);
    }
  });

  return categories;
};

// Image Carousel Component
const ImageCarousel = ({images, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex(curr => (curr - 1 + images.length) % images.length);

  if (images.length === 1) {
    return (
      <div className="aspect-video overflow-hidden rounded-t-xl">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        aria-label="Previous image">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        aria-label="Next image">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export const ProjectArchive = () => {
  const projectCategories = categorizeProjects(resumeData.projects);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Back navigation */}
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          className="mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text-primary">
            All Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-white max-w-3xl mx-auto px-4">
            A comprehensive collection of my work spanning AI/ML, systems
            programming, and full-stack development
          </p>
        </motion.div>

        {/* Project categories */}
        {Object.entries(projectCategories).map(
          ([category, projects], categoryIndex) =>
            projects.length > 0 && (
              <motion.section
                key={category}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: categoryIndex * 0.2}}
                className="mb-16 sm:mb-20 md:mb-24">
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 gradient-text-primary">
                    {category}
                  </h2>
                  <div className="h-1 w-24 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{opacity: 0, y: 50}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true, margin: '-100px'}}
                      transition={{delay: index * 0.1, duration: 0.6}}>
                      <GlassCard
                        className={cn(
                          'h-full overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col',
                          project.featured && 'border-blue-400/30',
                        )}>
                        {/* Image Slideshow */}
                        {project.images && project.images.length > 0 && (
                          <ImageCarousel
                            images={project.images}
                            title={project.title}
                          />
                        )}

                        {/* Content */}
                        <div className="p-4 sm:p-6 flex-1 flex flex-col">
                          {/* Title */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold">
                              {project.title}
                            </h3>
                            {project.featured && (
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 whitespace-nowrap ml-2">
                                Featured
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground dark:text-white mb-4 flex-1">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map(tech => (
                              <span
                                key={tech}
                                className="flex items-center gap-2 px-3 py-1 text-xs sm:text-sm rounded-full bg-background/50 backdrop-blur-sm border border-primary/30">
                                {techIconMap[tech] || <span></span>}
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors duration-300">
                                {project.link.includes('github.com') ||
                                project.link.includes('github') ? (
                                  <>
                                    <Github className="w-4 h-4" />
                                    View Code
                                  </>
                                ) : (
                                  <>
                                    <ExternalLink className="w-4 h-4" />
                                    View Project
                                  </>
                                )}
                              </a>
                            )}
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ),
        )}
      </div>
    </div>
  );
};

export default ProjectArchive;
