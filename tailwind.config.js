/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    colors: {
      primary: '#1D3260',
      secondary: '#ECF5FC'
    },
    extend: {}
  },
  plugins: []
}
