import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/GlassCard';
import { staggerContainer, glassVariants } from '@/lib/animations';

const Clubs = ({ clubs }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {clubs.map((club, index) => (
        <motion.div key={index} variants={glassVariants}>
          <GlassCard hover className="p-6 text-center">
            <a
              href={club.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline text-inherit"
              title={`Visit ${club.name} website`}
            >
              {club.logo && (
                <img
                  src={club.logo}
                  alt={`${club.name} logo`}
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                />
              )}
              <h3 className="text-xl font-semibold text-primary mb-2">{club.name}</h3>
              <p className="text-muted-foreground">{club.role}</p>
            </a>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

Clubs.propTypes = {
  clubs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      logo: PropTypes.string,
      website: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Clubs;
