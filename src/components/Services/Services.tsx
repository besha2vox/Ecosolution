import React from 'react';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import {
  Discription,
  ServiceWrapper,
  ServicesList,
  titleStyles,
} from './Services.styled';

const services = ['Solar', 'Wind', 'Hydro', 'Thermal', 'Nuclear'];

const Services: React.FC = () => {
  return (
    <Section id="service">
      <Container>
        <Title type="h2" title="The services we provide" styles={titleStyles} />
        <ServiceWrapper>
          <Discription>
            Development and implementation of renewable enviroMentally friendly
            energy sources
          </Discription>
          <ServicesList>
            {services.map((servise) => (
              <li key={servise}>
                <p>{servise}</p>
              </li>
            ))}
          </ServicesList>
        </ServiceWrapper>
      </Container>
    </Section>
  );
};

export default Services;
