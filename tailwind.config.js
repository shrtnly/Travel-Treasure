/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#293359',
          'navy-dark': '#1A223E',
          'navy-light': '#3B487A',
          gold: '#E9B13D',
          'gold-dark': '#C99225',
          'gold-light': '#F3C564',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          darkbg: '#0F172A',
          slate: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'corporate': '0 10px 30px -10px rgba(41, 51, 89, 0.08)',
        'corporate-hover': '0 20px 40px -15px rgba(41, 51, 89, 0.15)',
        'gold-glow': '0 0 20px rgba(233, 177, 61, 0.3)',
      },
    },
  },
  plugins: [],

};
