import React from 'react';
import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import {
  AmountEnergyProduced,
  titleStyles,
  containerStyles,
} from './Electricity.styled';

const Electricity: React.FC = () => {
  return (
    <Section>
      <Container styles={containerStyles}>
        <Title
          type="h2"
          title="Electricity we produced for all time"
          styles={titleStyles}
        />
        <AmountEnergyProduced>
          <span>1.134.147.814</span> kWh
        </AmountEnergyProduced>
      </Container>
    </Section>
  );
};

export default Electricity;
