let plugs = [
  require('autoprefixer'),
  require('precss'),
  require('cssnano')
];

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    require('postcss-uncss')({
      html: ['./build/**/*.html']
    }),
  );
}

module.exports = {
  plugins: plugs,
  map: {
    inline: false
  }
};
