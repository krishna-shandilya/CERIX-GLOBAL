/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, `${i / 100}`])),
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 1px)',
  			sm: 'calc(var(--radius) - 2px)'
  		},
  		colors: {
  			obsidian: '#0B0F0D',
  			forest: '#17231F',
  			'forest-deep': '#17231F',
  			ivory: '#FAF8F3',
  			charcoal: '#2A2D28',
  			parchment: {
  				DEFAULT: '#F2E8D8',
  				soft: '#EDE2CF'
  			},
  			olive: {
  				DEFAULT: '#6E6B3A',
  				soft: '#8A8755',
  				deep: '#55613A'
  			},
  			sage: '#E6E9DA',
  			gold: {
  				DEFAULT: '#C5A059',
  				soft: '#D4B06A',
  				onDark: '#C5A059',
  				onDarkSmall: '#D4B06A'
  			},
  			stone: '#9A988C',
  			'warm-grey': '#6B6A62',
			'hero-accent': 'var(--hero-accent)',
			'hero-pulse': 'var(--hero-pulse)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))'
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)'],
  			body: ['var(--font-body)'],
  			display: ['var(--font-display)'],
			serif: ['var(--font-heading)'],
			sans: ['var(--font-body)'],
  			mono: ['var(--font-mono)']
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'pulse-line': {
  				'0%, 100%': { opacity: '0.15' },
  				'50%': { opacity: '0.5' }
  			},
  			'drift-slow': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-12px)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'pulse-line': 'pulse-line 4s ease-in-out infinite',
  			'drift-slow': 'drift-slow 8s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
