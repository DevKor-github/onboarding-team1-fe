/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgblue: '#3189F0',
        bggray: '#F2F2F7',
        bgwhite: '#FFFFFF',
        label1: '#2C2C2E',
        label2: '#3D3D3D',
        label3: '#666668',
        label4: '#D9D9D9'
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
