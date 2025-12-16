import {GlassSection} from '@/components/glass/GlassSection';

const ProjectsSkeleton = () => {
  return (
    <GlassSection className="max-w-7xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <div className="mb-10 sm:mb-12 md:mb-16">
        <div className="h-10 sm:h-12 md:h-16 bg-muted rounded-lg animate-pulse w-64 mx-auto" />
      </div>
      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {[1, 2, 3, 4].map(index => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
            {/* Image Container Skeleton */}
            <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl bg-muted animate-pulse" />

            {/* Project Info Skeleton */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="h-8 bg-muted rounded-lg animate-pulse w-24"
                  />
                ))}
              </div>
              <div className="h-6 bg-muted rounded animate-pulse w-32" />
            </div>
          </div>
        ))}
      </div>
    </GlassSection>
  );
};

export default ProjectsSkeleton;

