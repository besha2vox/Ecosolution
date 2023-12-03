import windTurbines_1x from '../../assets/images/x1/beautiful-view-wind-turbines-grass-covered-field-captured-holland-min.jpg';
import windTurbines_2x from '../../assets/images/x2/beautiful-view-wind-turbines-grass-covered-field-captured-holland-min.jpg';
import solarPanels_1x from '../../assets/images/x1/beautiful-view-wind-turbines-grass-covered-field-captured-holland-1-min.jpg';
import solarPanels_2x from '../../assets/images/x2/beautiful-view-wind-turbines-grass-covered-field-captured-holland-1-min.jpg';
import biotech_1x from '../../assets/images/x1/beautiful-view-wind-turbines-grass-covered-field-captured-holland-2-min.jpg';
import biotech_2x from '../../assets/images/x2/beautiful-view-wind-turbines-grass-covered-field-captured-holland-2-min.jpg';
import landscape_1x from '../../assets/images/x1/landscape-with-windmills 1-min.jpg';
import landscape_2x from '../../assets/images/x2/landscape-with-windmills 1-min.jpg';
import nuclearPower_1x from '../../assets/images/x1/nuclear-power-plant-center-spain 1-min.jpg';
import nuclearPower_2x from '../../assets/images/x2/nuclear-power-plant-center-spain 1-min.jpg';

export const casesData = [
  {
    address: 'Lviv Region, Radekhiv town',
    company: 'ZAKHIDNYI BUH',
    description: 'Wind Power for auto field irrigation',
    date: 'July 2023',
    imgX1: windTurbines_1x,
    imgX2: windTurbines_2x,
  },
  {
    address: 'Zhytomyr city',
    company: 'Bosch',
    description: 'Solar Panels for industrial use',
    date: 'November 2023',
    imgX1: solarPanels_1x,
    imgX2: solarPanels_2x,
  },
  {
    address: 'Rivne city',
    company: 'Biotech',
    description: 'Thermal modules',
    date: 'October 2023',
    imgX1: biotech_1x,
    imgX2: biotech_2x,
  },
  {
    address: 'Kherson city',
    company: 'HealthyFarm',
    description: 'Wind power',
    date: 'September 2021',
    imgX1: landscape_1x,
    imgX2: landscape_2x,
  },
  {
    address: 'Zaporizhia city',
    company: 'Biotech',
    description: 'Mini nuclear stations',
    date: 'May 2021',
    imgX1: nuclearPower_1x,
    imgX2: nuclearPower_2x,
  },
];

export type TCasesSlider = typeof casesData;
