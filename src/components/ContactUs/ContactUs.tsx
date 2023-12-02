import React from 'react';

import Section from '../shared/Section';
import Container from '../shared/Container';
import Title from '../shared/Title';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import { ContactUsWrapper, titleStyles } from './ContactUs.styled';

const ContactUs: React.FC = () => {
  return (
    <Section id="contact-us">
      <Container>
        <Title styles={titleStyles} type="h2" title="Contact us" />
        <ContactUsWrapper>
          <Contacts />
          <ContactForm />
        </ContactUsWrapper>
      </Container>
    </Section>
  );
};

export default ContactUs;
