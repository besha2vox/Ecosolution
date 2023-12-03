import React from 'react';

import { TService } from '../../../utils/data/serviceData';
import { openLightbox } from '../../../utils/openLightbox';

import {
  ArrowIcon,
  Description,
  ImgWrapper,
  Wrapper,
  buttonStyles,
  titleStyles,
} from './ServiceDiscription.styled';
import Title from '../../shared/Title';
import IconButton from '../../shared/IconButton';

interface IServiceDiscriptionProps {
  service: TService;
}

const ServiceDiscription: React.FC<IServiceDiscriptionProps> = ({
  service,
}) => {
  const { title, imgX1, imgX2, description } = service;

  return (
    <Wrapper>
      <IconButton
        Icon={ArrowIcon}
        handleClick={() => openLightbox(imgX1, imgX2, title)}
        isBackgroundFill
        styles={buttonStyles}
      />
      <Title type="h3" title={`${title} Energy`} styles={titleStyles} />
      <ImgWrapper>
        <img srcSet={`${imgX1} 1x, ${imgX2} 2x`} src={imgX2} alt={title} />
      </ImgWrapper>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default ServiceDiscription;
