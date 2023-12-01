import React from 'react';

import { Button, IButtonStylesProps } from './IconButton.styled';

interface IIconButtonProps extends IButtonStylesProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handleClick: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({
  Icon,
  handleClick,
  ...props
}) => {
  return (
    <Button onClick={handleClick} {...props}>
      <Icon />
    </Button>
  );
};

export default IconButton;
