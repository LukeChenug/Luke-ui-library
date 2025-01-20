import '../src/styles/globals.css';
import myTheme from './myTheme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#141414',
        },
      ],
    },
    layout: 'fullscreen',
    docs: {
      theme: myTheme,
    },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Components',
          'Example',
          'Examples',
        ],
      },
    },
  },
};

export default preview; 