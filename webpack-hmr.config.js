/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { WebpackPnpExternals } = require('webpack-pnp-externals');
// const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      WebpackPnpExternals({
        exclude: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      // new RunScriptWebpackPlugin({ name: options.output.filename }),
    ],
  };
};
