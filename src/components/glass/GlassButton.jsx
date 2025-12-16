import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';

export const GlassButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-primary/20',
    secondary: 'bg-white/10 dark:bg-white/5',
    ghost: 'bg-transparent',
  };

  return (
    <motion.button
      className={cn(
        'relative rounded-xl overflow-hidden',
        'backdrop-blur-xl backdrop-saturate-[var(--backdrop-saturate)]',
        'border border-gray-700/30 dark:border-white/10',
        'shadow-lg shadow-blue-500/10',
        // Slower, smoother transitions
        'transition-all duration-500 ease-out',
        'hover:shadow-xl hover:shadow-blue-500/20',
        'hover:border-blue-400/40',
        'active:scale-[0.98]',
        'group',
        sizes[size],
        variants[variant],
        className,
      )}
      // Subtle scale on hover
      whileHover={{scale: 1.02, transition: {duration: 0.4, ease: 'easeOut'}}}
      whileTap={{scale: 0.98, transition: {duration: 0.1}}}
      {...props}>
      {/* Solid overlay on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
        <span className="absolute inset-0 bg-primary/10" />
      </span>

      {/* Soft glow effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-blue-400/20 -z-10" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
