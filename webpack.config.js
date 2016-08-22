var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
        sourceMapFilename: "[name].js.map",
    },
    module: {
        preLoaders: [
            { test: /\.html$/, loader: 'riotjs' },
            { test: /\.js$/, loader: 'source-map' },
        ],
        loaders: [
            { test: /\.(jpe?g|png|gif|svg|mp4)$/i, loader: 'file'},
            { test: /\.html$|\.js$/, loader: 'babel', query: { presets: 'es2015-riot' }},
            { test: /\.less$/, loader: 'style!css?minimize!postcss!less'},
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
    ],
    devServer: {
        port: 8080
    },
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
}
