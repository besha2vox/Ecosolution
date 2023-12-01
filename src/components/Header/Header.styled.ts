import styled, { css } from 'styled-components';

export const containerStyle = css`
  display: flex;
  align-items: center;
`;

interface HeaderWrapperProps {
  scrolled: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 36px 0;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.background.scrolled : theme.background.primary};
  transition: background-color ${({ theme }) => theme.transition};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 24px 0;
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
