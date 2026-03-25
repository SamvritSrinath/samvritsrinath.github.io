import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {Typewriter} from 'react-simple-typewriter';
import {GlassButton} from '@/components/glass/GlassButton';
import {glassVariants, staggerContainer} from '@/lib/animations';
import {Link} from 'react-scroll';

const Home = ({content}) => {
  const {name, bio} = content;

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative py-10 px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible">
          
          {/* Left: Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1 relative z-10 py-8">
            <motion.p
              className="font-label text-xs tracking-[0.3em] text-[#2DD4BF] uppercase mb-6"
              variants={glassVariants}>
              SOFTWARE ENGINEER · RESEARCHER · STUDENT
            </motion.p>
            
            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-bold text-white mb-4 tracking-tight"
              variants={glassVariants}>
              {name}
            </motion.h1>

            <motion.div
              className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#2DD4BF] mb-6"
              variants={glassVariants}
            />

            <motion.h2
              className="font-label text-sm sm:text-base text-[#D4AF37] tracking-[0.15em] uppercase mb-8 h-8"
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
              className="font-body text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-lg mb-8"
              variants={glassVariants}>
              {bio}
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap"
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

            {/* Stats Row */}
            <motion.div
              className="flex gap-8 mt-8 pt-6 border-t border-white/5"
              variants={glassVariants}>
              <div>
                <p className="text-3xl font-bold text-white font-display">3</p>
                <p className="text-xs text-[#94A3B8] font-label tracking-wider uppercase mt-1">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-display">10+</p>
                <p className="text-xs text-[#94A3B8] font-label tracking-wider uppercase mt-1">Projects</p>
              </div>

            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{opacity: 0, x: 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, ease: 'easeOut', delay: 0.2}}>
            
            <div className="relative">
              {/* Accent border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#D4AF37]/40 via-[#2DD4BF]/20 to-[#F472B6]/20 rounded-sm blur-[1px]" />
              
              <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[460px] rounded-sm overflow-hidden border border-white/10 bg-[#111118]">
                <img
                  src="/assets/profile/profile.png"
                  alt={name}
                  className="w-full h-full object-cover"
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/60" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#2DD4BF]/60" />
            </div>
          </motion.div>
        </motion.div>
      </div>
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
