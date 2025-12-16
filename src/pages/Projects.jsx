import {useState} from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import {ChevronLeft, ChevronRight, FileText} from 'lucide-react';
import {techIconMap} from '@/utils/techIcons.jsx';
import VideoPlayer from '@/components/VideoPlayer';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassButton} from '@/components/glass/GlassButton';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';
import {cn} from '@/lib/utils';

// Image Carousel Component
const ImageCarousel = ({images, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex(curr => (curr - 1 + images.length) % images.length);

  if (images.length === 1) {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover object-center bg-black/10 backdrop-blur-sm"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center bg-black/10 backdrop-blur-sm"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 text-white"
        aria-label="Previous image">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 text-white"
        aria-label="Next image">
        <ChevronRight className="w-6 h-6" />
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

const Projects = ({content}) => {
  const featuredProjects = content.filter(p => p.featured).slice(0, 4);

  const renderProject = (project, index) => (
    <motion.div
      key={index}
      className={cn(
        'flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-center',
        index % 2 === 1 && 'md:flex-row-reverse',
      )}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={optimizedViewport}
      transition={{duration: 0.3}}>
      {/* Image/Video Container */}
      <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl shadow-glass overflow-hidden relative flex items-center justify-center bg-black/20">
        {project.video ? (
          <VideoPlayer url={project.video} className="w-full h-full" />
        ) : project.images && project.images.length > 0 ? (
          <ImageCarousel images={project.images} title={project.title} />
        ) : (
          <img
            src="https://placehold.co/600x400/1E1E1E/FFFFFF?text=No+Image"
            alt="Placeholder"
            className="max-w-full max-h-full"
          />
        )}
      </div>

      {/* Project Info */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground dark:text-white mb-4 sm:mb-6 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 mb-4 sm:mb-6 list-none p-0">
          {project.technologies.map((tech, i) => (
            <li
              key={i}
              className={cn(
                'flex items-center gap-2',
                'bg-card/50 backdrop-blur-sm',
                'px-4 py-2 rounded-lg',
                'text-sm whitespace-nowrap',
              )}>
              {techIconMap[tech] || <span></span>}
              <span>{tech}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold flex items-center gap-2 hover:underline transition-all">
              {project.link.includes('github.com') ? (
                <>
                  <FaGithub /> View on GitHub
                </>
              ) : project.link.includes('vercel.app') || project.link.includes('http') ? (
                'View Live Site'
              ) : (
                'View Project'
              )}
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold flex items-center gap-2 hover:underline transition-all">
              <FileText className="w-4 h-4" />
              {project.paper.includes('arxiv.org') ? 'View on Arxiv' : 'View Paper'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <GlassSection className="max-w-7xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 gradient-text-primary"
          variants={glassVariants}>
          Featured Works
        </motion.h2>
        {featuredProjects.length > 0 ? (
          <>
            {featuredProjects.map(renderProject)}
            <div className="text-center mt-8">
              <Link to="/projects">
                <GlassButton variant="primary">View All Projects</GlassButton>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-muted-foreground dark:text-white">
            No featured projects available.
          </p>
        )}
      </motion.div>
    </GlassSection>
  );
};

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
      paper: PropTypes.string,
      video: PropTypes.string,
      featured: PropTypes.bool,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default Projects;
