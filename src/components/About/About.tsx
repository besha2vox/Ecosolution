import React from 'react';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import { containerStyle, BlockWrapper } from './About.styled';
import AboutGrid from '../AboutGrid/AboutGrid';

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container styles={containerStyle}>
        <BlockWrapper>
          <Title type="h2" title="Main values of our company" />
          <p>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </BlockWrapper>
        <AboutGrid />
      </Container>
    </Section>
  );
};

export default About;
