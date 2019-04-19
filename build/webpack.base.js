'use strict'
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //CSS文件单独提取出来
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin') // 复制静态资源的插件
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


let isDevelopment = process.env.NODE_ENV === 'development';

const config = require("../config/index")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function assetsPath(_path_) {
    let assetsSubDirectory;
    if (process.env.NODE_ENV === 'production') {
        assetsSubDirectory = 'static' //可根据实际情况修改
    } else {
        assetsSubDirectory = 'static'
    }
    return path.posix.join(assetsSubDirectory, _path_)
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.development.showEslintErrorsInOverlay
    }
})

module.exports = {
    mode: 'production',
    // development
    context: path.resolve(__dirname, '../'),
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve('dist'),
        filename: 'static/js/[name].[chunkhash:5].js'
    },
    resolve: {
        extensions: [".js", ".css", ".json", ".vue"],
        alias: {
            "vue": "vue/dist/vue.min.js",
            "@": resolve('src')
        } //配置别名可以加快webpack查找模块的速度
    },
    module: {
        // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
        rules: [
            ...(config.development.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [resolve('src')], //限制范围，提高打包速度
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: config.publicPath
                    }
                }, 'happypack/loader?id=css']
            },
            {
                test: /\.less$/,
                use: ['css-hot-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: config.publicPath
                    }
                }, 'happypack/loader?id=less'],
                include: [resolve('src')],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: config.publicPath
                    }
                }, 'happypack/loader?id=saas'],
                include: [resolve('src')],
                exclude: /node_modules/
            },
            {
                //file-loader 解决css等文件中引入图片路径的问题
                // url-loader 当图片较小的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
                test: /\.(png|jpg|jpeg|gif|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: assetsPath('img/[name].[hash:5].[ext]'), // 图片输出的路径
                        limit: 10 * 1024,
                        publicPath: config.publicPath
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name: assetsPath('media/[name].[hash:5].[ext]'),
                        publicPath: config.publicPath
                    }
                }
            },
            {
                test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name: assetsPath('fonts/[name].[hash:5].[ext]'),
                        publicPath: config.publicPath
                    }
                }
            }
        ]
    },
    plugins: [

        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'postcss-loader']
        }),

        new HappyPack({
            id: 'sass',
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'postcss-loader', 'sass-loader']
        }),

        new HappyPack({
            id: 'less',
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'postcss-loader', 'less-loader']
        }),

        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader']
        }),

        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: isDevelopment ? "static/style/[name].css" : "static/style/[name].[contenthash:5].css",
            chunkFilename: isDevelopment ? 'static/style/[name].css' : 'static/style/[id].[name].[contenthash:5].css'
        }),

        new CopyWebpackPlugin([{
            from: path.join(__dirname, '..', 'static'),
            to: path.join(__dirname, '..', 'dist', 'static'),
            ignore: ['.*']
        }]),


        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
        }),

        new webpack.ProvidePlugin({
            $config: [resolve(`src/config/config.${process.env.NODE_ENV}.js`), 'default']
        }),
    ]
}