import { memo, useEffect, useRef, useState, useCallback } from 'react';

/*
 * A massive scrollable astronomy canvas.
 * The SVG is ~7500px tall and scrolls 1:1 with the page,
 * revealing dense stencil art (constellations, orreries,
 * astrolabes, planets, etc.) as the user scrolls naturally.
 * Nebula gradient glows are kept fixed for atmospheric warmth.
 */
export const OptimizedCosmicBackground = memo(() => {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#111118] overflow-hidden pointer-events-none">

      {/* ── Grid texture ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ── Orbit + spin keyframes ── */}
      <style>{`
        @keyframes orb45  { to { transform: rotate(360deg); } }
        @keyframes orb90  { to { transform: rotate(360deg); } }
        @keyframes orb180 { to { transform: rotate(360deg); } }
        @keyframes orb300 { to { transform: rotate(-360deg); } }
        @keyframes astro  { to { transform: rotate(360deg); } }
        .orb45  { animation: orb45  45s linear infinite; transform-origin: center; }
        .orb90  { animation: orb90  90s linear infinite; transform-origin: center; }
        .orb180 { animation: orb180 180s linear infinite; transform-origin: center; }
        .orb300 { animation: orb300 300s linear infinite; transform-origin: center; }
        .astro-spin { animation: astro 200s linear infinite; transform-origin: center; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════
           MASSIVE SCROLLABLE CANVAS — moves 1:1 with page scroll
           ══════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 right-0 will-change-transform"
        style={{ transform: `translateY(${-scrollY}px)` }}
      >
        <svg
          width="100%"
          height="7500"
          viewBox="0 0 1500 7500"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          {/* ================================================================
              ZONE 1: 0–1000px  (Hero area)
              ================================================================ */}

          {/* ── Cassiopeia constellation ── */}
          <g stroke="rgba(212,175,55,0.55)" strokeWidth="0.6" fill="none" opacity="0.5">
            <polyline points="100,80 170,150 290,110 370,190 440,155" />
            <circle cx="100" cy="80" r="3" fill="#D4AF37" opacity="0.9" />
            <circle cx="170" cy="150" r="2" fill="#D4AF37" opacity="0.7" />
            <circle cx="290" cy="110" r="3.5" fill="#D4AF37" opacity="1" />
            <circle cx="370" cy="190" r="2.5" fill="#D4AF37" opacity="0.6" />
            <circle cx="440" cy="155" r="2" fill="#D4AF37" opacity="0.8" />
          </g>

          {/* ── Main Orrery / Solar System (right side, ~200-600) ── */}
          <g transform="translate(1100, 380)" opacity="0.12">
            <circle cx="0" cy="0" r="10" fill="#D4AF37" opacity="0.9" />
            <circle cx="0" cy="0" r="15" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.4" />
            {/* Orbit 1 */}
            <circle cx="0" cy="0" r="55" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
            <g className="orb45">
              <circle cx="55" cy="0" r="5" fill="#2DD4BF" opacity="0.85" />
            </g>
            {/* Orbit 2 */}
            <circle cx="0" cy="0" r="100" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" fill="none" strokeDasharray="4 7" />
            <g className="orb90">
              <circle cx="0" cy="-100" r="7" fill="#D4AF37" opacity="0.75" />
              <circle cx="13" cy="-100" r="2" fill="rgba(255,255,255,0.55)" />
            </g>
            {/* Orbit 3 — ringed planet */}
            <circle cx="0" cy="0" r="155" stroke="rgba(212,175,55,0.18)" strokeWidth="0.5" fill="none" strokeDasharray="5 10" />
            <g className="orb180">
              <circle cx="-155" cy="0" r="8" fill="none" stroke="#F472B6" strokeWidth="1.2" opacity="0.85" />
              <ellipse cx="-155" cy="0" rx="16" ry="4.5" stroke="#F472B6" strokeWidth="0.6" fill="none" opacity="0.65" />
            </g>
            {/* Orbit 4 — outer */}
            <circle cx="0" cy="0" r="210" stroke="rgba(45,212,191,0.1)" strokeWidth="0.4" fill="none" strokeDasharray="3 14" />
            <g className="orb300">
              <circle cx="210" cy="0" r="4" fill="rgba(45,212,191,0.7)" />
            </g>
          </g>

          {/* ── Crescent Moon (left, ~450) ── */}
          <g transform="translate(75, 480)" opacity="0.09" fill="none">
            <circle cx="0" cy="0" r="42" stroke="#2DD4BF" strokeWidth="1.4" />
            <circle cx="17" cy="-7" r="36" fill="#111118" stroke="none" />
            <path d="M-6,-41 A42,42 0 1,0 -6,41 A34,34 0 0,1 -6,-41"
              stroke="#2DD4BF" strokeWidth="1.1" fill="rgba(45,212,191,0.04)" />
            <circle cx="-22" cy="7" r="5" stroke="#2DD4BF" strokeWidth="0.4" opacity="0.5" />
            <circle cx="-13" cy="-18" r="3" stroke="#2DD4BF" strokeWidth="0.4" opacity="0.4" />
            <circle cx="-28" cy="-5" r="2" stroke="#2DD4BF" strokeWidth="0.3" opacity="0.3" />
          </g>

          {/* ── Scattered stars zone 1 ── */}
          <circle cx="560" cy="50" r="1.3" fill="rgba(255,255,255,0.3)" />
          <circle cx="800" cy="120" r="1" fill="rgba(212,175,55,0.35)" />
          <circle cx="680" cy="300" r="1.5" fill="rgba(45,212,191,0.25)" />
          <circle cx="200" cy="350" r="1" fill="rgba(255,255,255,0.2)" />
          <circle cx="500" cy="500" r="1.2" fill="rgba(244,114,182,0.22)" />
          <circle cx="950" cy="650" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="1350" cy="200" r="1.3" fill="rgba(45,212,191,0.2)" />
          <circle cx="400" cy="750" r="1" fill="rgba(212,175,55,0.2)" />
          <circle cx="1200" cy="800" r="1.5" fill="rgba(255,255,255,0.15)" />

          {/* ================================================================
              ZONE 2: 1000–2200px  (Experience section)
              ================================================================ */}

          {/* ── Orion constellation ── */}
          <g stroke="rgba(45,212,191,0.5)" strokeWidth="0.6" fill="none" opacity="0.45">
            {/* Belt */}
            <polyline points="900,1100 950,1080 1000,1100" />
            {/* Shoulders + knees */}
            <line x1="870" y1="1020" x2="900" y2="1100" />
            <line x1="1030" y1="1020" x2="1000" y2="1100" />
            <line x1="900" y1="1100" x2="880" y2="1200" />
            <line x1="1000" y1="1100" x2="1030" y2="1200" />
            {/* Head */}
            <line x1="950" y1="1080" x2="950" y2="1000" />
            <circle cx="870" cy="1020" r="3" fill="#2DD4BF" opacity="0.9" />
            <circle cx="1030" cy="1020" r="3.5" fill="#2DD4BF" opacity="1" />
            <circle cx="900" cy="1100" r="2" fill="#2DD4BF" opacity="0.7" />
            <circle cx="950" cy="1080" r="2.5" fill="#2DD4BF" opacity="0.8" />
            <circle cx="1000" cy="1100" r="2" fill="#2DD4BF" opacity="0.7" />
            <circle cx="880" cy="1200" r="2.5" fill="#2DD4BF" opacity="0.6" />
            <circle cx="1030" cy="1200" r="2.5" fill="#2DD4BF" opacity="0.6" />
            <circle cx="950" cy="1000" r="2" fill="#2DD4BF" opacity="0.5" />
            {/* Sword nebula hint */}
            <line x1="940" y1="1105" x2="940" y2="1150" strokeWidth="0.4" stroke="rgba(244,114,182,0.3)" />
          </g>

          {/* ── Ringed Planet / Saturn (left, ~1300) ── */}
          <g transform="translate(160, 1350)" opacity="0.09" fill="none">
            <circle cx="0" cy="0" r="58" stroke="#D4AF37" strokeWidth="1.6" />
            <path d="M-38,-14 Q0,-30 38,-14" stroke="#D4AF37" strokeWidth="0.9" />
            <path d="M-42,11 Q0,26 42,11" stroke="#D4AF37" strokeWidth="0.7" />
            <ellipse cx="0" cy="0" rx="105" ry="26" stroke="#D4AF37" strokeWidth="1.3" />
            <ellipse cx="0" cy="0" rx="122" ry="32" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="6 5" />
          </g>

          {/* ── Geometric Star Chart (right, ~1200) ── */}
          <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.9" fill="none" transform="translate(1150, 1250)">
            <path d="M0,0 L80,-80 L160,0 L80,80 Z" />
            <circle cx="80" cy="0" r="52" stroke="rgba(244,114,182,0.12)" />
            <line x1="-40" y1="0" x2="200" y2="0" strokeDasharray="3 8" />
            <line x1="80" y1="-120" x2="80" y2="120" strokeDasharray="3 8" />
            <line x1="20" y1="-60" x2="140" y2="60" strokeDasharray="2 6" stroke="rgba(255,255,255,0.04)" />
            <line x1="140" y1="-60" x2="20" y2="60" strokeDasharray="2 6" stroke="rgba(255,255,255,0.04)" />
          </g>

          {/* ── Small binary star system (~1600) ── */}
          <g transform="translate(400, 1650)" opacity="0.1">
            <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.8" />
            <circle cx="0" cy="0" r="45" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
            <g className="orb45" style={{ animationDuration: '30s' }}>
              <circle cx="45" cy="0" r="3.5" fill="#2DD4BF" opacity="0.8" />
            </g>
            <circle cx="0" cy="0" r="80" stroke="rgba(45,212,191,0.2)" strokeWidth="0.4" fill="none" strokeDasharray="2 8" />
            <g className="orb90" style={{ animationDuration: '60s' }}>
              <circle cx="0" cy="80" r="5" fill="rgba(244,114,182,0.6)" />
            </g>
          </g>

          {/* ── Southern Cross (right, ~1800) ── */}
          <g stroke="rgba(212,175,55,0.5)" strokeWidth="0.6" fill="none" opacity="0.4">
            <line x1="1200" y1="1750" x2="1200" y2="1900" />
            <line x1="1140" y1="1825" x2="1260" y2="1825" />
            <circle cx="1200" cy="1750" r="3.5" fill="#D4AF37" opacity="1" />
            <circle cx="1200" cy="1900" r="3" fill="#D4AF37" opacity="0.8" />
            <circle cx="1140" cy="1825" r="2.5" fill="#D4AF37" opacity="0.7" />
            <circle cx="1260" cy="1825" r="2.5" fill="#D4AF37" opacity="0.7" />
            <circle cx="1200" cy="1825" r="1.5" fill="#D4AF37" opacity="0.4" />
          </g>

          {/* ── Scattered stars zone 2 ── */}
          <circle cx="70" cy="1050" r="1" fill="rgba(255,255,255,0.25)" />
          <circle cx="600" cy="1150" r="1.3" fill="rgba(244,114,182,0.2)" />
          <circle cx="1400" cy="1100" r="1" fill="rgba(45,212,191,0.22)" />
          <circle cx="300" cy="1500" r="1.5" fill="rgba(212,175,55,0.25)" />
          <circle cx="750" cy="1450" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="1100" cy="1600" r="1.2" fill="rgba(45,212,191,0.2)" />
          <circle cx="500" cy="1900" r="1" fill="rgba(255,255,255,0.15)" />
          <circle cx="850" cy="2000" r="1.3" fill="rgba(212,175,55,0.2)" />
          <circle cx="50" cy="2100" r="1" fill="rgba(244,114,182,0.18)" />

          {/* ================================================================
              ZONE 3: 2200–3500px  (Skills / Featured Works)
              ================================================================ */}

          {/* ── Astrolabe / Compass Rose (~2400) ── */}
          <g transform="translate(200, 2450)" opacity="0.08" className="astro-spin">
            <circle cx="0" cy="0" r="120" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
            <circle cx="0" cy="0" r="115" stroke="#D4AF37" strokeWidth="0.3" fill="none" strokeDasharray="2 5" />
            <circle cx="0" cy="0" r="85" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none" />
            <circle cx="0" cy="0" r="50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
            <circle cx="0" cy="0" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.4" fill="none" />
            {/* Cardinals */}
            <line x1="0" y1="-120" x2="0" y2="120" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="-120" y1="0" x2="120" y2="0" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="-85" y1="-85" x2="85" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            <line x1="85" y1="-85" x2="-85" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
            {/* North arrow */}
            <polygon points="0,-115 -6,-96 6,-96" fill="#D4AF37" opacity="0.8" />
            {/* Tick marks */}
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(d => (
              <line key={d} x1="0" y1="-114" x2="0" y2="-104" stroke="#D4AF37" strokeWidth="0.6" transform={`rotate(${d})`} />
            ))}
            {/* Ecliptic rete */}
            <path d="M-70,-35 Q0,-100 70,-35" stroke="rgba(244,114,182,0.5)" strokeWidth="0.7" fill="none" />
            <path d="M-50,40 Q0,85 50,40" stroke="rgba(45,212,191,0.4)" strokeWidth="0.5" fill="none" />
          </g>

          {/* ── Scorpius constellation (right, ~2500) ── */}
          <g stroke="rgba(244,114,182,0.45)" strokeWidth="0.6" fill="none" opacity="0.4">
            <polyline points="1050,2400 1100,2440 1130,2420 1160,2460 1190,2510 1230,2530 1260,2520 1280,2560 1250,2600 1220,2630" />
            <circle cx="1050" cy="2400" r="4" fill="#F472B6" opacity="1" />
            <circle cx="1100" cy="2440" r="2" fill="#F472B6" opacity="0.6" />
            <circle cx="1160" cy="2460" r="2.5" fill="#F472B6" opacity="0.7" />
            <circle cx="1230" cy="2530" r="3" fill="#F472B6" opacity="0.9" />
            <circle cx="1280" cy="2560" r="2" fill="#F472B6" opacity="0.6" />
            <circle cx="1220" cy="2630" r="2.5" fill="#F472B6" opacity="0.8" />
          </g>

          {/* ── Telescope stencil (~2800) ── */}
          <g transform="translate(1250, 2850)" opacity="0.07" stroke="#2DD4BF" strokeWidth="1.1" fill="none">
            <rect x="-75" y="-11" width="150" height="22" rx="4" transform="rotate(-32)" />
            <ellipse cx="-82" cy="0" rx="6" ry="16" transform="rotate(-32)" strokeWidth="0.9" />
            <line x1="28" y1="20" x2="60" y2="70" strokeWidth="0.9" />
            <line x1="28" y1="20" x2="-10" y2="75" strokeWidth="0.9" />
            <line x1="28" y1="20" x2="65" y2="42" strokeWidth="0.5" strokeDasharray="2 3" />
            {/* Lens detail */}
            <circle cx="-85" cy="3" r="3" transform="rotate(-32)" strokeWidth="0.4" opacity="0.5" />
          </g>

          {/* ── Comet trail (~3100) ── */}
          <g opacity="0.07" transform="translate(600, 3100)">
            <circle cx="0" cy="0" r="3" fill="#FAFAFA" />
            <path d="M0,0 Q80,30 220,18 Q360,6 480,45"
              stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" fill="none" strokeDasharray="4 6" />
            <path d="M0,1.5 Q60,35 190,26"
              stroke="rgba(212,175,55,0.25)" strokeWidth="2.5" fill="none" />
          </g>

          {/* ── Scattered stars zone 3 ── */}
          <circle cx="450" cy="2250" r="1" fill="rgba(255,255,255,0.25)" />
          <circle cx="800" cy="2350" r="1.5" fill="rgba(212,175,55,0.22)" />
          <circle cx="1400" cy="2300" r="1" fill="rgba(45,212,191,0.2)" />
          <circle cx="100" cy="2700" r="1.3" fill="rgba(255,255,255,0.2)" />
          <circle cx="650" cy="2900" r="1" fill="rgba(244,114,182,0.18)" />
          <circle cx="1000" cy="2800" r="1.2" fill="rgba(45,212,191,0.22)" />
          <circle cx="350" cy="3200" r="1" fill="rgba(255,255,255,0.15)" />
          <circle cx="900" cy="3350" r="1.5" fill="rgba(212,175,55,0.2)" />

          {/* ================================================================
              ZONE 4: 3500–4800px  (Projects)
              ================================================================ */}

          {/* ── Galaxy spiral ── */}
          <g transform="translate(350, 3700)" opacity="0.06" fill="none">
            <circle cx="0" cy="0" r="4" fill="#D4AF37" opacity="0.9" />
            <path d="M0,0 C25,-50 75,-60 110,-35 C145,-10 135,40 85,60 C35,80 -25,70 -50,35 C-75,0 -50,-60 0,-85 C50,-110 120,-95 155,-60 C190,-25 170,50 110,85"
              stroke="#D4AF37" strokeWidth="0.7" />
            <path d="M0,0 C-25,50 -75,60 -110,35 C-145,10 -135,-40 -85,-60 C-35,-80 25,-70 50,-35 C75,0 50,60 0,85 C-50,110 -120,95 -155,60 C-190,25 -170,-50 -110,-85"
              stroke="rgba(45,212,191,0.5)" strokeWidth="0.6" />
          </g>

          {/* ── Big Dipper / Ursa Major (~3800) ── */}
          <g stroke="rgba(212,175,55,0.5)" strokeWidth="0.6" fill="none" opacity="0.45">
            {/* Bowl */}
            <polyline points="900,3750 980,3730 1020,3780 950,3810 900,3750" />
            {/* Handle */}
            <polyline points="950,3810 1010,3860 1080,3870 1150,3840" />
            <circle cx="900" cy="3750" r="3" fill="#D4AF37" opacity="0.9" />
            <circle cx="980" cy="3730" r="2.5" fill="#D4AF37" opacity="0.8" />
            <circle cx="1020" cy="3780" r="2.5" fill="#D4AF37" opacity="0.7" />
            <circle cx="950" cy="3810" r="3" fill="#D4AF37" opacity="0.9" />
            <circle cx="1010" cy="3860" r="2" fill="#D4AF37" opacity="0.6" />
            <circle cx="1080" cy="3870" r="2" fill="#D4AF37" opacity="0.6" />
            <circle cx="1150" cy="3840" r="2.5" fill="#D4AF37" opacity="0.7" />
            {/* Pointer to Polaris */}
            <line x1="900" y1="3750" x2="860" y2="3650" strokeDasharray="4 6" stroke="rgba(255,255,255,0.08)" />
            <circle cx="860" cy="3650" r="4" fill="#D4AF37" opacity="0.5" />
          </g>

          {/* ── Second orrery / planetary system (~4100) ── */}
          <g transform="translate(250, 4150)" opacity="0.1">
            <circle cx="0" cy="0" r="7" fill="#2DD4BF" opacity="0.8" />
            <circle cx="0" cy="0" r="50" stroke="rgba(45,212,191,0.35)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
            <g className="orb45" style={{ animationDuration: '25s' }}>
              <circle cx="50" cy="0" r="4" fill="rgba(255,255,255,0.6)" />
            </g>
            <circle cx="0" cy="0" r="90" stroke="rgba(45,212,191,0.2)" strokeWidth="0.4" fill="none" strokeDasharray="3 8" />
            <g className="orb90" style={{ animationDuration: '55s' }}>
              <circle cx="0" cy="90" r="5.5" fill="rgba(212,175,55,0.6)" />
            </g>
            <circle cx="0" cy="0" r="135" stroke="rgba(212,175,55,0.1)" strokeWidth="0.3" fill="none" strokeDasharray="2 12" />
            <g className="orb180" style={{ animationDuration: '120s' }}>
              <circle cx="-135" cy="0" r="3.5" fill="rgba(244,114,182,0.5)" />
            </g>
          </g>

          {/* ── Celestial coordinates (right, ~4300) ── */}
          <g transform="translate(1100, 4350)" opacity="0.05" stroke="#D4AF37" strokeWidth="0.5" fill="none">
            {/* RA/Dec grid fragment */}
            <ellipse cx="0" cy="0" rx="140" ry="60" />
            <ellipse cx="0" cy="0" rx="140" ry="60" transform="rotate(30)" />
            <ellipse cx="0" cy="0" rx="140" ry="60" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="140" ry="60" transform="rotate(90)" />
            <circle cx="0" cy="0" r="5" fill="#D4AF37" opacity="0.6" />
          </g>

          {/* ── Scattered stars zone 4 ── */}
          <circle cx="600" cy="3550" r="1.2" fill="rgba(255,255,255,0.22)" />
          <circle cx="1300" cy="3650" r="1" fill="rgba(45,212,191,0.2)" />
          <circle cx="150" cy="3900" r="1.5" fill="rgba(244,114,182,0.18)" />
          <circle cx="750" cy="4050" r="1" fill="rgba(255,255,255,0.15)" />
          <circle cx="1200" cy="4200" r="1.3" fill="rgba(212,175,55,0.22)" />
          <circle cx="500" cy="4400" r="1" fill="rgba(45,212,191,0.18)" />
          <circle cx="50" cy="4600" r="1.2" fill="rgba(255,255,255,0.2)" />
          <circle cx="850" cy="4700" r="1" fill="rgba(244,114,182,0.15)" />

          {/* ================================================================
              ZONE 5: 4800–6000px  (Research / Publications)
              ================================================================ */}

          {/* ── Lyra constellation (~4900) ── */}
          <g stroke="rgba(45,212,191,0.5)" strokeWidth="0.6" fill="none" opacity="0.4">
            <polyline points="1050,4850 1080,4920 1110,4900 1090,4960 1060,4940 1050,4850" />
            <circle cx="1050" cy="4850" r="4" fill="#2DD4BF" opacity="1" />
            <circle cx="1080" cy="4920" r="2" fill="#2DD4BF" opacity="0.6" />
            <circle cx="1110" cy="4900" r="2" fill="#2DD4BF" opacity="0.6" />
            <circle cx="1090" cy="4960" r="2.5" fill="#2DD4BF" opacity="0.7" />
            <circle cx="1060" cy="4940" r="2" fill="#2DD4BF" opacity="0.6" />
          </g>

          {/* ── Second Astrolabe (left, ~5200) ── */}
          <g transform="translate(150, 5250)" opacity="0.07" className="astro-spin" style={{ animationDirection: 'reverse', animationDuration: '260s' }}>
            <circle cx="0" cy="0" r="95" stroke="#2DD4BF" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="91" stroke="#2DD4BF" strokeWidth="0.3" fill="none" strokeDasharray="2 5" />
            <circle cx="0" cy="0" r="65" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" fill="none" />
            <circle cx="0" cy="0" r="35" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" fill="none" />
            <line x1="0" y1="-95" x2="0" y2="95" stroke="#2DD4BF" strokeWidth="0.5" />
            <line x1="-95" y1="0" x2="95" y2="0" stroke="#2DD4BF" strokeWidth="0.5" />
            <polygon points="0,-90 -5,-75 5,-75" fill="#2DD4BF" opacity="0.7" />
            {[0,30,60,90,120,150,180,210,240,270,300,330].map(d => (
              <line key={d} x1="0" y1="-90" x2="0" y2="-82" stroke="#2DD4BF" strokeWidth="0.5" transform={`rotate(${d})`} />
            ))}
          </g>

          {/* ── Crescent Moon #2 (right, ~5400) ── */}
          <g transform="translate(1300, 5450)" opacity="0.08" fill="none">
            <circle cx="0" cy="0" r="35" stroke="#D4AF37" strokeWidth="1.2" />
            <circle cx="-14" cy="-5" r="30" fill="#111118" stroke="none" />
            <path d="M5,-34 A35,35 0 1,1 5,34 A28,28 0 0,0 5,-34"
              stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.03)" />
            <circle cx="18" cy="8" r="4" stroke="#D4AF37" strokeWidth="0.4" opacity="0.4" />
            <circle cx="12" cy="-14" r="2.5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
          </g>

          {/* ── Third orrery (~5700) ── */}
          <g transform="translate(700, 5750)" opacity="0.09">
            <circle cx="0" cy="0" r="8" fill="#F472B6" opacity="0.7" />
            <circle cx="0" cy="0" r="55" stroke="rgba(244,114,182,0.3)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
            <g className="orb45" style={{ animationDuration: '35s' }}>
              <circle cx="55" cy="0" r="4.5" fill="#D4AF37" opacity="0.7" />
            </g>
            <circle cx="0" cy="0" r="100" stroke="rgba(244,114,182,0.15)" strokeWidth="0.4" fill="none" strokeDasharray="4 10" />
            <g className="orb90" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
              <circle cx="-100" cy="0" r="6" fill="none" stroke="#2DD4BF" strokeWidth="1" opacity="0.7" />
              <ellipse cx="-100" cy="0" rx="12" ry="3.5" stroke="#2DD4BF" strokeWidth="0.5" fill="none" opacity="0.5" />
            </g>
          </g>

          {/* ── Scattered stars zone 5 ── */}
          <circle cx="400" cy="4900" r="1" fill="rgba(255,255,255,0.22)" />
          <circle cx="800" cy="5050" r="1.5" fill="rgba(212,175,55,0.2)" />
          <circle cx="1400" cy="5150" r="1" fill="rgba(45,212,191,0.18)" />
          <circle cx="100" cy="5500" r="1.3" fill="rgba(255,255,255,0.2)" />
          <circle cx="550" cy="5600" r="1" fill="rgba(244,114,182,0.18)" />
          <circle cx="950" cy="5400" r="1.2" fill="rgba(45,212,191,0.22)" />
          <circle cx="300" cy="5800" r="1" fill="rgba(255,255,255,0.15)" />

          {/* ================================================================
              ZONE 6: 6000–7500px  (Contact / Footer)
              ================================================================ */}

          {/* ── Cassiopeia variant (right, ~6100) ── */}
          <g stroke="rgba(212,175,55,0.45)" strokeWidth="0.6" fill="none" opacity="0.35">
            <polyline points="950,6050 1020,6120 1100,6080 1160,6150 1230,6110" />
            <circle cx="950" cy="6050" r="2.5" fill="#D4AF37" opacity="0.8" />
            <circle cx="1020" cy="6120" r="3" fill="#D4AF37" opacity="0.9" />
            <circle cx="1100" cy="6080" r="2" fill="#D4AF37" opacity="0.6" />
            <circle cx="1160" cy="6150" r="3.5" fill="#D4AF37" opacity="1" />
            <circle cx="1230" cy="6110" r="2" fill="#D4AF37" opacity="0.7" />
          </g>

          {/* ── Celestial sphere / armillary (~6350) ── */}
          <g transform="translate(350, 6400)" opacity="0.06" stroke="#D4AF37" strokeWidth="0.8" fill="none">
            <circle cx="0" cy="0" r="90" />
            <ellipse cx="0" cy="0" rx="90" ry="35" />
            <ellipse cx="0" cy="0" rx="90" ry="35" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="90" ry="35" transform="rotate(120)" />
            <line x1="0" y1="-95" x2="0" y2="95" strokeWidth="0.4" />
            {/* Poles */}
            <circle cx="0" cy="-90" r="3" fill="#D4AF37" opacity="0.5" />
            <circle cx="0" cy="90" r="3" fill="#D4AF37" opacity="0.5" />
          </g>

          {/* ── Gemini constellation (right, ~6700) ── */}
          <g stroke="rgba(45,212,191,0.45)" strokeWidth="0.6" fill="none" opacity="0.35">
            {/* Castor branch */}
            <polyline points="1050,6650 1080,6700 1100,6750 1090,6800" />
            {/* Pollux branch */}
            <polyline points="1130,6650 1150,6700 1170,6750 1180,6800" />
            {/* Cross link */}
            <line x1="1080" y1="6700" x2="1150" y2="6700" />
            <circle cx="1050" cy="6650" r="3.5" fill="#2DD4BF" opacity="1" />
            <circle cx="1130" cy="6650" r="3.5" fill="#2DD4BF" opacity="1" />
            <circle cx="1080" cy="6700" r="2" fill="#2DD4BF" opacity="0.6" />
            <circle cx="1150" cy="6700" r="2" fill="#2DD4BF" opacity="0.6" />
            <circle cx="1100" cy="6750" r="2" fill="#2DD4BF" opacity="0.5" />
            <circle cx="1170" cy="6750" r="2" fill="#2DD4BF" opacity="0.5" />
            <circle cx="1090" cy="6800" r="2" fill="#2DD4BF" opacity="0.4" />
            <circle cx="1180" cy="6800" r="2" fill="#2DD4BF" opacity="0.4" />
          </g>

          {/* ── Final orrery (left, ~7000) ── */}
          <g transform="translate(200, 7050)" opacity="0.08">
            <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.8" />
            <circle cx="0" cy="0" r="40" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" fill="none" strokeDasharray="3 4" />
            <g className="orb45" style={{ animationDuration: '20s' }}>
              <circle cx="40" cy="0" r="3.5" fill="#2DD4BF" opacity="0.8" />
            </g>
            <circle cx="0" cy="0" r="70" stroke="rgba(212,175,55,0.15)" strokeWidth="0.4" fill="none" strokeDasharray="2 7" />
            <g className="orb90" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
              <circle cx="-70" cy="0" r="5" fill="rgba(255,255,255,0.5)" />
            </g>
          </g>

          {/* ── Scattered stars zone 6 ── */}
          <circle cx="600" cy="6100" r="1.2" fill="rgba(255,255,255,0.2)" />
          <circle cx="150" cy="6250" r="1" fill="rgba(244,114,182,0.18)" />
          <circle cx="800" cy="6350" r="1.5" fill="rgba(212,175,55,0.2)" />
          <circle cx="1350" cy="6500" r="1" fill="rgba(45,212,191,0.18)" />
          <circle cx="450" cy="6700" r="1.3" fill="rgba(255,255,255,0.15)" />
          <circle cx="900" cy="6900" r="1" fill="rgba(244,114,182,0.15)" />
          <circle cx="250" cy="7200" r="1.5" fill="rgba(212,175,55,0.2)" />
          <circle cx="1100" cy="7300" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="700" cy="7400" r="1.2" fill="rgba(45,212,191,0.2)" />
        </svg>
      </div>

      {/* ══════════════════════════════════
           FIXED LAYER — Nebula gradient glows
           (kept as-is per user request)
           ══════════════════════════════════ */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vh] rounded-full blur-[120px] bg-[#D4AF37]" />
        <div className="absolute top-[15%] right-[15%] w-[25vw] h-[30vh] rounded-full blur-[100px] bg-[#D4AF37]" />
        <div className="absolute top-[45%] left-[55%] w-[30vw] h-[35vh] rounded-full blur-[100px] bg-[#F472B6]" />
        <div className="absolute top-[70%] right-[-5%] w-[35vw] h-[50vh] rounded-full blur-[140px] bg-[#2DD4BF]" />
      </div>

      {/* ── Floating particles (fixed) ── */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full animate-float opacity-25"
            style={{
              left: `${5 + (i * 6.5) % 90}%`,
              top: `${8 + (i * 5.8) % 85}%`,
              backgroundColor: i % 4 === 0 ? '#D4AF37' : i % 4 === 1 ? '#2DD4BF' : i % 4 === 2 ? '#F472B6' : '#FAFAFA',
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${16 + i * 1.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
});

OptimizedCosmicBackground.displayName = 'OptimizedCosmicBackground';
