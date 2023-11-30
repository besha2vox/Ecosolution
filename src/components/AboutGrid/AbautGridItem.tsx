import React from 'react';

import { TStyle } from '../../types';

import Title from '../Title';
import {
  Description,
  GridItemWrapper,
  subTitlesStyle,
} from './AboutGrid.styled';

interface IAboutGridItemProps {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  styles: TStyle;
}

const AboutGridItem: React.FC<IAboutGridItemProps> = ({
  title,
  Icon,
  description,
  ...props
}) => {
  return (
    <GridItemWrapper {...props}>
      <Title type="h3" title={title} Icon={Icon} styles={subTitlesStyle} />
      <Description>{description}</Description>
    </GridItemWrapper>
  );
};

export default AboutGridItem;
