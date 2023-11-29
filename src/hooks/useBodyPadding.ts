import React from 'react';

import { useWindowWidth } from './useWindowWidth';
import { TDevicePadingMap } from '../types';

const devicePadingMap: TDevicePadingMap = {
  mobile: 186,
  tablet: 140,
  desktop: 144,
};

export const useBodyPadding = () => {
  const device = useWindowWidth();

  React.useEffect(() => {
    document.body.style.paddingTop = `${devicePadingMap[device]}px`;

    return () => {
      document.body.style.paddingTop = '0';
    };
  }, [device]);
};
