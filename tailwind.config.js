import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        oscillate: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)', // Adjust for larger or smaller movement
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-40rem 0',
          },
          '100%': {
            backgroundPosition: '40rem 0',
          },
        },
        fadeIn: {
          '0%, 50%': { opacity: '0' }, // Starts with opacity 0 and remains so for half the duration
          '100%': { opacity: '1' },
        },
        fadeInDelay1: {
          '0%, 70%': { opacity: '0' }, // Starts with opacity 0 and remains so for half the duration
          '100%': { opacity: '1' },
        },
        fadeInDelay2: {
          '0%, 90%': { opacity: '0' }, // Starts with opacity 0 and remains so for half the duration
          '100%': { opacity: '1' },
        },
        fadeToTransparent: {
          '0%, 50%': {
            color: '#2563eb', // starting color (for purple #9333ea, for blue #2563eb)
          },
          '100%': {
            color: 'transparent', // ending color (transparent)
          },
        }
      },
      animation: {
        // ... other animations ...
        'oscillate': 'oscillate 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'fadeIn': 'fadeIn 2s ease-out', 
        'fadeInDelay1': 'fadeIn 3s ease-out',
        'fadeInDelay2': 'fadeIn 4s ease-out',
        'fadeToTransparent': 'fadeToTransparent 3s ease-in-out forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
