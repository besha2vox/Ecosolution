import styled from 'styled-components';

import { TStyle } from '../../../types';

export interface IButtonStylesProps {
  styles?: TStyle;
  isBackgroundFill?: boolean;
}

export const Button = styled.button<IButtonStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  border-radius: 50%;

  ${({ styles }) => styles}
  background-color: ${({ theme, isBackgroundFill }) =>
    isBackgroundFill ? theme.colors.accent : 'transparent'};

  & svg {
    stroke: currentColor;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme, isBackgroundFill }) =>
      isBackgroundFill ? theme.background.dark : 'transparent'};
  }
`;
