import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {cn} from '@/lib/utils';
import {glassVariants} from '@/lib/animations';

const borderVariantsMap = {
  default: 'border border-white/5',
  glow: 'border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]',
  gradient: 'border border-[#D4AF37]/30',
};

export const GlassCard = ({
  children,
  // variant = 'default',
  border = 'default',
  hover = true,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'rounded-none relative bg-[#16161E]',
        borderVariantsMap[border],
        hover &&
          'transition-all duration-300 hover:bg-[#0D0D11] hover:border-[#D4AF37]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-1',
        className,
      )}
      initial={glassVariants.hidden}
      whileInView={glassVariants.visible}
      viewport={{once: true, margin: '-100px'}}
      {...props}>
      {children}
    </motion.div>
  );
};

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'heavy', 'light']),
  border: PropTypes.oneOf(['default', 'glow', 'gradient']),
  hover: PropTypes.bool,
  className: PropTypes.string,
};
