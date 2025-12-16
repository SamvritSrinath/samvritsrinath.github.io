import PropTypes from 'prop-types';
import {FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import {FileText} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {techIconMap} from '@/utils/techIcons.jsx';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassCard} from '@/components/glass/GlassCard';
import {glassVariants, staggerContainer} from '@/lib/animations';
import {cn} from '@/lib/utils';

const Research = ({content, projects}) => {
  const renderResearchRole = (research, index) => {
    const researchProjects = projects.filter(p =>
      (research.projects || []).includes(p.title),
    );

    return (
      <motion.div
        key={index}
        className="mb-16"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}>
        <GlassCard variant="light" className="p-8">
          <h3 className="text-3xl font-bold text-primary mb-4">
            {research.role}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {research.description}
          </p>

          {researchProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.1 * i}}>
                  <GlassCard variant="light" className="p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {project.title}
                    </h4>
                    <div className="w-full h-64 rounded-lg shadow-glass overflow-hidden relative flex items-center justify-center mb-4 bg-black/20">
                      {project.images && project.images.length > 0 ? (
                        project.images.length > 1 ? (
                          <Swiper
                            key={project.title}
                            modules={[
                              Navigation,
                              Pagination,
                              Autoplay,
                              EffectFade,
                            ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            effect="fade"
                            fadeEffect={{crossFade: true}}
                            navigation
                            pagination={{clickable: true}}
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                            allowTouchMove={true}
                            watchSlidesProgress={true}
                            watchOverflow={true}
                            loop={true}
                            initialSlide={0}
                            className="w-full h-full [&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:text-primary [&_.swiper-button-next]:bg-black/30 [&_.swiper-button-prev]:bg-black/30 [&_.swiper-button-next]:w-8 [&_.swiper-button-prev]:w-8 [&_.swiper-button-next]:h-8 [&_.swiper-button-prev]:h-8 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next]:hover:bg-black/50 [&_.swiper-button-prev]:hover:bg-black/50 [&_.swiper-pagination-bullet-active]:bg-primary">
                            {project.images.map((image, j) => (
                              <SwiperSlide
                                key={j}
                                className="flex justify-center items-center">
                                <img
                                  src={image}
                                  alt={`${project.title} screenshot ${j + 1}`}
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
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mb-4 list-none p-0">
                      {project.technologies.map((tech, j) => (
                        <li
                          key={j}
                          className={cn(
                            'flex items-center gap-2',
                            'bg-background/50 backdrop-blur-sm',
                            'px-3 py-1 rounded-lg text-xs',
                            'border border-primary',
                            'whitespace-nowrap',
                          )}>
                          {techIconMap[tech] || <span></span>}
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold flex items-center gap-2 text-sm hover:underline transition-all">
                          {project.link.includes('github.com') ? (
                            <>
                              <FaGithub /> View on GitHub
                            </>
                          ) : project.link.includes('vercel.app') || project.link.includes('http') ? (
                            'View Live Site'
                          ) : project.category === 'Research' ? (
                            'Link to Paper'
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
                          className="text-primary font-semibold flex items-center gap-2 text-sm hover:underline transition-all">
                          <FileText className="w-4 h-4" />
                          {project.paper.includes('arxiv.org') ? 'View on Arxiv' : 'View Paper'}
                        </a>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </GlassCard>
      </motion.div>
    );
  };

  return (
    <GlassSection className="max-w-7xl mx-auto my-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}>
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-foreground"
          variants={glassVariants}>
          Research
        </motion.h2>
        {content.map(renderResearchRole)}
      </motion.div>
    </GlassSection>
  );
};

Research.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      projects: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
      paper: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default Research;
