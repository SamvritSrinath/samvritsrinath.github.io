import {GlassSection} from '@/components/glass/GlassSection';

const HomeSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <GlassSection className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {/* Profile Image Skeleton */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-muted animate-pulse" />
          </div>

          {/* Text Content Skeleton */}
          <div className="max-w-2xl text-center md:text-left space-y-4">
            <div className="h-12 sm:h-16 md:h-20 bg-muted rounded-lg animate-pulse w-3/4 mx-auto md:mx-0" />
            <div className="h-8 sm:h-10 bg-muted rounded-lg animate-pulse w-1/2 mx-auto md:mx-0" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
              <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap pt-4">
              <div className="h-10 w-32 bg-muted rounded-lg animate-pulse" />
              <div className="h-10 w-32 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </GlassSection>
    </section>
  );
};

export default HomeSkeleton;

