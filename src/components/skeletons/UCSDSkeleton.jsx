import {GlassSection} from '@/components/glass/GlassSection';
import TimelineSkeleton from './TimelineSkeleton';

const UCSDSkeleton = () => {
  return (
    <GlassSection className="max-w-7xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <div className="mb-12 sm:mb-16">
        <div className="h-10 sm:h-12 md:h-16 bg-muted rounded-lg animate-pulse w-64 mx-auto mb-3 sm:mb-4" />
        <div className="h-6 sm:h-8 bg-muted rounded animate-pulse w-96 mx-auto mt-3 sm:mt-4" />
      </div>

      {/* Teaching Section Skeleton */}
      <div className="mb-12 sm:mb-16">
        <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-56 mb-6 sm:mb-8" />
        <TimelineSkeleton />
      </div>

      {/* Clubs Section Skeleton */}
      <div>
        <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-72 mb-6 sm:mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="bg-card/50 backdrop-blur-xl rounded-xl p-6 shadow-glass">
              <div className="w-16 h-16 bg-muted rounded-lg animate-pulse mx-auto mb-4" />
              <div className="h-6 bg-muted rounded animate-pulse w-3/4 mx-auto mb-2" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </GlassSection>
  );
};

export default UCSDSkeleton;

