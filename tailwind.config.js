/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  corePlugins: {
    outline: true,
  },
  content: ["./node_modules/flowbite/**/*.js"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'default': ['UbuntuRegular'],
        'default-bold': ['UbuntuBold'],
      },
      colors: {
        primary: '#26729B',
        secondary: '#F5F5F5',
        accent: '#D9D9D9',
        danger: '#F60404',
        stroke: '#EDEDED',
        border: '#EDEDED',
        success: '#BBE4FB',
        chat: '#f3f3f3',
        'gray-helper': '#818181',
        loading: '#eaebec',
      },
      height: {
        '43': '43px',
        '50': '50px',
        '55': '55px',
        '103': '103px',
      },
      width: {
        '43': '43px',
        '50': '50px',
        '55': '55px',
        '103': '103px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '422': '422px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

