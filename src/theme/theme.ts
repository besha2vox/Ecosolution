export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  fonts: {
    main: {
      light: 'FiraSans-Light', // 300
      regular: 'FiraSans-Regular', // 400
      medium: 'FiraSans-Medium', // 500
    },
    title: {
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
    '16px', // 3
    '18px', // 4
    '20px', // 5
    '24px', // 6
    '28px', // 7
    '32px', // 8
    '33px', // 9
    '36px', // 10
    '48px', // 11
    '64px', // 12
    '100px', // 13
    '164px', // 14
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
