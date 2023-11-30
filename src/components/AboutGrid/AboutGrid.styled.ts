import styled, { css } from 'styled-components';

import { TStyle } from '../../types';

export const gridOptions = (row: number, column: number | string) => css`
  grid-row: ${row};
  grid-column: ${column};
`;

export const subTitlesStyle = css`
  display: flex;
  align-items: center;
  column-gap: 8px;
  max-width: 250px;
`;

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-gap: 48px;
  }
`;

export const GridItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
  row-gap: 46px;

  background-color: ${({ theme }) => theme.background.secondary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 48px 24px;
  }
`;

export const Description = styled.p`
  padding-top: 12px;

  font-size: ${({ theme }) => theme.fontSizes[2]};
  letter-spacing: -0.56px;
  text-align: justify;

  border-top: 1px solid ${({ theme }) => theme.colors.accent};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 24px;
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }
`;

export const ImgWrapper = styled.li<{ styles: TStyle }>`
  ${({ styles }) => styles}
  width: 100%;
  height: 100%;
  overflow: hidden;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;
