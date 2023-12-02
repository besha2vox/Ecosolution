import React from 'react';

import { faqData } from '../../utils/data/faqData';
import QAndAItem from './QAndAItem';
import { QAndAList } from './FAQ.syled';

const QAndA: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<number>(
    faqData[0].id
  );

  return (
    <QAndAList>
      {faqData.map((props) => {
        return (
          <QAndAItem
            key={props.id}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            {...props}
          />
        );
      })}
    </QAndAList>
  );
};

export default QAndA;
