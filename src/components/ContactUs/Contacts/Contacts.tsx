import React from 'react';

import { contactsData } from '../../../utils/data/contactsData';

import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/call.svg';
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/sms.svg';
import { ReactComponent as MapIcon } from '../../../assets/images/icons/map.svg';
import SocialLinks from '../../shared/SocialLinks';
import { ContactItem, ContactLink, ContactList } from './Contacts.styled';

const { phones, email, address, addressLink } = contactsData;

const Contacts: React.FC = () => {
  return (
    <ContactList>
      <ContactItem>
        <p>Phone:</p>
        <ul>
          {phones.map((phone) => (
            <li>
              <ContactLink href={`tel:${phone}`}>
                <PhoneIcon width={24} height={24} />
                {phone}
              </ContactLink>
            </li>
          ))}
        </ul>
      </ContactItem>
      <ContactItem>
        <p>Email:</p>
        <ContactLink href={`mailto:${email}`}>
          <EmailIcon width={24} height={24} />
          email
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <p>Address</p>
        <ContactLink href={addressLink}>
          <MapIcon width={24} height={24} />
          {address}
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <p>Social Networks:</p>
        <SocialLinks />
      </ContactItem>
    </ContactList>
  );
};

export default Contacts;
