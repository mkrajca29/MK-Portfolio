module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        base_green: '#859C60',
        base_green_hover: '#5d6d43',
        base_brown: '#312929',
        base_brown_hover: '#433c38',
        base_dark: '#262D3E',
        base_dark_hover: '#1a1f2b',
        base_light: '#9E9E9E',
        base_black: '#14151A',
      },
      width: {
        '368': '368px',
        '448': '448px',
        '18' : '4.5rem',
        '22' : '5.5rem'
      },
      height: {
        '18' : '4.5rem',
        '22' : '5.5rem'
      },
      gridTemplateColumns: {
       '2x': 'minmax(auto, 300px) minmax(auto, 60px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
