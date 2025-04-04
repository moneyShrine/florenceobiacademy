/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./src/**/*.html", "./src/**/*.js"], 
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/img/bg-img.png')",
        'mini-img-1': "url('/assets/img/std_1.png')",
        'mini-img-2': "url('/assets/img/std_2.png')",
        'mini-img-3': "url('/assets/img/std_3.png')",
        'mini-img-4': "url('/assets/img/std_4.png')",
        'creche-img': "url('/assets/img/creche.png')",
        'nursery-img': "url('/assets/img/nursery.png')",
        'primary-img': "url('/assets/img/primary.png')",
        'secondary-img': "url('/assets/img/secondary.png')",
        'qoute-img': "url('/assets/img/qoute_img.jpg')",
      },
      backgroundSize: {
        'height-contain': '100% contain', // Width 100%, height contain
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}

