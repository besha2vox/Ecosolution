import React from 'react';

import { IChildrenProps } from '../../types';
import { useWindowWidth } from '../../hooks';
import { ContainerWrapper } from './Container.styled';

const Container: React.FC<IChildrenProps> = ({ children }) => {
  const device = useWindowWidth();

  return <ContainerWrapper device={device}>{children}</ContainerWrapper>;
};

export default Container;
