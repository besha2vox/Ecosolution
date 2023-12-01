import React from 'react';

import Container from '../shared/Container';
import Logo from '../shared/Logo';
import SocialLinks from '../shared/SocialLinks';
import IconButton from '../shared/IconButton';
import ContactInfo from '../ContactInfo';
import {
  FooterBlock,
  FooterWrapper,
  ArrowIcon,
  contactInfoStyles,
  buttonUpStyles,
} from './Footer.styled';

const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterWrapper>
      <Container>
        <FooterBlock>
          <Logo />
          <SocialLinks />
          <IconButton
            Icon={ArrowIcon}
            isBackgroundFill={true}
            styles={buttonUpStyles}
            handleClick={handleScrollTop}
          />
        </FooterBlock>
        <ContactInfo styles={contactInfoStyles} />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
