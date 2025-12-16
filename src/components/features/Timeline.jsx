import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {techIconMap} from '@/utils/techIcons.jsx';
import {GlassCard} from '@/components/glass/GlassCard';
import {
  glassVariants,
  staggerContainer,
  optimizedViewport,
} from '@/lib/animations';
import {cn} from '@/lib/utils';

export const Timeline = ({experience}) => {
  return (
    <motion.div
      className="flex flex-col gap-12 my-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={optimizedViewport}>
      {experience.map((exp, index) => (
        <motion.div key={index} variants={glassVariants}>
          <GlassCard variant="default" hover className="p-8">
            {/* Company Header */}
            <div className="flex items-center gap-6 mb-8 pb-4 border-b-2 border-primary">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-15 h-15 rounded-xl object-cover border border-gray-700/30 dark:border-white/20 shadow-lg bg-white/10 dark:bg-white/10"
                />
              )}
              <h3 className="text-3xl font-bold text-foreground m-0">
                {exp.company}
              </h3>
            </div>

            {/* Roles Container */}
            <div className="flex flex-col gap-8">
              {exp.roles.map((role, i) => (
                <div
                  key={i}
                  className={cn(
                    'bg-white/5 dark:bg-black/10 rounded-xl p-6',
                    'border-l-4 border-primary',
                    'ml-4',
                  )}>
                  {/* Role Header */}
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <h4 className="text-xl font-semibold text-primary m-0">
                      {role.role}
                    </h4>
                    <span className="text-sm font-medium text-muted-foreground bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {role.duration}
                    </span>
                  </div>

                  {/* Description List */}
                  {role.description && role.description.length > 0 && (
                    <ul className="pl-5 mb-6 text-muted-foreground leading-relaxed list-disc">
                      {role.description.map((item, j) => (
                        <li key={j} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech List */}
                  <div className="flex flex-wrap gap-3">
                    {(role.technologies || exp.technologies || []).map(
                      (tech, j) => (
                        <div
                          key={j}
                          className={cn(
                            'flex items-center gap-2',
                            'bg-white/10 dark:bg-black/20',
                            'px-4 py-2 rounded-full text-sm',
                            'border border-primary',
                            'backdrop-blur-sm',
                          )}>
                          {techIconMap[tech] || <span></span>}
                          <span>{tech}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

Timeline.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      logo: PropTypes.string,
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          description: PropTypes.arrayOf(PropTypes.string),
          technologies: PropTypes.arrayOf(PropTypes.string),
        }),
      ).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Timeline;

