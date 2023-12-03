import styled, { css } from 'styled-components';

import { ReactComponent as Icon } from '../../assets/images/icons/arrow-right.svg';

export const titleStyles = css`
  max-width: 264px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 394px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: 32px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 120px;
  }
`;

export const SliderInterface = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 12px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: calc((100% - 18px) / 2);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: calc(50% - 160px);
  }
`;

export const Counter = styled.p`
  align-self: flex-end;
  margin-right: auto;

  font-family: ${({ theme }) => theme.fonts.main.light};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  line-height: 0.7;
  letter-spacing: -1.12px;

  & span {
    opacity: 0.25;
  }
`;

/*
@media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
}

@media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
}
*/
export const buttonStyles = css`
  padding: 15px;
  border: 1px solid currentColor;
`;

const iconStyles = css`
  width: 36px;
  height: 36px;
`;

export const ArrowRightIcon = styled(Icon)`
  ${iconStyles}
`;

export const ArrowLeftIcon = styled(Icon)`
  ${iconStyles}
  transform: rotate(180deg);
`;
