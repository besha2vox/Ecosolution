import styled, { css } from 'styled-components';

export const titleStyles = css`
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 120px;
  }
`;

export const ContactUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
