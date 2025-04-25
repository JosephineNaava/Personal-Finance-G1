/** @type {import('tailwindcss').Config} */
// import tailwindVite from '@tailwindcss/vite';
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    plugins: [],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563eb',
            light: '#3b82f6',
          },
        },
      },
    },
  }