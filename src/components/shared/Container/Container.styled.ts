import styled from 'styled-components';

import { TDevice, TStyle } from '../../../types';

export interface IContainerWrapperProps {
  device: TDevice;
  styles?: TStyle;
}

export const ContainerWrapper = styled.div<IContainerWrapperProps>`
  ${({ styles }) => (styles ? styles : '')}
  margin: 0 auto;
  padding: 0 20px;
  max-width: ${({ theme, device }) => theme.breakpoints[device]};
`;
