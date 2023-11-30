import React from 'react';

import { CompanyName, CompanySlogan, LogoLink } from './Logo.styled';

import { ReactComponent as LogoIcon } from '../../../assets/images/icons/logo.svg';

const Logo: React.FC = () => {
  return (
    <LogoLink href="./">
      <LogoIcon width={31} height={18} />
      <CompanyName>ecosolution</CompanyName>
      <CompanySlogan>
        <span className="_green">GREEN</span>ERGY FOR LIFE
      </CompanySlogan>
    </LogoLink>
  );
};

export default Logo;
