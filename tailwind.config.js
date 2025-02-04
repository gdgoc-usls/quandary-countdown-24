// tailwind.config.js TODO: check first if root variables in globals.css is working
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

        }
      },
    },
    plugins: [],
  }