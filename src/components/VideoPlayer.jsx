import { lazy, Suspense } from 'react';
import { cn } from '@/lib/utils';

const ReactPlayer = lazy(() => import('react-player'));

const VideoPlayer = ({ url, className, ...props }) => {
  if (!url) return null;

  return (
    <div className={cn('relative w-full aspect-video rounded-lg overflow-hidden', className)}>
      <Suspense
        fallback={
          <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
            <p className="text-muted-foreground">Loading video...</p>
          </div>
        }
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          playing={false}
          {...props}
        />
      </Suspense>
    </div>
  );
};

export default VideoPlayer;




