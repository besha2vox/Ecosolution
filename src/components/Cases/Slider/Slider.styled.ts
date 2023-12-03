import styled, { css } from 'styled-components';

import { ReactComponent as Icon } from '../../../assets/images/icons/arrow-right.svg';
import { log } from 'console';

export const SliderWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    overflow: hidden;
  }
`;

export const List = styled.ul<{ translateX: string }>`
  display: flex;
  column-gap: 10px;

  transform: translateX(calc(${({ translateX }) => translateX}));
  transition: transform 0.5s ease-in-out;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 48px;
  }
`;

export const Item = styled.li`
  min-width: 100%;

  background-color: ${({ theme }) => theme.background.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: calc((100% - 48px) / 2);
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 14px 12px 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 60px;
    padding: 36px 48px;
  }
`;

export const DescriptionBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &:last-child::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 0;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:last-child::before {
      top: -24px;
    }
  }
`;

export const CompanyInfo = styled.p`
  max-width: 175px;

  font-size: ${({ theme }) => theme.fontSizes[4]};
  letter-spacing: -0.72px;
  text-align: justify;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 194px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    letter-spacing: -0.8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: inherit;
    flex-direction: column;
    max-width: 357px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    letter-spacing: -0.96px;
  }
`;

export const ArrowIcon = styled(Icon)`
  width: 28px;
  height: 28px;
  transform: rotate(-45deg);
`;

export const buttonUpStyles = css`
  padding: 16px;
`;
