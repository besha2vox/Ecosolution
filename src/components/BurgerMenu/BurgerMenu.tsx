import React from 'react';

import Container from '../Container';
import NavBar from '../NavBar';
import { ReactComponent as CrossIcon } from '../../assets/images/icons/cross.svg';
import { BackDrop, DropDown, CloseButton } from './BurgerMenu.styled';
import SocialLinks from '../SocialLinks';

interface IBurgerMenuProps {
  setIsShown: (param: boolean) => void;
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ setIsShown }) => {
  const handleCloseMenu = React.useCallback(() => {
    setIsShown(false);
  }, [setIsShown]);

  const handleCloseMenuOnBackdropClick = (e: React.MouseEvent) => {
    console.dir(e.target);
    console.dir(e.currentTarget.children[0]);

    if (
      e.target === e.currentTarget ||
      e.target === e.currentTarget.children[0]
    ) {
      handleCloseMenu();
    }
  };

  React.useEffect(() => {
    const handleCloseMenuOnESC = (e: KeyboardEvent) => {
      if (e.code !== 'Escape') return;
      handleCloseMenu();
    };

    window.addEventListener('keyup', handleCloseMenuOnESC);
    return () => window.removeEventListener('keyup', handleCloseMenuOnESC);
  }, [handleCloseMenu]);

  return (
    <BackDrop onClick={handleCloseMenuOnBackdropClick}>
      <Container>
        <DropDown>
          <CloseButton onClick={handleCloseMenu}>
            <CrossIcon width={20} height={20} />
            close
          </CloseButton>
          <NavBar />
          <SocialLinks />
        </DropDown>
      </Container>
    </BackDrop>
  );
};

export default BurgerMenu;
