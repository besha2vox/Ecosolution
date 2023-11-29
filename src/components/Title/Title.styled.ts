import styled, { RuleSet, css } from 'styled-components';

const defaultTitleStyles = css`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  line-height: 1;
  text-transform: uppercase;
`;

export const TitlePrimery = styled.h1`
  ${defaultTitleStyles}
  font-size: ${({ theme }) => theme.fontSizes[10]};
  letter-spacing: 1px;

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

export const TitleSecondary = styled.h2`
  ${defaultTitleStyles}
  font-size: ${({ theme }) => theme.fontSizes[7]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[10]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[11]};
  }
`;
