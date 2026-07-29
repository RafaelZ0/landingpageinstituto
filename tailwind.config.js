/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f4f6fa',
          100: '#e8ecf1',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#334155',
          600: '#1e3a8a',
          700: '#1e2a4a',
          800: '#162038',
          900: '#0f172a',
          950: '#080d1a',
        },
        gold: {
          50: '#fbf4e6',
          100: '#f4e3bd',
          300: '#d9a83f',
          400: '#c4901f',
          500: '#a16207',
          600: '#8a5306',
          700: '#6b4005',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(15, 23, 42, 0.35)',
        gold: '0 12px 40px -12px rgba(161, 98, 7, 0.45)',
      },
      backgroundImage: {
        'mesh-navy':
          'radial-gradient(60% 50% at 15% 20%, rgba(30,58,138,0.55) 0%, rgba(15,23,42,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(161,98,7,0.25) 0%, rgba(15,23,42,0) 60%), radial-gradient(70% 60% at 50% 100%, rgba(30,58,138,0.35) 0%, rgba(15,23,42,0) 60%)',
      },
    },
  },
  plugins: [],
}
