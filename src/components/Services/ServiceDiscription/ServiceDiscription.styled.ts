import styled, { css } from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/images/icons/arrow-right.svg';
import { Button } from '../../shared/IconButton/IconButton.styled';

export const titleStyles = css`
  align-self: flex-start;
  text-transform: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 28px;
  }
`;

export const buttonStyles = css`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transform: translate(-10%, 10%) scale(0.6);
  border: 1px solid transparent;
  opacity: 0;
  pointer-events: none;
  transition-property: color, background-color, border-color;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    transform: translate(-42px, 42px);
  }
  padding: 16px;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 24px;

  width: 100%;
  height: 100%;

  background-color: inherit;
  overflow: hidden;

  transition-property: color, background-color;
  transition-duration: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.colors.light};

    ${Button} {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px;
    row-gap: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 0;
    padding: 48px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 200px;
  height: 200px;
  overflow: hidden;

  & img {
    transform-origin: 12.5rem 4rem;
    transform: scale(2);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 300px;
    height: 300px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 38px;
    max-width: 348px;
    height: 348px;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.regular};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  letter-spacing: -0.64px;
  text-align: right;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const ArrowIcon = styled(Icon)`
  width: 28px;
  height: 28px;
  transform: rotate(-45deg);
`;
