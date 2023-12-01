import React from 'react';

import { TDevice, TDevicePadingMap, TStyle } from '../../types';

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

const ContactInfo: React.FC<IContactInfoProps> = ({ device, ...props }) => {
  return (
    <ContactInfoWrapper
      style={device && { paddingTop: devicePadingMap[device] }}
      {...props}
    >
      <address>
        <a href="https://maps.app.goo.gl/vKHzX6RgiLm8ws21A">
          79005, Ukraine, Lviv street. Shota Rustaveli, 7
        </a>
      </address>
      <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      {device !== 'mobile' && <p>ecosolution &copy; 2023</p>}
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
