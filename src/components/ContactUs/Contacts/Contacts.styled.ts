import styled from 'styled-components';

import {
  SocialLink,
  SocialList,
} from '../../shared/SocialLinks/SocialLinks.styled';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${SocialList} {
    margin-top: 8px;
    column-gap: 8px;
  }

  ${SocialLink} {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${SocialLink}:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    max-width: 244px;

    ${SocialLink} {
      padding: 12px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${SocialList} {
      margin-top: 16px;
    }
  }
`;

export const ContactItem = styled.li`
  display: inherit;
  flex-direction: inherit;
  row-gap: 8px;
`;

export const PhoneList = styled.ul`
  display: inherit;
  flex-direction: inherit;
  row-gap: 12px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;

  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  letter-spacing: -0.8px;

  & svg {
    min-width: 24px;
    stroke: currentColor;
    transition: ${({ theme }) => theme.transition};
  }

  &:hover svg {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;
