import React from 'react';

import { scrollToElementById } from '../../utils/scrollToElementById';
import { ReactComponent as ElipseIcon } from '../../assets/images/icons/ellipse-light.svg';
import { Button, Ellipse } from './TextButton.styled';

const Anchor: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button onClick={() => scrollToElementById('contact-us')}>
      {text}
      <Ellipse>
        <ElipseIcon width={14} height={14} />
      </Ellipse>
    </Button>
  );
};

export default Anchor;
