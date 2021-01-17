const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: '[name].[hash:10].js'
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].[hash:10].css'
      })
   ]
});
