import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Title from '../Title';

const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title isPrimary={true} title="RENEWABLE ENERGY For any task" />
      </Container>
    </Section>
  );
};

export default Hero;
