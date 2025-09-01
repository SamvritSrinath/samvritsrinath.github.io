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

const AllProjectsContainer = styled.div`
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

const Project = styled(motion.div)`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  gap: 3rem;
  margin-bottom: 5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({theme}) => theme.accent} 50%,
    transparent 100%
  );
  margin: 3rem 0;
  opacity: 0.6;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${({theme}) => theme.accent};
    border-radius: 50%;
    box-shadow: 0 0 10px ${({theme}) => theme.accent};
  }
`;

const ProjectImageContainer = styled.div`
  width: 50%;
  height: 450px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({theme}) => theme.accent};
    background: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: translateY(-50%) scale(1.1);
    }

    &::after {
      font-size: 16px;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
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

const ProjectInfo = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: ${({theme}) => theme.accent};
`;

const ProjectDescription = styled.p`
  color: ${({theme}) => theme.subtext};
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
  background: ${({theme}) => theme.cardBg};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ProjectLink = styled.a`
  color: ${({theme}) => theme.accent};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const AllProjects = ({content}) => {
  const renderProject = (project, index) => (
    <Project
      key={index}
      direction={index % 2 === 0 ? 'row' : 'row-reverse'}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}>
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
              {project.images.map((image, i) => (
                <CenteredSwiperSlide key={i}>
                  <ProjectImage
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
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
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TechList>
          {project.technologies.map((tech, i) => (
            <TechItem key={i}>
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
      </ProjectInfo>
    </Project>
  );

  return (
    <AllProjectsContainer>
      <SectionTitle>Project Archive</SectionTitle>
      {content.map((project, index) => (
        <div key={index}>
          {renderProject(project, index)}
          {index < content.length - 1 && <ProjectDivider />}
        </div>
      ))}
    </AllProjectsContainer>
  );
};

AllProjects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
      featured: PropTypes.bool,
    }),
  ).isRequired,
};

export default AllProjects;
