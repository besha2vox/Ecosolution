import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export const useScrollPosition = (): ScrollPosition => {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
};
