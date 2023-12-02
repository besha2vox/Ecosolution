import React from 'react';

import { ReactComponent as ArrowIcon } from '../../../assets/images/icons/arrow-right.svg';
import { Button, Ellipse } from './TextButton.styled';

interface ITextButtonProps {
  text: string;
  handleClick?: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({ text, handleClick }) => {
  return (
    <Button onClick={handleClick}>
      {text}
      <Ellipse>
        <ArrowIcon width={16} height={16} />
      </Ellipse>
    </Button>
  );
};

export default TextButton;
