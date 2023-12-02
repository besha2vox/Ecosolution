import boshIcon1x from '../../assets/images/x1/Bosh.png';
import zakhidnyiBuhIcon1x from '../../assets/images/x1/ZakhidnyiBuh.png';
import audiIcon1x from '../../assets/images/x1/Audi.png';
import dniproIcon1x from '../../assets/images/x1/Dnipro.png';
import boshIcon2x from '../../assets/images/x2/Bosh.png';
import zakhidnyiBuhIcon2x from '../../assets/images/x2/ZakhidnyiBuh.png';
import audiIcon2x from '../../assets/images/x2/Audi.png';
import dniproIcon2x from '../../assets/images/x2/Dnipro.png';

export const customersData = [
  {
    name: 'Bosh',
    imgX1: boshIcon1x,
    imgX2: boshIcon2x,
    link: 'https://www.bosch.com/',
  },
  {
    name: 'Zakhidnyi Buh',
    imgX1: zakhidnyiBuhIcon1x,
    imgX2: zakhidnyiBuhIcon2x,
    link: 'https://zahbug.com/',
  },
  {
    name: 'Audi',
    imgX1: audiIcon1x,
    imgX2: audiIcon2x,
    link: 'https://www.audi.com/',
  },
  {
    name: 'Dnipro',
    imgX1: dniproIcon1x,
    imgX2: dniproIcon2x,
    link: 'https://dnipro-m.ua/',
  },
] as const;
