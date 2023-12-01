import styled, { css } from 'styled-components';

import {
  SocialLink,
  SocialList,
} from '../shared/SocialLinks/SocialLinks.styled';
import { ReactComponent as Icon } from '../../assets/images/icons/arrow-right.svg';
import { ContainerWrapper } from '../shared/Container/Container.styled';
import { LogoLink } from '../shared/Logo/Logo.styled';

export const contactInfoStyles = css`
  row-gap: 16px;
`;

export const FooterWrapper = styled.footer`
  padding: 24px 0;

  ${ContainerWrapper} {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 0;

    ${ContainerWrapper} {
      row-gap: 16px;
    }
  }
`;

export const FooterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  ${SocialLink} {
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  ${LogoLink} {
    margin-right: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-24px);

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;

    &::before {
      transform: translateY(-40px);
    }

    ${SocialList} {
      margin-right: 287px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${SocialList} {
      margin-right: 403px;
    }
  }
`;

export const ArrowIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  transform: rotate(-90deg);
`;

export const buttonUpStyles = css`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 8px;
`;
