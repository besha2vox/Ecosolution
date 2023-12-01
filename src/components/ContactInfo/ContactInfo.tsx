import React from 'react';

import { TDevice, TDevicePadingMap, TStyle } from '../../types';
import { contactsData } from '../../utils/data/contactsData';

import { ContactInfoWrapper } from './ContactInfo.styled';

interface IContactInfoProps {
  device?: TDevice;
  styles?: TStyle;
}

const devicePadingMap: TDevicePadingMap = {
  mobile: 24,
  tablet: 16,
  desktop: 12,
};

const { email, address, addressLink } = contactsData;

const ContactInfo: React.FC<IContactInfoProps> = ({ device, ...props }) => {
  return (
    <ContactInfoWrapper
      style={device && { paddingTop: devicePadingMap[device] }}
      {...props}
    >
      <address>
        <a href={addressLink}>{address}</a>
      </address>
      <a href={`mailto:${email}`}>{email}</a>
      {device !== 'mobile' && <p>ecosolution &copy; 2023</p>}
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
