import { useState, useEffect } from 'react';

export const useBodyPadding = (headerRef: React.RefObject<HTMLElement>) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    document.body.style.paddingTop = `${headerHeight}px`;

    return () => {
      document.body.style.paddingTop = '0';
    };
  }, [headerHeight]);

  return headerHeight;
};
