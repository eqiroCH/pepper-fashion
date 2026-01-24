import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-Farben: Rot und elegantes Grau
        primary: {
          DEFAULT: '#c44536', // Pepper Red aus dem Logo
          light: '#d4685b',
          dark: '#a33828',
        },
        pepper: {
          red: '#c44536',
          gray: '#5a5a5a',
          lightgray: '#8a8a8a',
        },
        accent: {
          DEFAULT: '#5a5a5a', // Elegantes Grau
          light: '#7a7a7a',
          dark: '#3a3a3a',
        },
        fashion: {
          cream: '#faf8f5',
          beige: '#f0ebe3',
          warm: '#f5f0e8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Playfair Display',
          'Georgia',
          'serif',
        ],
        display: [
          'Playfair Display',
          'Georgia',
          'serif',
        ],
      },
      letterSpacing: {
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
}
export default config

