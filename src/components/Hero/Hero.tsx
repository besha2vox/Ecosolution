import React from 'react';

import { scrollToElementById } from '../../utils/scrollToElementById';
import { useWindowWidth } from '../../hooks';
import { TDevicePadingMap } from '../../types';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import ContactInfo from '../ContactInfo';
import { HeroWrapper } from './Hero.styled';

import imageX1 from '../../assets/images/x1/hero-min.jpg';
import imageX2 from '../../assets/images/x2/hero.jpg';
import TextButton from '../shared/TextButton';

const devicePadingMap: TDevicePadingMap = {
  mobile: 36,
  tablet: 40,
  desktop: 36,
};

const Hero: React.FC = () => {
  const device = useWindowWidth();

  const handleGoToContactUs = () => {
    scrollToElementById('cases');
  };

  return (
    <Section id="main">
      <Container>
        <HeroWrapper>
          <Title type="h2" title="RENEWABLE ENERGY For any task" />
          <p>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <TextButton text="Lern more" handleClick={handleGoToContactUs} />
        </HeroWrapper>
        <ContactInfo device={device} />
        <img
          width={1240}
          srcSet={`${imageX1} 1x, ${imageX2} 2x`}
          src={imageX1}
          alt="wind turbine clean energy"
          style={{ marginTop: devicePadingMap[device] }}
        />
      </Container>
    </Section>
  );
};

export default Hero;
