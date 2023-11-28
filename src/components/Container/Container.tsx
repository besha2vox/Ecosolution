import React from 'react';

import { useWindowWidth } from '../../hooks';
import { ContainerWrapper } from './Container.styled';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const device = useWindowWidth();

  return <ContainerWrapper device={device}>{children}</ContainerWrapper>;
};

export default Container;
