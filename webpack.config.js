const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: '[name].bundle.[chunkhash].js',
    clean: true,
    path: path.resolve(__dirname, './build'),
    environment: {
      arrowFunction: false,
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      components: path.resolve(__dirname, 'src/FuncComponent/'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    port: 8000,
    client: {
      logging: 'info',
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
