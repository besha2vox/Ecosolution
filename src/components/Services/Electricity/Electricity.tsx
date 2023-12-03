import React from 'react';

import Title from '../../shared/Title';
import {
  AmountEnergyProduced,
  RectangleWrapper,
  titleStyles,
  Wrapper,
} from './Electricity.styled';

const Electricity: React.FC = () => {
  return (
    <Wrapper>
      <Title
        type="h2"
        title="Electricity we produced for all time"
        styles={titleStyles}
      />
      <RectangleWrapper>
        <AmountEnergyProduced>
          <span>1.134.147.814</span> kWh
        </AmountEnergyProduced>
      </RectangleWrapper>
    </Wrapper>
  );
};

export default Electricity;
