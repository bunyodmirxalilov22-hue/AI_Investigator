/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0A0A0B',
          900: '#121214',
          800: '#1B1B1E',
          700: '#26262A',
          600: '#3A3A40',
          500: '#55555C',
          400: '#7A7A82',
          300: '#A4A4AC',
          200: '#D2D2D7',
          100: '#EBEBEF',
          50: '#F6F6F8',
        },
        accent: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          200: '#B3CEFF',
          300: '#82AEFF',
          400: '#4C87FF',
          500: '#2563FF',
          600: '#1A4CDB',
          700: '#153CAD',
          800: '#132F82',
          900: '#122862',
        },
        success: {
          50: '#EDFBF3', 100: '#D3F4E1', 400: '#34C77A', 500: '#1EA860', 700: '#146B3F',
        },
        warning: {
          50: '#FFF8EB', 100: '#FEECC7', 400: '#F5A524', 500: '#D9860F', 700: '#8A560A',
        },
        danger: {
          50: '#FDEEEE', 100: '#FBD5D5', 400: '#EF4444', 500: '#DC2626', 700: '#8F1D1D',
        },
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
        popover: '0 12px 32px -8px rgb(0 0 0 / 0.18)',
      },
      borderRadius: {
        xl: '0.875rem',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(6px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'scale-in': { '0%': { opacity: 0, transform: 'scale(0.97)' }, '100%': { opacity: 1, transform: 'scale(1)' } },
        'pulse-dot': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
      },
      animation: {
        'fade-up': 'fade-up .35s cubic-bezier(.16,1,.3,1) both',
        'fade-in': 'fade-in .25s ease both',
        'scale-in': 'scale-in .2s cubic-bezier(.16,1,.3,1) both',
        'pulse-dot': 'pulse-dot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
