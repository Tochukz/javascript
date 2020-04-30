var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};

/**
 * Note that the script or code is  piped through each of the loader in an array from RIGHT to LEFT.
 * For example in the property use: ['style-loader', 'css-loader', 'sass-loader'], the code is passed to sass-loader first which compiles SCSS to CSS,
 * after than it is passed to css-loader which updated the imports and url calls, minify the css code and wraps the code in a commonJS module so that webpack can read it 
 * and finally the code goes through the style-loader which injects the style to the head section of the DOM.
 */