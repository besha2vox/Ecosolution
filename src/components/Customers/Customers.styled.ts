import styled, { css } from 'styled-components';

export const titleStyles = css`
  margin: 0 auto;
  max-width: 229px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 341px;
  }
`;

export const List = styled.ul`
  display: flex;
  column-gap: 16px;
  margin-top: 24px;

  overflow-x: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    column-gap: 24px;
    margin-top: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    column-gap: 48px;
    margin-top: 92px;
  }
`;

export const ListItem = styled.li`
  min-width: calc(50% - 8px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: calc((100% - 24px * 3) / 4);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: calc((100% - 48px * 3) / 4);
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  padding: 16px;
  row-gap: 14px;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
  transition: background-color ${({ theme }) => theme.transition},
    color ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.background.primary};

    & img {
      filter: invert(100%);
    }
  }
`;

export const ImgWrapper = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  height: 100%;
  & img {
    transition: filter ${({ theme }) => theme.transition};
  }
`;
