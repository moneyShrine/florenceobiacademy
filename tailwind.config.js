/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/build/img/bg-img.png')",
        'mini-img-1': "url('/build/img/std_1.png')",
        'mini-img-2': "url('/build/img/std_2.png')",
        'mini-img-3': "url('/build/img/std_3.png')",
        'mini-img-4': "url('/build/img/std_4.png')",
        'creche-img': "url('/build/img/creche.png')",
        'nursery-img': "url('/build/img/nursery.png')",
        'primary-img': "url('/build/img/primary.png')",
        'secondary-img': "url('/build/img/secondary.png')",
        'qoute-img': "url('/build/img/qoute_img.jpg')",
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

