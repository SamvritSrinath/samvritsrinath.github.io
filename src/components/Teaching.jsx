import {useState} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import Timeline from '@/components/features/Timeline';
import {GlassSection} from '@/components/glass/GlassSection';

const Teaching = ({teaching}) => {
  const [isTitleVisible, setTitleVisible] = useState(false);
  // Transform teaching data to match work experience format
  const transformedTeaching = teaching.map(item => ({
    company: item.company,
    logo: item.logo,
    roles: item.roles,
    technologies: item.technologies || [],
  }));

  return (
    <GlassSection className="max-w-6xl mx-auto my-8">
      <motion.div
        onViewportEnter={() => setTitleVisible(true)}
        viewport={{once: true, amount: 0.3}}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative">
          <span className="gradient-text-primary">Teaching Experience</span>
          <motion.div
            className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full"
            initial={{scaleX: 0}}
            animate={{scaleX: isTitleVisible ? 1 : 0}}
            transition={{duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275]}}
          />
        </h2>
      </motion.div>
      <Timeline experience={transformedTeaching} />
    </GlassSection>
  );
};

Teaching.propTypes = {
  teaching: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          description: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Teaching;
