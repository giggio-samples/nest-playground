/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { WebpackPnpExternals } = require('webpack-pnp-externals');

module.exports = function (options) {
  return {
    ...options,
    target: 'node',
    externals: [WebpackPnpExternals()],
    plugins: [
      ...options.plugins,
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
    ],
  };
};
