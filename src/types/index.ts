import { RuleSet } from 'styled-components';
import { navList } from '../utils/constants/navList';

export type TDevice = 'mobile' | 'tablet' | 'desktop';

export type TSectionId = (typeof navList)[number]['id'];

export type TStyle = RuleSet<{}>;

export type TDevicePadingMap = {
  [Key in TDevice]: number;
};
export interface IChildrenProps {
  children: React.ReactNode;
}
