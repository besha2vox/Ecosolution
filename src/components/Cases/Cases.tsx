import React from 'react';

import { casesData } from '../../utils/data/casesData';
import { useWindowWidth } from '../../hooks';

import Slider from './Slider/Slider';
import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Counter,
  SliderInterface,
  Wrapper,
  buttonStyles,
  titleStyles,
} from './Cases.styled';
import IconButton from '../shared/IconButton';

const Cases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);
  const device = useWindowWidth();
  const isMobile = device === 'mobile';

  const handlePrev = () => {
    if (!isMobile && currentIndex <= 1) {
      setCurrentIndex(3);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + casesData.length) % casesData.length
      );
    }
  };

  const handleNext = () => {
    if (!isMobile && currentIndex >= casesData.length - 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % casesData.length);
    }
  };

  return (
    <Section id="cases">
      <Container>
        <Wrapper>
          <Title
            type="h2"
            title="Successful cases of our company"
            styles={titleStyles}
          />
          <SliderInterface>
            <Counter>
              {isMobile ? currentIndex + 1 : currentIndex + 2}{' '}
              <span>/{casesData.length}</span>
            </Counter>
            <IconButton
              handleClick={handlePrev}
              Icon={ArrowLeftIcon}
              styles={buttonStyles}
            />
            <IconButton
              handleClick={handleNext}
              Icon={ArrowRightIcon}
              styles={buttonStyles}
            />
          </SliderInterface>
        </Wrapper>
        <Slider
          slides={casesData}
          currentIndex={currentIndex}
          device={device}
        />
      </Container>
    </Section>
  );
};

export default Cases;
