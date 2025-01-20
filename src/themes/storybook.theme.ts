import { create } from '@storybook/theming/create';

export const darkTheme = create({
  base: 'dark',
  
  // UI
  appBg: '#1a1a1a',
  appContentBg: '#141414',
  appBorderColor: '#333333',
  
  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#1a1a1a',
  
  // Toolbar colors
  barTextColor: '#999999',
  barSelectedColor: '#F7FF98',
  barBg: '#1a1a1a',
  
  // Form colors
  inputBg: '#1a1a1a',
  inputBorder: '#333333',
  inputTextColor: '#ffffff',
  
  // Brand
  brandTitle: 'My UI Library',
  brandUrl: 'https://your-website.com',
  brandTarget: '_self',
  
  // 使用您的主色
  brandImage: undefined, // 如果有 logo 可以在这里设置
  colorPrimary: '#F7FF98',
  colorSecondary: '#F8FFAD',
}); 