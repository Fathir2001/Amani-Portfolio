/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1F2233',
          navy: '#2F6F99',
          purple: '#8B5CF6',
          pink: '#F4A7B9',
        },
        background: {
          main: '#FFF9FB',
          lavender: '#F5F1FF',
          card: '#FFFFFF',
        },
        accent: {
          gold: '#D6A756',
          cyan: '#5EDFFF',
          rose: '#FF7DAA',
        },
        text: {
          heading: '#1F2233',
          body: '#4B5563',
          muted: '#6B7280',
          white: '#FFFFFF',
        },
        border: {
          soft: '#E8DFF5',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FFF9FB 0%, #F5F1FF 45%, #FFE4EC 100%)',
        'gradient-button': 'linear-gradient(135deg, #8B5CF6 0%, #FF7DAA 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.85), rgba(245,241,255,0.65))',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(139, 92, 246, 0.12)',
        'glass-hover': '0 30px 80px rgba(139, 92, 246, 0.2)',
        card: '0 4px 24px rgba(139, 92, 246, 0.08)',
        'card-hover': '0 12px 40px rgba(139, 92, 246, 0.18)',
        premium: '0 28px 90px rgba(31, 34, 51, 0.14)',
      },
    },
  },
  plugins: [],
}
