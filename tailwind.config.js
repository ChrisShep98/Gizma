/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./views/partials/*.ejs",
    "./views/*.ejs"
  ],
  theme: {
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        sourceSans: "'Source Sans Pro', sans-serif;"
      },
      backgroundImage: {
        'bglogin': "url('/imgs/bgphoto2.jpg')",
        'bgProfile': "url('/imgs/emptygym.jpg')",
        'bgStrength': "url('/imgs/arnold.jpg')",
        'profilePicEx': "url('/imgs/picOfMe.jpg"
      },
      width: {
        popup: '48rem'
      },
      padding: {
        picOfMePadding: '50px 60px'
      },
      borderRadius: {
        picRadius: '50%'
      },
      backgroundPosition:{
        picBgPos: '-163px -10px'
      },
      backgroundSize:{
        picSize: '150px'
      }
    },
  },
  plugins: [],
}
