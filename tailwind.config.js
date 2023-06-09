// eslint-disable-next-line no-undef
/* eslint-env node */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};
