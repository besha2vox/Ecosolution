import styled from 'styled-components';

import { ContainerWrapper } from '../Container/Container.styled';

interface HeaderWrapperProps {
  scrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 36px 0;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.background.scrolled : theme.background.primary};
  transition: background-color ${({ theme }) => theme.transition};

  & ${ContainerWrapper} {
    display: flex;
    align-items: center;
  }
`;

export const Burger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 12px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.burger};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
