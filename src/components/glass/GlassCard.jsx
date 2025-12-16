import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {cn} from '@/lib/utils';
import {glassVariants} from '@/lib/animations';

const glassVariantsMap = {
  default:
    'bg-white/10 dark:bg-black/20 backdrop-blur-xl backdrop-saturate-[var(--backdrop-saturate)]',
  heavy:
    'bg-white/15 dark:bg-black/30 backdrop-blur-3xl backdrop-saturate-[var(--backdrop-saturate)]',
  light:
    'bg-white/5 dark:bg-black/10 backdrop-blur-lg backdrop-saturate-[var(--backdrop-saturate)]',
};

const borderVariantsMap = {
  default: 'border border-gray-700/30 dark:border-white/10',
  glow: 'border border-blue-400/30 dark:border-blue-400/20 shadow-glow-blue',
  gradient: 'border-2 border-primary/20',
};

export const GlassCard = ({
  children,
  variant = 'default',
  border = 'default',
  hover = true,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'rounded-2xl relative',
        glassVariantsMap[variant],
        borderVariantsMap[border],
        'shadow-glass',
        hover &&
          'transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-glass-lg hover:-translate-y-1',
        className,
      )}
      initial={glassVariants.hidden}
      whileInView={glassVariants.visible}
      viewport={{once: true, margin: '-100px'}}
      {...props}>
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl shadow-glass-inner pointer-events-none" />
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
