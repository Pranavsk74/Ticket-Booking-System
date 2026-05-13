export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E6",
        fadedOrange: "#E67E22",
        vintageCyan: "#2A9D8F",
        deepRed: "#C0392B",
        tealCyan: "#16A085",
        charcoal: "#2C3E50",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        retro: ['"Courier New"', 'Courier', 'monospace'],
        display: ['"Oswald"', 'sans-serif'],
      },
      backgroundImage: {
        'retro-grid': "linear-gradient(to right, rgba(44, 62, 80, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(44, 62, 80, 0.1) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
