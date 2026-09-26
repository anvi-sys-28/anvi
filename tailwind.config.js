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
        navy: {
          DEFAULT: '#0B1726', // Primary Deep Navy
          dark: '#070F19',
          light: '#142A3D', // Secondary Midnight Blue
          card: '#0F1F33',
          border: '#1E344D',
        },
        gold: {
          DEFAULT: '#C89B3C', // Premium Metallic Gold
          light: '#E5C46A',   // Accent Highlight
          dark: '#9E7728',
          glow: 'rgba(200, 155, 60, 0.25)',
          subtle: 'rgba(200, 155, 60, 0.08)',
        },
        brand: {
          bg: '#F7F8FA',
          white: '#FFFFFF',
          text: '#111827',
          secondary: '#64748B',
          muted: '#94A3B8',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(200, 155, 60, 0.3)',
        'navy-card': '0 20px 40px -15px rgba(11, 23, 38, 0.5)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C46A 0%, #C89B3C 50%, #9E7728 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1726 0%, #142A3D 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, #142A3D 0%, #0B1726 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
