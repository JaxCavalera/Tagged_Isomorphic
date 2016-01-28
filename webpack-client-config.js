require('dotenv').config();
var path = require('path');

var ROOT_PATH = path.resolve(__dirname, 'src');

var baseConfig = require('./webpack.config.js');

baseConfig.entry = (ROOT_PATH + '\\client-render.jsx');

module.exports = baseConfig;
