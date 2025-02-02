// tailwind.config.js
export default {
    content: [
      './index.html', // Adjust the path as needed
      './src/**/*.{js,ts,jsx,tsx}', // Adjust the path based on your file structure
      // TODO: fix
      '@/styles/globals.css',
    ],
      // TODO: fix
    theme: {
      extend: {
        fontFamily: {
          garamond: ["Apple Garamond", "serif"],
        },
        colors: {
          'inv-blue': 'rgba(4, 67, 251, 1)',
          'inv-cyan': 'rgba(0, 235, 255, 1)',
          'inv-pink': 'rgba(255, 0, 124, 1)',
          'inv-yellow': 'rgba(255, 164, 13, 1)',
          'grad-yellow': '#fbbc04',
          'grad-light-purple': '#e2affd',
          'grad-light-blue': '#afc1fd',
          'grad-light-green': '#affdba',
        }
      },
    },
    plugins: [],
  }