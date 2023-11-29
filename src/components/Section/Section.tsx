import React from 'react';

import { IChildrenProps, TDevicePadingMap } from '../../types';
import { SectionWrapper } from './Section.styled';
import { useWindowWidth } from '../../hooks';

const devicePadingMap: TDevicePadingMap = {
  mobile: 36,
  tablet: 100,
  desktop: 120,
};

const Section: React.FC<IChildrenProps> = ({ children }) => {
  const device = useWindowWidth();

  return (
    <SectionWrapper padding={devicePadingMap[device]}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
