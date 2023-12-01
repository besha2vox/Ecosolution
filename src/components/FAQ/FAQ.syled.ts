import styled, { css } from 'styled-components';

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    column-gap: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 48px;
  }
`;
