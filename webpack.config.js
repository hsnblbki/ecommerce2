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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: "../",
                        },
                      },
                      "css-loader",
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

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                        {
                            loader: 'file-loader',
                            options:{
                            outputPath:'fonts', 
                            name:'[name].[ext]',
                            esModule:false,           
                            }
                        },
                    ]   
            },

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
            },
        ]
    },

    plugins:[

        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),

        new HtmlWebpackPlugin({
            filename:"product.html",
            template:"./src/product.html"
        }),

        new HtmlWebpackPlugin({
            filename:"checkout.html",
            template:"./src/checkout.html"
        }),

        new MiniCssExtractPlugin({
            filename:"css/style.css",
        }),

        new CssMinimizerWebpackPlugin({}),
    
    ]
}