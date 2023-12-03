import React from 'react';

import { serviceData } from '../../utils/data/serviceData';

import { ReactComponent as ArrowIcon } from '../../assets/images/icons/arrow-right.svg';
import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Electricity from './Electricity';
import ServiceDiscription from './ServiceDiscription';
import {
  Discription,
  ServiceButton,
  ServiceWrapper,
  ServicesList,
  titleStyles,
} from './Services.styled';

const Services: React.FC = () => {
  const [currentService, setCurrentService] = React.useState<number | null>(
    null
  );

  return (
    <Section id="service">
      <Container>
        <Electricity />
        <Title type="h2" title="The services we provide" styles={titleStyles} />
        <ServiceWrapper>
          <Discription>
            <p>
              Development and implementation of renewable enviroMentally
              friendly energy sources
            </p>
            {currentService !== null && (
              <ServiceDiscription service={serviceData[currentService]} />
            )}
          </Discription>
          <ServicesList>
            {serviceData.map(({ title }, i) => (
              <li key={title}>
                <ServiceButton
                  className={currentService === i ? 'active' : ''}
                  onClick={() => setCurrentService(i)}
                >
                  <ArrowIcon />
                  {title}
                </ServiceButton>
              </li>
            ))}
          </ServicesList>
        </ServiceWrapper>
      </Container>
    </Section>
  );
};

export default Services;
