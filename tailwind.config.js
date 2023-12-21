/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,vue}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#bfdbff',
          300: '#99c5ff',
          400: '#4d9aff',
          500: '#006fff',
          600: '#0061e6',
          700: '#004d99',
          800: '#003a73',
          900: '#00274d'
        },
        slate: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#252f3f',
          900: '#161e2e'
        }
      }
    }
  }
}
