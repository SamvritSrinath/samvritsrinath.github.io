import PropTypes from 'prop-types';
import {cn} from '@/lib/utils';

export const GlassSection = ({children, className, ...props}) => {
  return (
    <section
      className={cn(
        'py-16 px-4 sm:px-6 lg:px-8',
        'bg-[#16161E]/30',
        'rounded-none',
        'border border-white/5',
        className,
      )}
      {...props}>
      {children}
    </section>
  );
};

GlassSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
