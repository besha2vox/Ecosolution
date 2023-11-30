import React from 'react';

import { useWindowWidth } from '../../hooks';
import { ABOUT_DATA } from '../../utils/constants/aboutData';

import AboutGridItem from './AbautGridItem';
import { GridList, ImgWrapper, gridOptions } from './AboutGrid.styled';

const AboutGrid: React.FC = () => {
  const isMobile = useWindowWidth() === 'mobile';
  if (isMobile) {
    console.log({ isMobile });
  }

  const grid = {
    row: 1,
    column: 0,
  };

  return (
    <GridList>
      {ABOUT_DATA.map((props) => {
        if (grid.column === 3) {
          grid.row += 1;
          grid.column = 1;
        } else {
          grid.column += 1;
        }

        if (props.title) {
          return (
            <AboutGridItem
              styles={gridOptions(grid.row, grid.column)}
              key={props.title}
              {...props}
            />
          );
        }
        if (props.alt) {
          return (
            !isMobile && (
              <ImgWrapper
                styles={gridOptions(grid.row, `${grid.column} / span 2`)}
              >
                <img
                  width={1240}
                  srcSet={`${props.imgX1} 1x, ${props.imgX2} 2x`}
                  src={props.imgX1}
                  alt={props.alt}
                />
              </ImgWrapper>
            )
          );
        }

        return '';
      })}
    </GridList>
  );
};

export default AboutGrid;
