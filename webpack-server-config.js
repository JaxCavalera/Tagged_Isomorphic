require('dotenv').config();
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'src');

var baseConfig = require('./webpack.config.js');

/*
    ==================================================
            Prevent node_modules being bundled
              (express server compatibility)
    ==================================================
*/
var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


baseConfig.entry = (ROOT_PATH + '\\server.jsx');

baseConfig.target = 'node';

baseConfig.output = {
    path: ROOT_PATH,
    filename: 'serverBundle.js'
};

baseConfig.externals = nodeModules;

// baseConfig.plugins = [
// ];

//  Exports the updated config which will be used by Webpack
module.exports = baseConfig;
