
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

var HOME_PAGE = '/index.js';
var PAGE1 = '/components/1.basics.js';
var PAGE2 = '/components/2.functions.js';
var PAGE3 = '/components/3.customComponents.js';
var PAGE4 = '/components/4.CorrectProps.js';
var PAGE13 = '/components/13.CompLifecycle.jsx';

const config = {
    mode: 'development',
    watch: true,
   entry: {
     main: APP_DIR + PAGE13,
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{ 
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // Transpiles JSX and ES6
         }
       }]
     }
    ]

  }
};

module.exports = config;