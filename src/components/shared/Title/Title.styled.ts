import styled, { css } from 'styled-components';

import { TStyle } from '../../../types';

export interface ITitleStyledProps {
  styles?: TStyle;
}

const defaultTitleStyles = css`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;

const H1 = styled.h1<ITitleStyledProps>`
  font-size: ${({ theme }) => theme.fontSizes[10]};
  letter-spacing: 1px;
  ${defaultTitleStyles}
  ${({ styles }) => (styles ? styles : '')}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: title;
    max-width: 310px;
    font-size: ${({ theme }) => theme.fontSizes[11]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 485px;
    font-size: ${({ theme }) => theme.fontSizes[12]};
    letter-spacing: 0;
  }
`;

const H2 = styled.h2<ITitleStyledProps>`
  ${defaultTitleStyles}
  font-size: ${({ theme }) => theme.fontSizes[7]};

  ${({ styles }) => (styles ? styles : '')}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[10]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[11]};
  }
`;

const H3 = styled.h3<ITitleStyledProps>`
  ${defaultTitleStyles}
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.333;

  ${({ styles }) => (styles ? styles : '')}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[8]};
  }
`;

export const TITLES = { h1: H1, h2: H2, h3: H3 };
