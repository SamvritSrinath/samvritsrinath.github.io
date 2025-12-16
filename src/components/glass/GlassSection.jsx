import {cn} from '@/lib/utils';

export const GlassSection = ({children, className, ...props}) => {
  return (
    <section
      className={cn(
        'py-16 px-4 sm:px-6 lg:px-8',
        'glass-morphism',
        'rounded-3xl',
        'border border-gray-700/30 dark:border-white/10',
        'shadow-glass-lg',
        'backdrop-saturate-[var(--backdrop-saturate)]',
        className,
      )}
      {...props}>
      {children}
    </section>
  );
};
