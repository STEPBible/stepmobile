const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('db', 'ttf', 'png');
config.resolver.resolverMainFields.push('browser', 'main');
config.resolver.sourceExts.push('cjs', 'jsx', 'js', 'json', 'ts', 'tsx');

config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
  // https://www.npmjs.com/package/terser#mangle-options
  ecma: 8,
  keep_classnames: true,
  keep_fnames: true,
  module: true,
  mangle: {
    module: true,
    keep_classnames: true,
    keep_fnames: true,
  },
};

module.exports = config;
