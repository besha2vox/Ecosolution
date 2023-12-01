import styled, { css } from 'styled-components';

import {
  SocialLink,
  SocialList,
} from '../shared/SocialLinks/SocialLinks.styled';

export const titleStyles = css`
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 120px;
  }
`;

export const ContactUseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
