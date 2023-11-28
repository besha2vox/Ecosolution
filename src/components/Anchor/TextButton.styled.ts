import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-left: 12px;

  border-radius: 500px;
  background-color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Ellipse = styled.span`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.background.dark};
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition};
  }

  ${Button}:hover & {
    &::after {
      opacity: 0;
    }
  }
`;
