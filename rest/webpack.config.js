module.exports = {
    entry: "./source/main.js",
    output: {
        path: "dist/", // In what folder should the bundle go?
        filename: "bundle.js" // What should the bundle file be called?
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    // tells babel-loader we want to use ES6 features
                    presets: ['es2015']
                }
            }
        ]
    }
};