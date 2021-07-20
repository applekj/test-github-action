const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./common')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': `'prod'`
        })
    ]
})
