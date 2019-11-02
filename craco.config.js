const CracoAntDesignPlugin = require('craco-antd');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const WebpackBar = require('webpackbar');
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        module: {
            rules: [
                {
                    test: /\.(?:le|c)ss$/,
                    use: [
                        require.resolve('css-loader'),
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: require.resolve('less-loader'),
                            options: {
                                importLoaders: 1,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [new WebpackBar({ profile: true })],
    },

    plugins: [
        {
            plugin: CracoAntDesignPlugin,
        },
        { plugin: reactHotReloadPlugin },
    ],
};