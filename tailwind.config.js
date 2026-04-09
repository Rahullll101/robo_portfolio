/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        primary: '#2563EB',
        secondary: '#14B8A6',
        accent: '#22D3EE',
        highlight: '#A78BFA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.25)',
        card: '0 20px 50px rgba(10, 15, 30, 0.4)',
      },
      backgroundImage: {
        'radial-futuristic':
          'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 40%), radial-gradient(circle at 85% 75%, rgba(20, 184, 166, 0.22), transparent 42%), radial-gradient(circle at 50% 120%, rgba(167, 139, 250, 0.18), transparent 45%)',
      },
    },
  },
  plugins: [],
}

