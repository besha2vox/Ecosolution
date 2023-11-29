export type TDevice = 'mobile' | 'tablet' | 'desktop';

export type TStyle = { [key: string]: string | number };

export type TDevicePadingMap = {
  [Key in TDevice]: number;
};
export interface IChildrenProps {
  children: React.ReactNode;
}
