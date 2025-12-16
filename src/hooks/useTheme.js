import {useEffect} from 'react';

export const useTheme = () => {
  const theme = 'dark';

  useEffect(() => {
    // Always apply dark theme
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  return {theme};
};
