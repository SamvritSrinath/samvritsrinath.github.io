import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {Typewriter} from 'react-simple-typewriter';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassButton} from '@/components/glass/GlassButton';
import {glassVariants, staggerContainer} from '@/lib/animations';
import {Link} from 'react-scroll';
import {cn} from '@/lib/utils';

const Home = ({content}) => {
  const {name, bio} = content;

  return (
    <section className="min-h-screen flex items-center justify-center relative py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <GlassSection className="max-w-6xl mx-auto w-full">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.5, ease: 'easeOut'}}>
            <img
              src="/assets/profile/profile.png"
              alt="Samvrit Srinath"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/20"
            />
          </motion.div>

          {/* Text Content */}
          <div className="max-w-2xl text-center md:text-left">
            <motion.h1
              className={cn(
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4',
                'gradient-text-primary',
              )}
              variants={glassVariants}>
              {name}
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-normal text-primary mb-4 sm:mb-6 font-mono h-8 sm:h-10"
              variants={glassVariants}>
              <Typewriter
                words={[
                  'Software Engineer',
                  'Student',
                  'Researcher',
                  'Instructor',
                  'Leader',
                  'Problem Solver',
                ]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
              />
              <span>&nbsp;</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
              variants={glassVariants}>
              {bio}
            </motion.p>

            <motion.div
              className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap"
              variants={glassVariants}>
              <Link
                to="featured-works"
                smooth={true}
                offset={-70}
                duration={500}>
                <GlassButton variant="primary">View Projects</GlassButton>
              </Link>
              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <GlassButton variant="secondary">Contact Me</GlassButton>
              </Link>
            </motion.div>

            {/* Summary Stats */}
            <motion.div
              className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 justify-center md:justify-start"
              variants={glassVariants}>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  3
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Internships
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  5+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Projects
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </GlassSection>
    </section>
  );
};

Home.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
