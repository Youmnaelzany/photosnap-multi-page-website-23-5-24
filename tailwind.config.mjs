/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {

    extend: {
      colors: {
        background: {
          'liner': '27deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%',
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}