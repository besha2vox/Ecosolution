export type TDevice = 'mobile' | 'tablet' | 'desktop';

export type TDevicePadingMap = {
  [Key in TDevice]: number;
};
export interface IChildrenProps {
  children: React.ReactNode;
}
