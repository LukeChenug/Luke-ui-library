import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'My UI Library',
  brandUrl: 'https://example.com',
  brandTarget: '_self',

  // UI
  appBg: '#141414',
  appContentBg: '#141414',
  barBg: '#141414',
  
  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#141414',
  
  // Toolbar colors
  barTextColor: '#ffffff',
  barSelectedColor: '#F7FF98',
  
  // Form colors
  inputBg: '#2f2f2f',
  inputTextColor: '#ffffff',
  
  // Brand
  colorPrimary: '#F7FF98',
  colorSecondary: '#F8FFAD',
}); 