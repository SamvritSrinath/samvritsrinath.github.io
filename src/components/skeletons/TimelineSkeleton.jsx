import {GlassSection} from '@/components/glass/GlassSection';
import {GlassCard} from '@/components/glass/GlassCard';

const TimelineSkeleton = () => {
  return (
    <GlassSection className="max-w-6xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <div className="mb-12 sm:mb-16">
        <div className="h-10 sm:h-12 bg-muted rounded-lg animate-pulse w-48 mb-6 sm:mb-8" />
        <div className="flex flex-col gap-12">
          {[1, 2].map(i => (
            <GlassCard key={i} variant="default" className="p-8">
              {/* Company Header Skeleton */}
              <div className="flex items-center gap-6 mb-8 pb-4 border-b-2 border-primary">
                <div className="w-15 h-15 rounded-xl bg-muted animate-pulse" />
                <div className="h-8 bg-muted rounded-lg animate-pulse w-48" />
              </div>

              {/* Roles Skeleton */}
              <div className="flex flex-col gap-8">
                {[1, 2].map(j => (
                  <div
                    key={j}
                    className="bg-white/5 dark:bg-black/10 rounded-xl p-6 border-l-4 border-primary ml-4">
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                      <div className="h-6 bg-muted rounded animate-pulse w-48" />
                      <div className="h-5 bg-muted rounded-full animate-pulse w-32" />
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3].map(k => (
                        <div
                          key={k}
                          className="h-8 bg-muted rounded-full animate-pulse w-24"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </GlassSection>
  );
};

export default TimelineSkeleton;

