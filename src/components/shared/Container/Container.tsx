import React from 'react';

import { IChildrenProps } from '../../../types';
import { useWindowWidth } from '../../../hooks';
import { ContainerWrapper, IContainerWrapperProps } from './Container.styled';

interface TContainerProps
  extends IChildrenProps,
    Omit<IContainerWrapperProps, 'device'> {}

const Container: React.FC<TContainerProps> = ({ children, ...props }) => {
  const device = useWindowWidth();

  return (
    <ContainerWrapper device={device} {...props}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
