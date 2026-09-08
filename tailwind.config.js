/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'israel-blue': '#0038b8',
                'israel-blue-light': '#1a5ed8',
                'israel-blue-dark': '#002288',
                'israel-gold': '#d4a017',
                'israel-gold-light': '#f0c030',
                'israel-gold-dark': '#a07010',
                'israel-cyan': '#00b4d8',
            },
            fontFamily: {
                'hebrew': ['"Frank Ruhl Libre"', 'serif'],
                'israel': ['Heebo', 'Assistant', 'sans-serif'],
            },
            keyframes: {
                starPulse: {
                    '0%, 100%': { opacity: '0.03', transform: 'scale(1) rotate(0deg)' },
                    '50%': { opacity: '0.06', transform: 'scale(1.05) rotate(15deg)' },
                },
                ticker: {
                    from: { transform: 'translateX(100vw)' },
                    to: { transform: 'translateX(-100%)' },
                },
                hologram: {
                    '0%, 100%': { opacity: '1' },
                    '33%': { opacity: '0.92' },
                    '66%': { opacity: '0.97' },
                },
            },
            animation: {
                'star-pulse': 'starPulse 8s ease-in-out infinite',
                'ticker': 'ticker 30s linear infinite',
                'hologram': 'hologram 4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}