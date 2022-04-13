import { useLayoutEffect } from 'react';

export const useWindowSize = (callback: EventListener) => {
  useLayoutEffect(() => {
    window.addEventListener('resize', callback);

    return () => window.removeEventListener('resize', callback);
  }, []);
};