import React from 'react';

import { IChildrenProps, TDevicePadingMap } from '../../types';
import { useWindowWidth } from '../../hooks';

const devicePadingMap: TDevicePadingMap = {
  mobile: 36,
  tablet: 100,
  desktop: 120,
};

const Section: React.FC<IChildrenProps> = ({ children }) => {
  const device = useWindowWidth();

  return (
    <section style={{ padding: `${devicePadingMap[device]}px 0` }}>
      {children}
    </section>
  );
};

export default Section;
