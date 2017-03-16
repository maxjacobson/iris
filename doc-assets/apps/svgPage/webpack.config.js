/* eslint-env node */
// var webpack = require('webpack');
var path = require('path');
var STYLEGUIDE_DIR = 'node_modules/steadicam';


// Webpack settings for React Docs

module.exports = {
    entry: './doc-assets/apps/svgPage/svgPage.jsx',

    output: {
        filename: 'svgPage.bundle.js',
        path: path.resolve('./docs'),
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: '/node_modules/'},
            { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' },
        ],
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
};
