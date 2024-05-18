/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 2px 0 rgba(0,0,0,0.15)',
        'text-lg': '0 4px 0 rgba(0,0,0,0.15)',
        'text-xl': '0 6px 0 rgba(0,0,0,0.15)',
      },
      opacity: {
        '0': '0', // Fully transparent (existing class)
        '0.1': '0.1', // Custom opacity (adjust value as needed)
        '0.2': '0.2', // Custom opacity (adjust value as needed)
        '0.3': '0.3', // Custom opacity (adjust value as needed)
        '0.4': '0.4', // Custom opacity (adjust value as needed)
        '0.5': '0.5',
        '0.6': '0.6'   // Fully opaque (existing class)
      },
      fontFamily: {
        'roboto-slab': ["Roboto Slab", 'serif'],
        'tilt-neon' : ["Tilt Neon", 'sans-serif'],
        'siliguri' : ["Hind Siliguri", 'sans-serif'],
      },
    },
  },
  plugins: [],
}