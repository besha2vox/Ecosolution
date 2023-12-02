import React from 'react';

import { customersData } from '../../utils/data/customersData';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import {
  ImgWrapper,
  Link,
  List,
  ListItem,
  titleStyles,
} from './Customers.styled';

const Customers: React.FC = () => {
  return (
    <Section id="customers">
      <Container>
        <Title type="h2" title="our satisfied customers" styles={titleStyles} />
        <List>
          {customersData.map(({ name, imgX1, imgX2, link }) => (
            <ListItem key={name}>
              <Link href={link} target="_blank" rel="noreferrer">
                <p>{name}</p>
                <ImgWrapper>
                  <img
                    srcSet={`${imgX1} 1x, ${imgX2} 2x`}
                    src={imgX1}
                    alt={name}
                  />
                </ImgWrapper>
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Customers;
