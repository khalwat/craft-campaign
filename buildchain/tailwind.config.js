// module exports
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      '../src/templates/**/*.{twig,html}',
    ],
    layers: [
      'base',
      'components',
      'utilities',
    ],
    mode: 'layers',
    options: {
      whitelist: [
        './src/css/components/*.css',
      ],
    }
  },
  theme: {
  },
  corePlugins: {},
  plugins: [],
};
