import {GlassCard} from '@/components/glass/GlassCard';

const PublishedResearchSkeleton = () => {
  return (
    <section
      id="research"
      className="py-16 sm:py-24 md:py-32 relative min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header Skeleton */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="h-10 sm:h-12 md:h-16 bg-muted rounded-lg animate-pulse w-80 mx-auto mb-4 sm:mb-6" />
          <div className="h-6 bg-muted rounded animate-pulse w-96 mx-auto" />
        </div>

        {/* Publications Skeleton */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 md:mb-20">
          {[1, 2].map(index => (
            <GlassCard key={index} className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                <div className="flex-1 space-y-4">
                  <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-3/4" />
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                    <div className="h-5 bg-muted rounded animate-pulse w-64" />
                    <div className="h-5 bg-muted rounded animate-pulse w-24" />
                    <div className="h-5 bg-muted rounded animate-pulse w-48" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(i => (
                      <div
                        key={i}
                        className="h-6 bg-muted rounded-full animate-pulse w-20"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-row lg:flex-col gap-3 lg:justify-start">
                  <div className="h-10 bg-muted rounded-xl animate-pulse w-40" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Research Projects Skeleton */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-64 mb-6 sm:mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[1, 2].map(index => (
              <GlassCard key={index} className="p-4 sm:p-6 h-full">
                <div className="h-6 sm:h-8 bg-muted rounded animate-pulse w-3/4 mb-2 sm:mb-3" />
                <div className="space-y-2 mb-3 sm:mb-4">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="h-6 bg-muted rounded-md animate-pulse w-20"
                    />
                  ))}
                </div>
                <div className="h-4 bg-muted rounded animate-pulse w-24" />
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishedResearchSkeleton;

