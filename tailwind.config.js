/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090d16',
        surface: {
          50: 'rgba(30, 41, 59, 0.50)',
          100: 'rgba(22, 31, 48, 0.50)',
          200: 'rgba(15, 23, 42, 0.45)',
          300: 'rgba(13, 19, 34, 0.55)',
          400: 'rgba(9, 13, 22, 0.60)',
        },
        brand: {
          primary: '#38bdf8', // sky-400
          accent: '#10b981',  // emerald-500
          indigo: '#818cf8',  // indigo-400
          violet: '#a855f7',  // purple-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal': 'signal 3s ease-in-out infinite',
      },
      keyframes: {
        signal: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
