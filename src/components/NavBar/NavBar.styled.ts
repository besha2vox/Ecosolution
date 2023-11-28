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

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  & svg {
    stroke: currentColor;
  }
`;
