/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        },
        bloom: {
          pink: '#EC4899',
          hotpink: '#F43F5E',
          softpink: '#FCE7F3',
          yellow: '#F59E0B',
          sunshine: '#FBBF24',
          lightyellow: '#FEF3C7',
          orange: '#F97316',
          coral: '#FB923C',
          green: '#10B981',
          mint: '#D1FAE5',
          cream: '#FFFDF9',
          lavender: '#EDE9FE',
          lilac: '#DDD6FE',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        rounded: ['Fredoka', 'Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(126, 34, 206, 0.08)',
        'card': '0 10px 25px -5px rgba(126, 34, 206, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'hover': '0 20px 35px -5px rgba(126, 34, 206, 0.15), 0 10px 15px -5px rgba(236, 72, 153, 0.12)',
        'pill': '0 4px 14px 0 rgba(147, 51, 234, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
