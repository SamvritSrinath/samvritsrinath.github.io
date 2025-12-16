import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'dark'
  );
  
  const toggleTheme = () => {
    const html = document.documentElement;
    
    // Add transitioning class to disable animations temporarily
    html.classList.add('theme-transitioning');
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Update DOM instantly
    html.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b739ec5b-b30a-488d-87e3-b609b6c6e458', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'pre-fix',
        hypothesisId: 'H1',
        location: 'useTheme.js:toggleTheme',
        message: 'Theme toggled',
        data: {
          newTheme,
          classList: Array.from(html.classList),
          dataTheme: html.getAttribute('data-theme'),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log
    
    // Remove transitioning class after a tick
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        html.classList.remove('theme-transitioning');
      });
    });
  };
  
  useEffect(() => {
    const html = document.documentElement;

    // Apply both data-theme (for CSS variables) and Tailwind's dark class
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b739ec5b-b30a-488d-87e3-b609b6c6e458', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'post-fix',
        hypothesisId: 'H1',
        location: 'useTheme.js:useEffect',
        message: 'Theme effect applied',
        data: {
          theme,
          classList: Array.from(html.classList),
          dataTheme: html.getAttribute('data-theme'),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion agent log
  }, [theme]);
  
  return { theme, toggleTheme };
};
