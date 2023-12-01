import React from 'react';

import { ReactComponent as PlusIcon } from '../../assets/images/icons/add.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/icons/minus.svg';

import { Answer, Button, ListItem, Question } from './FAQ.syled';

interface IQAndAItemProps {
  id: number;
  question: string;
  answer: string;
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
}

const QAndAItem: React.FC<IQAndAItemProps> = ({
  id,
  question,
  answer,
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(activeSection === id);
  const [className, setClassName] = React.useState<'open' | 'close'>(
    activeSection === id ? 'open' : 'close'
  );

  const handleToggleSection = () => {
    setActiveSection(id);
  };

  React.useEffect(() => {
    if (!(activeSection === id)) {
      setClassName('close');
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);
      setClassName('open');
    }
  }, [activeSection, id, isOpen]);

  return (
    <ListItem>
      <Button
        disabled={isOpen}
        className={isOpen ? 'active' : ''}
        onClick={handleToggleSection}
      >
        <PlusIcon className="plus" />
        <MinusIcon className="minus" />
      </Button>
      <div>
        <Question>{question}</Question>
        <Answer className={className}>{answer}</Answer>
      </div>
    </ListItem>
  );
};

export default QAndAItem;
