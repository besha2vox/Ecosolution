import React from 'react';

import { ITitleStyledProps, TITLES } from './Title.styled';

interface ITitleProps extends ITitleStyledProps {
  title: string;
  type: 'h1' | 'h2' | 'h3';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface ITitleComponentProps extends Omit<ITitleProps, 'type'> {
  Component: (typeof TITLES)['h1'];
}

const TitleComponent: React.FC<ITitleComponentProps> = ({
  Component,
  title,
  Icon,
  ...props
}) => {
  return (
    <Component {...props}>
      {Icon && <Icon width={24} height={24} />}
      {title}
    </Component>
  );
};

const Title: React.FC<ITitleProps> = ({ type, ...props }) => {
  return <TitleComponent {...props} Component={TITLES[type]} />;
};

export default Title;
