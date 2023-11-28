export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  fonts: {
    main: {
      light: 'FiraSans-Light', // 300
      regular: 'FiraSans-Regular', // 400
      medium: 'FiraSans-Medium', // 500
    },
    secondary: {
      regular: 'Oswald-Regular', // 400
      medium: 'Oswald-Medium', // 500
      bold: 'Oswald-Bold', // 700
    },
    logo: {
      primary: 'PublicaPlay-Regular',
      secondary: 'Roboto-Regular',
    },
  },
  fontSizes: [
    '10px', // 0
    '12px', // 1
    '14px', // 2
    '16px', // 4
    '18px', // 5
    '20px', // 6
    '24px', // 7
    '28px', // 8
    '32px', // 9
    '33px', // 10
    '36px', // 11
    '48px', // 12
    '64px', // 13
    '100px', // 14
    '164px', // 15
  ],
  colors: {
    accent: '#97D28B',
    secondary: '#173D33',
    light: '#FFFFFF',
  },
  background: {
    primary: '#F3F5FA',
    dropdown: '#173D33BF',
    backdrop: '#173D3340',
    burger: '#DCEFD8',
    dark: '#173D33',
    scrolled: '#FFFFFF',
  },
  transition: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type Theme = typeof theme;
