import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // 主色调
  colorPrimary: '#F7FF98',
  colorSecondary: '#F7FF98',

  // UI
  appBg: '#1D2021',
  appContentBg: '#1D2021',
  appBorderColor: 'rgba(255,255,255,0.1)',
  appBorderRadius: 4,

  // 排版
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // 文字颜色
  textColor: 'rgba(255,255,255,0.7)',
  textInverseColor: '#F7FF98',
  textMutedColor: 'rgba(255,255,255,0.7)',

  // Toolbar 颜色
  barTextColor: 'rgba(255,255,255,0.7)',
  barSelectedColor: '#F7FF98',
  barBg: '#1D2021',

  // Form 颜色
  inputBg: '#1D2021',
  inputBorder: 'rgba(255,255,255,0.1)',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  // 品牌
  brandTitle: 'Sahara UI Library',
  brandUrl: './',
  brandTarget: '_self',
  // 如果想用图片替换整个标题，可以使用：
  // brandImage: '/path/to/logo.png',  // 图片路径

  // 其他
  gridCellSize: 12,
});

addons.setConfig({
  theme,
  sidebar: {
    backgroundColor: '#1D2021',
  },
  toolbar: {
    backgroundColor: '#1D2021',
  },
  enableShortcuts: true,
});