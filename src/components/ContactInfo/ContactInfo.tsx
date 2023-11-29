import React from 'react';

import { TDevice, TDevicePadingMap } from '../../types';

import { ContactInfoWrapper } from './ContactInfo.styled';

interface IContactInfoProps {
  device: TDevice;
}

const devicePadingMap: TDevicePadingMap = {
  mobile: 24,
  tablet: 16,
  desktop: 12,
};

const ContactInfo: React.FC<IContactInfoProps> = ({ device }) => {
  const isMobile = device === 'mobile';

  return (
    <ContactInfoWrapper style={{ paddingTop: devicePadingMap[device] }}>
      <address>
        <a href="https://maps.app.goo.gl/vKHzX6RgiLm8ws21A">
          79005, Ukraine, Lviv street. Shota Rustaveli, 7
        </a>
      </address>
      <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      {!isMobile && <p>ecosolution &copy; 2023</p>}
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
