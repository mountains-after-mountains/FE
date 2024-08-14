/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      tablet: '480px',
      laptop: '768px',
      desktop: '1024px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      fontSize: {
        h1: ['30px', { lineHeight: '39px', fontWeight: '700' }],
        h2: ['26px', { lineHeight: '33.8px', fontWeight: '700' }],
        h3: ['22px', { lineHeight: '30.8px', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '28px', fontWeight: '700' }],
        h5: ['18px', { lineHeight: '25.2px', fontWeight: '600' }],
        b1: ['16px', { lineHeight: '22.4px', fontWeight: '600' }],
        b2: ['14px', { lineHeight: '21px', fontWeight: '400' }],
        b3: ['12px', { lineHeight: '18px', fontWeight: '400' }],
        c1: ['11px', { lineHeight: '15.4px', fontWeight: '400' }],
        c2: ['10px', { lineHeight: '13px', fontWeight: '400' }],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      colors: {
        background: 'hsl(var(--background))',
        surface: 'hsl(var(--surface))',
        border: 'hsl(var(--border))',
        text: 'hsl(var(--text))',
        main: 'hsl(var(--main))',
        active: 'hsl(var(--active))',
        greenText: 'hsl(var(--greenText))',
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        green: {
          100: '#dafeec',
          200: '#b8fad9',
          300: '#81f4bc',
          400: '#43e596',
          500: '#1acd77',
          600: '#0e9f59',
          700: '#10854d',
          800: '#126940',
          900: '#115636',
          950: '#03301d',
        },
        gray: {
          100: '#f6f6f6',
          200: '#e7e7e7',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#454545',
          800: '#3c3c3c',
          900: '#1c1c1c',
        },
        blue: {
          500: '#3487e8',
        },
        red: {
          300: '#f05566',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--main))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'home-banner': "url('/assets/image/bg_banner.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
