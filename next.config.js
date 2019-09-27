const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    /* config options here */
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

        return config
    }

})