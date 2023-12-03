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
  align-items: center;
  row-gap: 24px;
  margin-top: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    row-gap: 24px;
  }
`;

export const Discription = styled.div`
  position: relative;
  padding: 52px 18px;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.background.secondary};

  & > p {
    font-family: ${({ theme }) => theme.fonts.title.regular};
    font-size: ${({ theme }) => theme.fontSizes[10]};

    line-height: 1;
    text-transform: uppercase;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    max-width: 284px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 50%;
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & > p {
      font-size: ${({ theme }) => theme.fontSizes[12]};
    }
  }
`;

const backgroundEnergy = css`
  content: 'Energy';
  position: absolute;

  font-family: ${({ theme }) => theme.fonts.title.medium};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  letter-spacing: -9.92px;
  text-transform: uppercase;
  opacity: 0.03;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    z-index: 0;
    font-size: 136px;
    letter-spacing: -10.88px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-self: flex-start;
    font-size: 238px;
    letter-spacing: -21.12px;
  }
`;

export const ServicesList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  & li {
    width: 118px;
    align-self: center;
  }

  &::after {
    ${backgroundEnergy}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-grow: 1;
    row-gap: 24px;
    flex-basis: 50%;

    &::before {
      z-index: 0;
      font-size: 136px;
      letter-spacing: -10.88px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 20px;
    flex-basis: 50%;

    &::before {
      align-self: flex-start;
      font-size: 238px;
      letter-spacing: -21.12px;
    }
  }
`;

export const ServiceButton = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  column-gap: 12px;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes[6]};

  transform: translateX(-28px);
  transition-property: transform, color;

  & svg {
    stroke: currentColor;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    & svg {
      opacity: 1;
    }
  }

  &.active {
    transform: translateX(0);
    color: ${({ theme }) => theme.colors.accent};
    & svg {
      opacity: 1;
    }
  }
`;
