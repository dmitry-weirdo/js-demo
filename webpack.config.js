// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },

    // babel setup: for any js files except from /node_modules/ folder, apply babel transpilation
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};