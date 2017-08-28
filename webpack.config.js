var path = require('path');

module.exports = {
    entry: './src/component.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] }
        ]
    }
};