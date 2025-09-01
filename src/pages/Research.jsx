import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {techIconMap} from '../utils/techIcons.jsx';

const CenteredSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResearchContainer = styled.div`
  padding: 2rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: center;
`;

const ResearchRole = styled(motion.div)`
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const RoleTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 1rem;
`;

const RoleDescription = styled.p`
  color: ${({theme}) => theme.subtext};
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const ProjectTitle = styled.h4`
  font-size: 1.4rem;
  color: ${({theme}) => theme.text};
  margin-bottom: 1rem;
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({theme}) => theme.accent};
    background: rgba(0, 0, 0, 0.3);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: translateY(-50%) scale(1.1);
    }

    &::after {
      font-size: 12px;
      font-weight: bold;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${({theme}) => theme.accent};
  }

  .swiper-slide {
    transition: opacity 0.3s ease-in-out;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 0;
  }
`;

const ProjectImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const ProjectDescription = styled.p`
  color: ${({theme}) => theme.subtext};
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ProjectLink = styled.a`
  color: ${({theme}) => theme.accent};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  align-items: center;
`;

const TechItem = styled.li`
  background: ${({theme}) => theme.body};
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({theme}) => theme.accent};
  white-space: nowrap;
  flex-shrink: 0;
`;

const Research = ({content, projects}) => {
  const renderResearchRole = (research, index) => {
    // Find projects for Cloud Networking Researcher
    const researchProjects =
      research.role === 'Cloud Networking Researcher'
        ? projects.filter(p => research.projects.includes(p.title))
        : [];

    return (
      <ResearchRole
        key={index}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}>
        <RoleTitle>{research.role}</RoleTitle>
        <RoleDescription>{research.description}</RoleDescription>

        {researchProjects.length > 0 && (
          <ProjectsGrid>
            {researchProjects.map((project, i) => (
              <ProjectCard
                key={i}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.1 * i}}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectImageContainer>
                  {project.images && project.images.length > 0 ? (
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
                        initialSlide={0}>
                        {project.images.map((image, j) => (
                          <CenteredSwiperSlide key={j}>
                            <ProjectImage
                              src={image}
                              alt={`${project.title} screenshot ${j + 1}`}
                            />
                          </CenteredSwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <ProjectImage
                        src={project.images[0]}
                        alt={`${project.title} screenshot`}
                      />
                    )
                  ) : (
                    <ProjectImage
                      src="https://placehold.co/600x400/1E1E1E/FFFFFF?text=No+Image"
                      alt="Placeholder"
                    />
                  )}
                </ProjectImageContainer>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech, j) => (
                    <TechItem key={j}>
                      {techIconMap[tech] || <span></span>}
                      <span>{tech}</span>
                    </TechItem>
                  ))}
                </TechList>
                <ProjectLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub color="#333" /> View on GitHub
                </ProjectLink>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        )}

        <TechList>
          {research.technologies.map((tech, i) => (
            <TechItem key={i}>
              {techIconMap[tech] || <span></span>}
              <span>{tech}</span>
            </TechItem>
          ))}
        </TechList>
      </ResearchRole>
    );
  };

  return (
    <ResearchContainer>
      <SectionTitle>Research</SectionTitle>
      {content.map(renderResearchRole)}
    </ResearchContainer>
  );
};

Research.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      projects: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Research;
