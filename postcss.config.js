module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-strip-inline-comments': {},
    tailwindcss: './tailwind.config.js',
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.vue', './src/assets/**/*.css'],
      whitelist: ['html', 'body'],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
};
