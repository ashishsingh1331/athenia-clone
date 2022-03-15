module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'white': '#FFFFFF',
        'light-gray': '#F5F5F5',
        'light-pink': '#FFE5EB',
        'light-orange': '#FFE6D9',
        'dark-pink': '#D84283',
        'dark-gray':'#313131'
      },
      fontFamily: {
        Baby: ['nautigal'],
      },
      backgroundImage: {
        'model1': "url('/src/images/model1.png')",
        'model2': "url('/src/images/eyelash.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}