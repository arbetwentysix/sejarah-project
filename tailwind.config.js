/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-eiron': '#1C1D1A',
        'yellow-eiron': '#FFC85A',
      },
      fontFamily: {
        geist: ['Geist'],
        notoSans: ['Noto Sans Javanese'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
