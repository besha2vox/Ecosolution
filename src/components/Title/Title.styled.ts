import styled, { RuleSet, css } from 'styled-components';

const defaultTitleStyles = css`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  line-height: 1;
  text-transform: uppercase;
`;

export const TitlePrimery = styled.h1`
  ${defaultTitleStyles}
  font-size: 64px;
`;

export const TitleSecondary = styled.h2`
  ${defaultTitleStyles}
  font-size: 48px;
`;
