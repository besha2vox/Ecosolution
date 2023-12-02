import styled, { css } from 'styled-components';

export const titleStyles = css`
  margin: 0 auto;
  max-width: 145px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 186px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 248px;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    row-gap: 24px;
  }
`;

export const Discription = styled.p`
  padding: 52px 18px;

  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  line-height: 1;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.background.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 50%;
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[12]};
  }
`;

export const ServicesList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;

  font-size: ${({ theme }) => theme.fontSizes[5]};

  &::after {
    content: 'Energy';
    position: absolute;

    font-family: ${({ theme }) => theme.fonts.title.medium};
    font-size: ${({ theme }) => theme.fontSizes[14]};
    letter-spacing: -9.92px;
    text-transform: uppercase;
    opacity: 0.03;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-grow: 1;
    row-gap: 24px;
    flex-basis: 50%;

    font-size: ${({ theme }) => theme.fontSizes[6]};

    &::after {
      font-size: 136px;
      letter-spacing: -10.88px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    row-gap: 20px;
    flex-basis: 50%;

    &::after {
      align-self: flex-start;
      font-size: 238px;
      letter-spacing: -21.12px;
    }
  }
`;
