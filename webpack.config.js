require('dotenv').config();
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var ROOT_PATH = path.resolve(__dirname, 'src');
var APP_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, '../public');

module.exports = {
    entry: '',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // scan for js and jsx files only
                loader: 'babel',
                query: {
                    "presets": ["es2015", "react", "stage-2"],
                    "ignore": ["/node_modules/"],
                }
            },
            {
                test: /\.css$/, // scan for css files only
                loader: 'style!css!postcss',
                include: APP_PATH,
                exclude: /node_modules/
            }
        ]
    },
    postcss: function() {
        return [autoprefixer({browsers: ['> 0.8%']}), precss];
    },
    plugins: []
};
