import React from 'react';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import { ContactUseWrapper, titleStyles } from './ContactUs.styled';

const ContactUs: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContactUseWrapper>
          <Title styles={titleStyles} type="h2" title="Contact us" />
          <Contacts />
          <ContactForm />
        </ContactUseWrapper>
      </Container>
    </Section>
  );
};

export default ContactUs;
