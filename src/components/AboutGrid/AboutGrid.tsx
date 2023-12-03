import React from 'react';

import { useWindowWidth } from '../../hooks';
import { ABOUT_DATA } from '../../utils/data/aboutData';

import AboutGridItem from './AbautGridItem';
import { GridList, ImgWrapper, gridOptions } from './AboutGrid.styled';

const AboutGrid: React.FC = () => {
  const isMobile = useWindowWidth() === 'mobile';

  const options = {
    img: { column: '3 / span 2', order: 3 },
    description: { column: 1, order: 1 },
  };

  return (
    <GridList>
      {ABOUT_DATA.map(({ img, description }, i) => {
        if (i % 2 === 0) {
          options.img.column = '3 / span 2';
          options.description.column = 1;
          options.img.order = (i + 1) * 3;
          options.description.order = (i + 1) * 3 - 2;
        } else {
          options.img.column = '1 / span 2';
          options.description.column = 2;
          options.img.order = (i + 1) * -2;
          options.description.order = (i + 1) * 3;
        }

        return (
          <>
            {!isMobile && (
              <ImgWrapper
                key={img.alt}
                styles={gridOptions(i + 1, `${options.img.column}`)}
              >
                <img
                  width={1240}
                  srcSet={`${img.imgX1} 1x, ${img.imgX2} 2x`}
                  src={img.imgX1}
                  alt={img.alt}
                />
              </ImgWrapper>
            )}
            {description.map((props, i) => {
              return (
                <AboutGridItem
                  styles={gridOptions(i + 1, options.description.column + i)}
                  key={props.title}
                  {...props}
                />
              );
            })}
          </>
        );
      })}
    </GridList>
  );
};

export default AboutGrid;
