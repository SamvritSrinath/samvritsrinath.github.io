import {memo} from 'react';

export const WaveBackground = memo(() => {
  return (
    <div className="wave-bg-container">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
});

WaveBackground.displayName = 'WaveBackground';


