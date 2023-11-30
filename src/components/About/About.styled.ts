import styled, { css } from 'styled-components';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    row-gap: 126px;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    flex-direction: row;
    column-gap: 24px;
    justify-content: space-between;

    & h2 {
      flex-basis: 272px;
    }
    & p {
      flex-basis: calc(50% - 12px);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & h2 {
      flex-basis: 365px;
    }

    & p {
      flex-basis: 460px;
    }
  }
`;
