import { memo } from 'react';

export const OptimizedCosmicBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static gradient base - no animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--bg-primary))] to-[hsl(var(--bg-secondary))]" />
      
      {/* Nebula overlays - CSS only, no JS */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'var(--nebula-start)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'var(--nebula-mid)' }}
        />
      </div>
      
      {/* Minimal floating particles - CSS animation only */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${(i * 12.5)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
});

OptimizedCosmicBackground.displayName = 'OptimizedCosmicBackground';




