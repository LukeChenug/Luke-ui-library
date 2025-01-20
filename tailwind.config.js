/** @type {import('tailwindcss').Config} */
const { colorTokens } = require('./src/themes/tokens/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colorTokens.primary.DEFAULT,
          active: colorTokens.primary.active,
          hover: colorTokens.primary.hover,
          
          bg: colorTokens.primary.bg,
          'bg-hover': colorTokens.primary.bgHover,
          
          border: colorTokens.primary.border,
          'border-hover': colorTokens.primary.borderHover,
          
          text: colorTokens.primary.text,
          'text-active': colorTokens.primary.textActive,
          'text-hover': colorTokens.primary.textHover,
        }
      }
    },
  },
  plugins: [],
}

