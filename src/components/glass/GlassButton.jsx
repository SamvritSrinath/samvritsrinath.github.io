import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {cn} from '@/lib/utils';

export const GlassButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const variants = {
    primary: 'bg-[#D4AF37]/10 text-[#D4AF37]',
    secondary: 'bg-[#16161E] text-white/70 hover:text-white',
    ghost: 'bg-transparent text-[#888888] hover:text-[#D4AF37]',
  };

  return (
    <motion.button
      className={cn(
        'relative rounded-none overflow-hidden font-label uppercase tracking-[0.2em]',
        'border border-white/5',
        'transition-all duration-300 ease-out',
        'hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]',
        'hover:border-[#D4AF37]/30',
        'active:scale-[0.98]',
        'group',
        sizes[size],
        variants[variant],
        className,
      )}
      whileHover={{scale: 1.02, transition: {duration: 0.3, ease: 'easeOut'}}}
      whileTap={{scale: 0.98, transition: {duration: 0.1}}}
      {...props}>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="absolute inset-0 bg-[#D4AF37]/5" />
      </span>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

GlassButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
