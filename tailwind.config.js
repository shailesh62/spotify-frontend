module.exports = {
  mode: 'jit', // Just-in-Time mode for Tailwind CSS (optional, but recommended)
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        'app-black': '#121212', 
      },
      colors: {
        // Extend or override default colors
        'custom-blue': '#3490dc',
      },
      fontFamily: {
        // Extend or override default fonts
        poppins: ['Poppins', 'sans-serif'],

      },
      height:{
        "1/10":"10%",
        "9/10":"90%",
      },
    },
  },
  variants: {
    extend: {
      // Extend or override default variants
    },
  },
  plugins: [
    // Add any custom plugins here
  ],
};
