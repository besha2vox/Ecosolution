import React, { useRef } from 'react';

import Logo from '../Logo';
import Container from '../Container';
import Anchor from '../Anchor';
import { HeaderWrapper, Burger } from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../assets/images/icons/menu.svg';
import { useBodyPadding, useWindowWidth, useScrollPosition } from '../../hooks';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useWindowWidth() === 'mobile';
  useBodyPadding(headerRef);
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition.y > 0;

  return (
    <HeaderWrapper ref={headerRef} scrolled={isScrolled}>
      <Container>
        <Logo />
        <Burger>
          <BurgerMenuIcon width={16} height={16} />
        </Burger>
        {!isMobile && <Anchor text="Get in touch" />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
