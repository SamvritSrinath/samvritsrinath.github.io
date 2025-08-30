import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.cardBg};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const ProjectDescription = styled.p`
  flex-grow: 1;
  color: ${({ theme }) => theme.subtext};
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechItem = styled.li`
  background: ${({ theme }) => theme.cardBg};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = ({ content }) => {
  return (
    <ProjectsContainer>
      <SectionTitle>My Work</SectionTitle>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {content.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard>
              <ProjectImage src={project.image} alt={`${project.title} screenshot`} />
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </TechList>
                <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View on GitHub
                </ProjectLink>
              </CardContent>
            </ProjectCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;