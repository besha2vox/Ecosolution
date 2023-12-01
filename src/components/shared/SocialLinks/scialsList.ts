import React from 'react';

import { ReactComponent as FacebookIcon } from '../../../assets/images/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/images/icons/instagram.svg';

export type TSocialList = { name: string; url: string; Icon: React.FC }[];

export const socialList: TSocialList = [
  { name: 'facebook', url: 'https://www.facebook.com/', Icon: FacebookIcon },
  { name: 'instagram', url: 'https://www.instagram.com/', Icon: InstagramIcon },
];
