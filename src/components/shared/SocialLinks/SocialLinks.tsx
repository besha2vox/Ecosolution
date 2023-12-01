import React from 'react';

import { socialList } from './scialsList';
import { SocialList, SocialLink } from './SocialLinks.styled';

const SocialLinks: React.FC = () => {
  return (
    <SocialList>
      {socialList.map(({ name, url, Icon }) => (
        <li key={name}>
          <SocialLink href={url} target="_blank" rel="noreferrer">
            <Icon />
          </SocialLink>
        </li>
      ))}
    </SocialList>
  );
};

export default SocialLinks;
