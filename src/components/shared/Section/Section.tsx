import React from 'react';

import { IChildrenProps, TDevicePadingMap, TSectionId } from '../../../types';
import { useWindowWidth } from '../../../hooks';

interface ISectionProps extends IChildrenProps {
  id?: TSectionId;
}

const devicePadingMap: TDevicePadingMap = {
  mobile: 36,
  tablet: 100,
  desktop: 120,
};

const Section: React.FC<ISectionProps> = ({ children }) => {
  const device = useWindowWidth();

  return (
    <section style={{ padding: `${devicePadingMap[device]}px 0` }}>
      {children}
    </section>
  );
};

export default Section;
