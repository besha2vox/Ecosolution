import React from 'react';
import { TSectionId } from '../types';

const useScrollSectionHighlighter = (): TSectionId | '' => {
  const [visibleSectionId, setVisibleSectionId] = React.useState<string>('');

  const handleScroll = React.useCallback(() => {
    const sections = document.querySelectorAll('section')!;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const boundingBox = section.getBoundingClientRect();
      const isSectionVisible =
        boundingBox.top < windowHeight && boundingBox.bottom >= 0;

      if (isSectionVisible && section.id !== visibleSectionId) {
        setVisibleSectionId(section.id);
      }
    });
  }, [visibleSectionId]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, visibleSectionId]);

  return visibleSectionId as TSectionId | '';
};

export default useScrollSectionHighlighter;
