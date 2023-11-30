import React from 'react';

import { useBodyPadding, useWindowWidth, useScrollPosition } from '../../hooks';

import Logo from '../shared/Logo';
import Container from '../shared/Container';
import Anchor from '../Anchor';
import BurgerMenu from '../BurgerMenu';
import { ReactComponent as BurgerMenuIcon } from '../../assets/images/icons/menu.svg';
import { HeaderWrapper, Burger, containerStyle } from './Header.styled';

const Header: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = React.useState<boolean>(false);
  const isMobile = useWindowWidth() === 'mobile';
  useBodyPadding();
  const scrollPosition = useScrollPosition();

  const handleMenuOpen = () => {
    setIsMenuShown(true);
  };

  return (
    <HeaderWrapper scrolled={scrollPosition.y > 0}>
      <Container styles={containerStyle}>
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
