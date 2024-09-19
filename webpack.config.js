/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-09-12 09:57:34
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-09-13 10:58:18
 * @FilePath: \newWebpack\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入node的路径path模块
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')
// import { VueLoaderPlugin } from "vue-loader/dist/index";
const vue = require("vue-loader/dist/index")

module.exports = {
    //指定项目的模式 production:生产环境 development:开发环境
    mode: 'development',
    // entry入口文件地址
    entry: "./src/index.js",
    // output输出文件

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // 自定义静态资源文件名
        assetModuleFilename: "images/[hash:10][ext][query]",
        // 在生成文件之前清空output目录
        clean: true
    },
    resolve: {
        alias: {
            // 约定：使用@表示src文件所在路径
            '@': path.resolve(__dirname, 'src')
        }
    },
    // loader相关配置
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                // 正则匹配文件名
                test: /\.css$/,
                // 使用的loader处理文件，执行顺序是从下到上
                use: [
                    // 创建style标签，插入到head中
                    // 'style-loader',
                    // 如果使用了mini-css-extract-plugin插件，就不需要创建style标签插入head中了
                    MiniCssExtractPlugin.loader,
                    // 加载css相关文件，转换成能识别的js文件
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    // 配置预加载样式postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer")
                                ]
                            }
                        }
                    },
                ]
            },
            {
                // 正则匹配文件名
                test: /\.less$/,
                // 使用的loader处理文件，执行顺序是从下到上
                use: [
                    // 创建style标签，插入到head中
                    'style-loader',
                    // 加载css相关文件，转换成能识别的js文件
                    'css-loader',
                    // 使用less-loader将less文件转换成css文件
                    'less-loader'
                ]
            },
            {
                // 正则匹配文件名
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb，就会被base64编码
                    // 优点：减少请求次数，减轻服务器压力
                    // 缺点：js体积变大，速度变慢
                    limit: 8 * 1024,
                    // 问题：url-loader默认使用es6模块解析，而html-loader引入图片是common.js，解析时会出现【object module】
                    // 解决：关闭url-loader的es6模块化，使用common.js解析
                    esModule: false,
                    // 自定义命名，取hash值的前十位
                    name: '[hash:10].[ext]'
                }
            },
            // 处理html中的图片，让后续的loader进行解析
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:10].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [["@babel/plugin-transform-runtime"]],
                            //开启缓存
                            cacheDirectory: true
                        },
                    }
                ]
            },
        
        ]
    },
    stats: {
        children: true
    },
    // plugins插件相关配置
    plugins: [
        new HtmlWebpackPlugin(
            {
                // html模板文件的位置，打包完成后会在dist文件夹下生成index.html文件，并且会默认的引入bundle.js
                template: './public/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new ESlintPlugin(
        //     {
        //     // 指定检查文件的根目录
        //     context: path.resolve(__dirname, "src"),
        //   }
        // ),
        new vue.VueLoaderPlugin()
    ],
    optimization: {
        // 开发环境下启用css优化
        minimize: true,
        minimizer: [
            // 使用cssnano优化和压缩css
            new CssMinimizerPlugin()
        ]
    },
    devServer: {
        open: true, // 自动打开浏览器
        port: 3000, // 设置端口号
        hot: true,
    },
    devtool: 'inline-source-map',

}
