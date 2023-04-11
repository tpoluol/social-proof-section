/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan: ['League Spartan'],
      },
      colors: {
        VeryDarkMagenta: 'hsl(300, 43%, 22%)',
        DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
        LightGrayishMagenta: 'hsl(300, 24%, 96%)',
        SoftPink: 'hsl(333, 80%, 67%)',
      },
    },
  },
  plugins: [],
};
