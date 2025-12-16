import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import Timeline from '@/components/features/Timeline';
import Clubs from '@/components/Clubs';
import {GlassSection} from '@/components/glass/GlassSection';
import {glassVariants, optimizedViewport} from '@/lib/animations';
import {cn} from '@/lib/utils';

const About = ({content, showEducationOnly, showClubsOnly}) => {
  const {education, workExperience, clubs} = content;

  if (showEducationOnly) {
    return (
      <GlassSection className="max-w-4xl mx-auto my-8">
        <motion.div
          variants={glassVariants}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}>
          <h2 className="text-4xl font-bold gradient-text-primary mb-8 pb-2 border-b-2 border-primary inline-block">
            Education
          </h2>
          <div className="bg-card/50 backdrop-blur-xl rounded-xl p-8 shadow-glass">
            <h3 className="text-3xl font-bold mb-2">{education.university}</h3>
            <p className="text-xl italic text-muted-foreground mb-2">
              {education.degree}
            </p>
            <p className="font-medium mb-2">{education.duration}</p>
            <p className="mb-6">{education.details}</p>
            <h4 className="text-xl font-semibold mb-4">Relevant Coursework:</h4>
            <ul className="flex flex-wrap gap-2 list-none p-0">
              {education.courses.map((course, index) => (
                <li
                  key={index}
                  className="bg-background/50 px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </GlassSection>
    );
  }

  if (showClubsOnly) {
    return (
      <GlassSection className="max-w-4xl mx-auto my-8">
        <motion.div
          variants={glassVariants}
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}>
          <h2 className="text-4xl font-bold gradient-text-primary mb-8 pb-2 border-b-2 border-primary inline-block">
            Clubs
          </h2>
          <Clubs clubs={clubs} />
        </motion.div>
      </GlassSection>
    );
  }

  return (
    <GlassSection className="max-w-6xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <motion.div
        variants={glassVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text-primary mb-6 sm:mb-8 pb-2 border-b-2 border-primary inline-block">
          Experience
        </h2>
        <Timeline experience={workExperience || []} />
      </motion.div>
    </GlassSection>
  );
};

About.propTypes = {
  content: PropTypes.shape({
    education: PropTypes.shape({
      university: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    workExperience: PropTypes.array,
    research: PropTypes.array,
    clubs: PropTypes.array,
  }).isRequired,
  showEducationOnly: PropTypes.bool,
  showClubsOnly: PropTypes.bool,
};

export default About;
