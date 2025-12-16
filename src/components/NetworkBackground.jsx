import PropTypes from 'prop-types';
import {useRef, useEffect} from 'react';

const NetworkBackground = ({theme}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Theme-aware colors - use theme if provided, otherwise detect theme
    const isDark =
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      document.documentElement.getAttribute('data-theme') === 'dark';

    // Convert hex to rgba with opacity for subtle effect
    const hexToRgba = (hex, opacity) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const baseTextColor = theme?.text || (isDark ? '#FAFAFA' : '#1a1a1a');
    const baseAccentColor = theme?.accent || '#3498db';
    const particleColor = baseTextColor.startsWith('#')
      ? hexToRgba(baseTextColor, isDark ? 0.4 : 0.3)
      : baseTextColor;
    const lineColor = baseAccentColor.startsWith('#')
      ? hexToRgba(baseAccentColor, isDark ? 0.5 : 0.4)
      : baseAccentColor;

    let particles = [];
    const numParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y,
          );
          if (dist < 100) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.3;
      ctx.stroke();
    };

    const update = () => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[hsl(var(--bg-primary))]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

NetworkBackground.propTypes = {
  theme: PropTypes.object,
};

export default NetworkBackground;
