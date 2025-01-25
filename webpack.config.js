const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output bundle configuration
  output: {
    filename: 'bundle.js',  // Name of the bundled file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },

  // Development mode configuration
  mode: 'development',

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.css$/,  // Regex to match .css files
        use: ['style-loader', 'css-loader'],  // Loaders to apply
      },
      {
        test: /\.js$/,  // Regex to match .js files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: 'babel-loader',  // Transpile JS with Babel (for ES6+ support)
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template HTML file
    }),
    new Dotenv(),
  ],

  // Dev Server Configuration
  devServer: {
    static: path.join(__dirname, 'dist'),  // Directory to serve
    port: 9000,  // Port to run the server on
    hot: true,  // Enable Hot Module Replacement (HMR)
  },
};
