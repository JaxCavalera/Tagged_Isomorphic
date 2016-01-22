require('dotenv').config();
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'src');
var APP_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, '../public');

if (process.env.NODE_ENV === 'developer') {
    module.exports = {
        entry: (ROOT_PATH + '\\client-render.jsx'),
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
        plugins: [
            //  This plugin is used to enable requiring of css etc files
            //  only when loaded in the browser since this config is only
            //  used to bundle the client-side version of the web application
            new webpack.DefinePlugin({
                "process.env": {
                    BROWSER: JSON.stringify(true)
                }
            })
        ]
    };
}
