/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./node_modules/flowbite/**/*.js",
   "./components/**/*.{js,vue,ts}",
   "./layouts/**/*.vue",
   "./pages/**/*.vue",
   "./plugins/**/*.{js,ts}",
   "./app.vue",
   "./error.vue",
 ],
  theme: {
    extend: {},
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '2000px',
    },
  },
  plugins: [require('flowbite/plugin')],
  

}
// colors: {
//   '272640': '#272640',
//   '312244': '#312244',
//   '144552': '#144552',
//   '212f45': '#212f45',
//   '272640': '#272640',
//   '272640': '#272640',

// },

