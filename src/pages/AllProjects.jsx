import PropTypes from 'prop-types';
import {FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import {useEffect} from 'react';
import {FileText} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {techIconMap} from '@/utils/techIcons.jsx';
import VideoPlayer from '@/components/VideoPlayer';
import {GlassSection} from '@/components/glass/GlassSection';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';
import {cn} from '@/lib/utils';

const AllProjects = ({content}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderProject = (project, index) => (
    <div key={index}>
      <motion.div
        className={cn(
          'flex flex-col md:flex-row gap-12 mb-20 items-center',
          index % 2 === 1 && 'md:flex-row-reverse',
        )}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={optimizedViewport}
        transition={{duration: 0.3}}>
        {/* Image/Video Container */}
        <div className="w-full md:w-1/2 h-[450px] rounded-xl shadow-glass overflow-hidden relative flex items-center justify-center bg-black/20">
          {project.video ? (
            <VideoPlayer url={project.video} className="w-full h-full" />
          ) : project.images && project.images.length > 0 ? (
            project.images.length > 1 ? (
              <Swiper
                key={project.title}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{crossFade: true}}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                allowTouchMove={true}
                watchSlidesProgress={true}
                watchOverflow={true}
                loop={true}
                initialSlide={0}
                className="w-full h-full [&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:text-primary [&_.swiper-button-next]:bg-black/30 [&_.swiper-button-prev]:bg-black/30 [&_.swiper-button-next]:w-10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next]:hover:bg-black/50 [&_.swiper-button-prev]:hover:bg-black/50 [&_.swiper-pagination-bullet-active]:bg-primary">
                {project.images.map((image, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center items-center">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="max-w-full max-h-full w-auto h-auto object-contain bg-black/10 backdrop-blur-sm"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                className="max-w-full max-h-full w-auto h-auto object-contain bg-black/10 backdrop-blur-sm"
              />
            )
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
          <h3 className="text-3xl font-bold text-primary mb-4">
            {project.title}
          </h3>
          <p className="text-muted-foreground dark:text-white mb-6 leading-relaxed">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2 mb-6 list-none p-0">
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
      {index < content.length - 1 && (
        <div className="w-full h-px bg-primary/60 my-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-glow-cyan" />
        </div>
      )}
    </div>
  );

  return (
    <GlassSection className="max-w-7xl mx-auto my-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}>
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-foreground"
          variants={glassVariants}>
          Project Archive
        </motion.h2>
        {content.map((project, index) => renderProject(project, index))}
      </motion.div>
    </GlassSection>
  );
};

AllProjects.propTypes = {
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

export default AllProjects;
