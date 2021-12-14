const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin=require("css-minimizer-webpack-plugin");

module.exports={

    entry:{
        app:"./src/index.js",
    },

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:"main.js",
        publicPath: '',
    },

    mode:  "development",

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open:true,
        writeToDisk:true,
      },

    module:{
        rules:[

            {
                test: /\.html$/i,
                loader:"html-loader",
                options:{
                    minimize:true,
                }
            },

            {
                test: /\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                            loader: 'file-loader',
                            options:{
                            outputPath:'images', 
                            name:'[name].[ext]'           
                            }
                        },
                    ]   
            },
        ]
    },

    plugins:[

        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),

        new MiniCssExtractPlugin({
            filename:"css/style.css",
        }),

        new CssMinimizerWebpackPlugin({}),
    
    ]
}