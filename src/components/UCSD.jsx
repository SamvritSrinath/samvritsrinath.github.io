import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import Timeline from '@/components/features/Timeline';
import Clubs from '@/components/Clubs';
import {GlassSection} from '@/components/glass/GlassSection';
import {
  glassVariants,
  optimizedViewport,
} from '@/lib/animations';

const UCSD = ({teaching, clubs}) => {
  // Transform teaching data to match work experience format
  const transformedTeaching = teaching.map(item => ({
    company: item.company,
    logo: item.logo,
    roles: item.roles,
    technologies: item.technologies || [],
  }));

  return (
    <GlassSection className="max-w-7xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <motion.div
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={optimizedViewport}
        transition={{duration: 0.3}}
        className="mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gradient-text-primary text-center">
          @ UC San Diego
        </h2>
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-white-90 font-medium max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
          Teaching experience and student organizations at UC San Diego
        </p>
      </motion.div>

      {/* Teaching Section */}
      <motion.div
        className="mb-12 sm:mb-16"
        variants={glassVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 gradient-text-primary">
          Teaching Experience
        </h3>
        <Timeline experience={transformedTeaching} />
      </motion.div>

      {/* Clubs Section */}
      <motion.div
        variants={glassVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 gradient-text-primary">
          Student Organizations
        </h3>
        <Clubs clubs={clubs} />
      </motion.div>
    </GlassSection>
  );
};

UCSD.propTypes = {
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
  clubs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      logo: PropTypes.string,
      website: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UCSD;
