/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '32px',
      },
      colors: {
        'app-base-200': '#EFEEED',
        'app-blue-100': '#5CBCF2',
        'app-blue-200': '#07A4FB',
        'app-blue-300': '#007FC5',
        'app-grey-200': '#B0B0B0',
        'app-grey-300': '#B3B2B2',
        'app-grey-250': '#E8E8E8',
        'grey': '#393837',
        'app-green-100': '#9CD19B',
        'app-green-200': '#A8EA87',
        'app-green-500': '#50BC38',
        'app-green-700': '#1F871C',
        'app-yellow-100': '#FCEBB9',
        'app-yellow-200': '#D4CDA5',
        'app-yellow-300': '#EDB40F',
        'app-yellow-500': '#FFD55C',
        'app-attention-100': '#C9C090',
        'app-attention-300': '#F1CE4D',
        'app-attention-500': '#E9B616',
        'app-attention-600': '#C89710',
        'app-red-200': '#E1B7A9',
        'app-red-400': '#FF8A7F',
        'app-red-500': '#FF5555',
        'app-red-600': '#DB3E4B',
        'base-600': '#393837',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

