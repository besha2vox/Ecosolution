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

export const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.dark};

  & svg {
    z-index: 0;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition};
  }

  ${Button}:hover & {
    & svg {
      opacity: 1;
    }
  }
`;
