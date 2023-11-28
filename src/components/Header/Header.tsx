import React, { useRef } from 'react';

import Logo from '../Logo';
import Container from '../Container';
import Anchor from '../Anchor';
import BurgerMenu from '../BurgerMenu';
import { HeaderWrapper, Burger } from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../assets/images/icons/menu.svg';
import { useBodyPadding, useWindowWidth, useScrollPosition } from '../../hooks';

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = React.useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useWindowWidth() === 'mobile';
  useBodyPadding(headerRef);
  const scrollPosition = useScrollPosition();

  const handleMenuOpen = () => {
    setIsMenuShown(true);
  };

  return (
    <HeaderWrapper ref={headerRef} scrolled={scrollPosition.y > 0}>
      <Container>
        <Logo />
        <Burger onClick={handleMenuOpen}>
          <BurgerMenuIcon width={16} height={16} />
        </Burger>
        {isMenuShown && <BurgerMenu setIsShown={setIsMenuShown} />}
        {!isMobile && <Anchor text="Get in touch" />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
