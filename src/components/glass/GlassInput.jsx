import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {cn} from '@/lib/utils';

export const GlassInput = forwardRef(({className, ...props}, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex w-full rounded-xl',
        'bg-white/10 dark:bg-black/20',
        'backdrop-blur-xl backdrop-saturate-150',
        'border border-gray-700/30 dark:border-white/10',
        'px-4 py-3',
        'text-foreground placeholder:text-muted-foreground',
        'focus:outline-none focus:ring-2 focus:ring-primary/50',
        'focus:border-primary/50',
        'transition-all duration-300',
        className,
      )}
      {...props}
    />
  );
});
GlassInput.displayName = 'GlassInput';

GlassInput.propTypes = {
  className: PropTypes.string,
};


