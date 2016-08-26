const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./lib/parts');

const PATHS = {
  src: path.join(__dirname, 'src', 'assets', 'js'),
  styles: path.join(__dirname, 'src', 'assets', 'css', 'main.css'),
  public: path.join(__dirname, 'public')
};

const common = {
  entry: {
    src: PATHS.src,
    styles: PATHS.styles
  },
  output: {
    path: PATHS.public,
    filename: 'assets/js/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Adventures of Bro-Cat and Ned'
    })
  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.minify(),
      parts.setupCSS(PATHS.styles)
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.styles),
      parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};

module.exports = validate(config);
