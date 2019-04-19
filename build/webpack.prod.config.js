'use strict'

const path = require('path');
const webpack = require('webpack')


const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空打包目录的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html的插件
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //CSS文件单独提取出来

const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const config = require("../config/index")

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const seen = new Set();
const nameLength = 4;

module.exports = merge(baseConfig, {
    output: {
        filename: 'static/js/[name].[chunkhash:5].js'
    },

    module: {
        // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
        rules: [
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

        new webpack.NamedChunksPlugin(chunk => {

            if (chunk.name) {

                return chunk.name;

            }

            const modules = Array.from(chunk.modulesIterable);


            if (modules.length > 1) {

                const hash = require("hash-sum");

                const joinedHash = hash(modules.map(m => m.id).join("_"));

                let len = nameLength;

                while (seen.has(joinedHash.substr(0, len))) len++;

                seen.add(joinedHash.substr(0, len));

                return `chunk-${joinedHash.substr(0, len)}`;

            } else {

                return modules[0].id;

            }

        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html'),
            filename: 'index.html',
            hash: false, //防止缓存
            minify: {
                removeAttributeQuotes: true, //压缩 去掉引号
                removeComments: true, //删除注释
                collapseWhitespace: true, //去空格
                minifyCSS: true, //压缩CSS
                minifyJS: true, //压缩JS
                removeEmptyAttributes: true //删除空白属性
            }
        }),

        new MiniCssExtractPlugin({
            filename: "static/style/[name].[contenthash:5].css",
            chunkFilename: 'static/style/[id].[name].[contenthash:5].css'
        }),

        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..'),
            verbose: true,
            dry: false
        }),
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: require("postcss-safe-parser"),
            canPrint: true
        }),
        new WebpackParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    beautify: false, //不需要格式化
                    comments: false //不保留注释
                },
                compress: {
                    warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                    drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                    collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                    reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
                }
            }
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        namedChunks: true,
        moduleIds: "hashed",
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minSize: 30000,
                    minChunks: 1,
                    priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
                },
                commons: {
                    test: /[\\/]src[\\/]/,
                    name: 'commons',
                    minSize: 30000,
                    minChunks: 2,
                    priority: -1,
                    reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
                }
            }
        }
    }

})