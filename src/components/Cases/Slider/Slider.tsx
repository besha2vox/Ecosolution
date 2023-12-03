import React from 'react';

import { TDevice } from '../../../types';
import { openLightbox } from '../../../utils/openLightbox';
import { TCasesSlider } from '../../../utils/data/casesData';

import {
  ArrowIcon,
  CompanyInfo,
  DescriptionBlock,
  DescriptionWrapper,
  Item,
  List,
  SliderWrapper,
  buttonUpStyles,
} from './Slider.styled';
import IconButton from '../../shared/IconButton';

interface SliderProps {
  slides: TCasesSlider;
  currentIndex: number;
  device: TDevice;
}

const Slider: React.FC<SliderProps> = ({ slides, currentIndex, device }) => {
  const [translateX, setTranslateX] = React.useState<string>('0');

  const calculateTransleteX = React.useCallback(
    (currentInx: number) => {
      if (currentInx === 0) {
        setTranslateX('0');
        return;
      }
      if (device === 'mobile') {
        setTranslateX(`-${currentIndex} * 100% - 10px * ${currentIndex}`);
        return;
      }
      if (device === 'tablet') {
        setTranslateX(`-${currentIndex} * 50% - 24px * ${currentIndex / 2}`);
        return;
      }
      if (device === 'desktop') {
        setTranslateX(`-${currentIndex} * 50% - 48px * ${currentIndex / 2}`);
        return;
      }
      setTranslateX('0');
    },
    [currentIndex, device]
  );

  React.useEffect(() => {
    calculateTransleteX(currentIndex);
  }, [calculateTransleteX, currentIndex]);

  return (
    <SliderWrapper>
      <List translateX={translateX}>
        {slides.map(
          ({ address, company, description, date, imgX1, imgX2 }, i) => (
            <Item key={description}>
              <div>
                <img
                  width={596}
                  srcSet={`${imgX1} 1x, ${imgX2} 2x`}
                  src={imgX1}
                  alt={description}
                />
              </div>
              <DescriptionWrapper>
                <DescriptionBlock>
                  <CompanyInfo>
                    <span>{address}</span>{' '}
                    <span>Private Enterprise “{company}”</span>
                  </CompanyInfo>
                  <IconButton
                    isBackgroundFill={true}
                    handleClick={() => openLightbox(imgX1, imgX2, description)}
                    Icon={ArrowIcon}
                    styles={buttonUpStyles}
                  />
                </DescriptionBlock>
                <DescriptionBlock>
                  <p>{description}</p>
                  <p>{date}</p>
                </DescriptionBlock>
              </DescriptionWrapper>
            </Item>
          )
        )}
      </List>
    </SliderWrapper>
  );
};

export default Slider;
