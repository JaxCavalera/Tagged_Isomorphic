require('dotenv').config();
var path = require('path');
var webpack = require('webpack');
// var fs = require('fs');
var autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname, 'src');
var APP_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, '../build');

var LOCAL_IP = process.env.TAGGED_LOCAL_IP;
var MY_PORT = process.env.TAGGED_LOCAL_PORT;

/*
    ==================================================
            Prevent node_modules being bundled
              (express server compatibility)
    ==================================================
*/
// var nodeModules = {};
//
// fs.readdirSync('node_modules')
//   .filter(function(x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function(mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
//   });

/*
    ==================================================
         Export Settings based on NODE_ENV value
               (developer or production)
    ==================================================
*/
if (process.env.NODE_ENV === 'developer') {
    module.exports =
    {
        entry: (ROOT_PATH + '\\server.jsx'),
        // target: 'node',
        // externals: nodeModules,
        output:
        {
            path: BUILD_PATH,
            filename: 'bundle.js'
        },
        module:
        {
            loaders:
            [
                {
                    test: /\.jsx?$/, // scan for js and jsx files only
                    loader: 'babel',
                    query:
                    {
                        "presets": ["es2015", "react"],
                        "ignore": ["/node_modules/"],
                        "plugins": ["transform-async-to-generator"]
                    }
                },
                {
                    test: /\.css$/, // scan for css files only
                    loader: 'css!postcss-loader',
                    include: APP_PATH,
                    exclude: /node_modules/
                }
            ]
        }
    };
}
