import styled from 'styled-components';

export const NavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-top: 24px;

  font-size: ${({ theme }) => theme.fontSizes[7]};
  letter-spacing: -0.96px;

  border-top: 1px solid ${({ theme }) => theme.colors.light};
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-size: ${({ theme }) => theme.fontSizes[6]};
  letter-spacing: -0.96px;

  color: ${({ theme }) => theme.colors.light};

  &.current {
    color: ${({ theme }) => theme.colors.accent};
  }
  & svg {
    stroke: currentColor;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({ theme }) => theme.colors.light}25;

    &:hover {
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;
