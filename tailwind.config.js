/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Blue Nebula color palette
        cosmic: {
          // Light mode: Sky/atmosphere blues
          sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          // Dark mode: Deep space blues
          void: {
            50: '#1e3a5f',
            100: '#1a2f4f',
            200: '#152540',
            300: '#0f1a30',
            400: '#0a1220',
            500: '#050a15',
            600: '#03070f',
            700: '#02050a',
            800: '#010305',
            900: '#000000',
          },
          // Nebula accent colors
          nebula: {
            cyan: '#06b6d4', // Cyan-400
            blue: '#3b82f6',  // Blue-500  
            indigo: '#6366f1', // Indigo-500
            azure: '#0ea5e9', // Sky-500
          },
          // Atmospheric effects
          atmosphere: {
            light: 'rgba(56, 189, 248, 0.1)', // Light mode atmosphere
            dark: 'rgba(14, 165, 233, 0.15)', // Dark mode atmosphere
          },
          // Legacy support
          aurora: {
            cyan: '#06b6d4',
            purple: '#6366f1',
            pink: '#ec4899',
          },
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Glass blur scales
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '128px',
      },
      // Blue nebula gradients
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'glass-light': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(15,30,60,0.3) 0%, rgba(15,30,60,0.1) 100%)',
        'nebula-radial': 'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.15), transparent 60%)',
        'nebula-radial-dark': 'radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.2), transparent 60%)',
        'aurora-blue': 'linear-gradient(90deg, #06b6d4, #3b82f6, #6366f1)',
        'cosmic-flow-light': 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #6366f1 100%)',
        'cosmic-flow-dark': 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #4f46e5 100%)',
        // Legacy support
        'cosmic-flow': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'aurora-flow': 'linear-gradient(90deg, #06b6d4, #3b82f6, #6366f1)',
      },
      // Animation presets
      animation: {
        'gradient-flow': 'gradient-flow 8s ease infinite',
        'float': 'float 20s ease-in-out infinite',
        'drift': 'drift 30s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'gradient-slow': 'gradient-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-slow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-30px) translateX(20px)' },
          '66%': { transform: 'translateY(-10px) translateX(-15px)' },
        },
        'drift': {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
      // Spacing optimized for glass layering
      spacing: {
        'glass': '1px',
      },
      // Shadow system for glass depth
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 16px 48px 0 rgba(0, 0, 0, 0.16)',
        'glass-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glass-light': '0 8px 32px 0 rgba(56, 189, 248, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(14, 165, 233, 0.2)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.4)',
        // Legacy support
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [
    // Custom glass utilities plugin
    plugin(function({ addUtilities }) {
      addUtilities({
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(16px) saturate(150%)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-morphism': {
          'background': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          'backdrop-filter': 'blur(24px) saturate(180%)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        },
      });
    }),
  ],
};
