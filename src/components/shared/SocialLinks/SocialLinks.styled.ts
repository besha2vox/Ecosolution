import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  column-gap: 8px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  & svg {
    --color: currentColor;
  }
`;
