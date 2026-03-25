import {useState} from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import {ChevronLeft, ChevronRight, FileText, ExternalLink} from 'lucide-react';
import {techIconMap} from '@/utils/techIcons.jsx';
import VideoPlayer from '@/components/VideoPlayer';
import {GlassButton} from '@/components/glass/GlassButton';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';

// Image Carousel
const ImageCarousel = ({images, title}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex(prev => (prev + 1) % images.length);
  const prev = () => setCurrentIndex(curr => (curr - 1 + images.length) % images.length);

  if (images.length === 1) {
    return (
      <div className="w-full h-full overflow-hidden">
        <img src={images[0]} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
          loading="lazy"
        />
      </AnimatePresence>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center opacity-0 group-hover/carousel:opacity-80 transition-opacity text-white bg-black/40 rounded-sm" aria-label="Previous image">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center opacity-0 group-hover/carousel:opacity-80 transition-opacity text-white bg-black/40 rounded-sm" aria-label="Next image">
        <ChevronRight className="w-4 h-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#D4AF37] w-4' : 'bg-white/40'}`} aria-label={`Image ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

// Media renderer helper
const ProjectMedia = ({project, className = ''}) => {
  if (project.video) return <VideoPlayer url={project.video} className={`w-full h-full ${className}`} />;
  if (project.images?.length > 0) return <ImageCarousel images={project.images} title={project.title} />;
  return (
    <div className={`w-full h-full bg-gradient-to-br from-[#111118] to-[#1A1A24] flex items-center justify-center ${className}`}>
      <span className="text-[#94A3B8]/40 font-label text-[10px] tracking-widest uppercase">No Preview</span>
    </div>
  );
};

ProjectMedia.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

// Links bar
const ProjectLinks = ({project, className = ''}) => (
  <div className={`flex gap-3 items-center ${className}`}>
    {project.link && (
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[11px] font-label text-[#D4AF37] hover:text-[#D4AF37]/70 transition-colors tracking-wider uppercase">
        {project.link.includes('github.com') ? <><FaGithub className="w-3.5 h-3.5" /> GitHub</> : <><ExternalLink className="w-3.5 h-3.5" /> Live</>}
      </a>
    )}
    {project.paper && (
      <a href={project.paper} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[11px] font-label text-[#F472B6] hover:text-[#F472B6]/70 transition-colors tracking-wider uppercase">
        <FileText className="w-3.5 h-3.5" /> {project.paper.includes('arxiv.org') ? 'Arxiv' : 'Paper'}
      </a>
    )}
  </div>
);

ProjectLinks.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

const Projects = ({content}) => {
  const featuredProjects = content.filter(p => p.featured).slice(0, 6);
  const spotlight = featuredProjects[0];
  const rest = featuredProjects.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={optimizedViewport}>
        {/* Section Header */}
        <motion.div className="mb-10" variants={glassVariants}>
          <p className="font-label text-[11px] tracking-[0.3em] text-[#2DD4BF] uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Featured Projects</h2>
        </motion.div>

        {spotlight && (
          /* Spotlight: Horizontal hero card */
          <motion.div
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 rounded-sm border border-white/5 bg-[#16161E] hover:border-[#D4AF37]/20 transition-all duration-500 overflow-hidden"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={optimizedViewport}
            transition={{duration: 0.4}}>
            
            {/* Spotlight Image */}
            <div className="h-[260px] md:h-[340px] overflow-hidden">
              <ProjectMedia project={spotlight} />
            </div>
            
            {/* Spotlight Info */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              {spotlight.category && (
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-[#2DD4BF] mb-3">{spotlight.category}</span>
              )}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">{spotlight.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-4">{spotlight.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {spotlight.technologies.slice(0, 5).map((tech, i) => (
                  <span key={i} className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-white/5 border border-white/5 text-[10px] text-[#94A3B8] font-label">
                    {techIconMap[tech] || null} {tech}
                  </span>
                ))}
              </div>
              <ProjectLinks project={spotlight} />
            </div>
          </motion.div>
        )}

        {/* Remaining: Compact grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((project, index) => (
              <motion.div
                key={index}
                className="group rounded-sm border border-white/5 bg-[#16161E] hover:border-[#D4AF37]/20 transition-all duration-500 overflow-hidden"
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={optimizedViewport}
                transition={{duration: 0.3, delay: index * 0.05}}>
                
                <div className="h-[180px] sm:h-[200px] overflow-hidden">
                  <ProjectMedia project={project} />
                </div>
                
                <div className="p-4 sm:p-5">
                  {project.category && (
                    <span className="font-label text-[9px] tracking-[0.2em] uppercase text-[#2DD4BF] mb-2 block">{project.category}</span>
                  )}
                  <h3 className="font-display text-base font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-sm bg-white/5 text-[9px] text-[#94A3B8] font-label">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link to="/projects">
            <GlassButton variant="primary">View All Projects</GlassButton>
          </Link>
        </div>
      </motion.div>
    </div>
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
