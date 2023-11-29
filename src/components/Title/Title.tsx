import React from 'react';

import { TitlePrimery, TitleSecondary } from './Title.styled';

interface ITitleProps {
  title: string;
  isPrimary?: boolean;
  style?: { [key: string]: string | number };
}

const Titlle: React.FC<ITitleProps> = ({ title, isPrimary, ...props }) => {
  if (isPrimary) {
    return <TitlePrimery {...props}>{title}</TitlePrimery>;
  }

  return <TitleSecondary {...props}>{title}</TitleSecondary>;
};

export default Titlle;
