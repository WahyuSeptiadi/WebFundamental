const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./index.html",
           filename: "index.html",
           favicon: "./assets/image/myprofile.png"
       })
   ]
}
