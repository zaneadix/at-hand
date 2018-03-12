const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.s[a|c]ss$/,
                use: {
                    loader: 'style!css!sass'
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([{
            from: 'src/assets/**/*',
            to: '',
            flatten: true
        }])
    ]
};