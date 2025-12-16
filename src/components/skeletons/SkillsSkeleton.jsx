import {GlassSection} from '@/components/glass/GlassSection';
import {GlassCard} from '@/components/glass/GlassCard';

const SkillsSkeleton = () => {
  return (
    <GlassSection className="max-w-5xl mx-auto my-6 sm:my-8 px-4 sm:px-6">
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="h-10 sm:h-12 md:h-16 bg-muted rounded-lg animate-pulse w-80 mx-auto" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {Array.from({length: 15}).map((_, index) => (
          <GlassCard
            key={index}
            className="p-6 flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded animate-pulse w-16" />
          </GlassCard>
        ))}
      </div>
    </GlassSection>
  );
};

export default SkillsSkeleton;

