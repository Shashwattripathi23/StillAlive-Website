import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kalam': ['var(--font-kalam)', 'Kalam', 'cursive'],
        'inter': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'orange': {
          400: '#FFB347',
          500: '#FFB347',
          600: '#E6A13D',
          700: '#D69A36',
        },
        'zinc': {
          950: '#0a0a0a',
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(255, 179, 71, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(255, 179, 71, 0.6)',
          },
        },
      },
      backgroundImage: {
        'noise': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
        'radial-gradient': 'radial-gradient(circle at center, rgba(255, 165, 0, 0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
} satisfies Config
