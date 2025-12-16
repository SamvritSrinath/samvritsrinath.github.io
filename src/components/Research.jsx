import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass/GlassCard';
import { glassVariants } from '@/lib/animations';

const Research = ({ research }) => {
  return (
    <motion.div
      className="space-y-8"
      variants={glassVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {research.map((item, index) => (
        <GlassCard key={index} variant="light" className="p-8">
          <h3 className="text-3xl font-bold mb-6">{item.institution}</h3>
          <div className="space-y-6">
            {item.roles.map((role, i) => (
              <div key={i} className="mt-6">
                <h4 className="text-xl font-semibold text-primary mb-2">{role.role}</h4>
                <p className="text-muted-foreground dark:text-white italic">
                  {role.duration}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </motion.div>
  );
};

Research.propTypes = {
  research: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Research;
