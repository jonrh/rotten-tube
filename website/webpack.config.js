module.exports = {
    entry: "./source/main.js", // What is the main JavaScript file?
    output: {
        path: "dist/", // In what folder should the bundle go?
        filename: "bundle.js" // What should the bundle file be called?
    },

    module: {
        loaders: [
            {
                test: /\.js$/, // tell Webpack to run this on all .js files
                exclude: /node_modules/, // but not in here
                loader: "babel-loader",
                query: {
                    // tells babel-loader we want to use ES6 features
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};