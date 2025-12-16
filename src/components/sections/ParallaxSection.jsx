import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

export const ParallaxSection = ({ children, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  
  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative">
      {children}
    </motion.div>
  );
};

ParallaxSection.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
};




