const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html的插件
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const config = require("../config/index")
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //CSS文件单独提取出来

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseConfig, {
    devtool: 'eval', // 指定加source-map的方式
    devServer: {
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        contentBase: path.join(__dirname, "..", "dev"), //静态文件根目录
        port: config.development.port, // 端口
        host: config.development.host,
        overlay: true,
        compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
        proxy: {
            '/api/*': {
                target: config.development.apiURL
            }
        }
    },
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    module: {
        // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
        rules: [
           
            {
                test: /\.css$/,
                use:  [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: 'postcss-loader' }
                  ]
            },{
                test: /\.less$/,
                use:  [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                  ],
                include: [resolve('src')],
                exclude: /node_modules/
            },{
                test: /\.scss$/,
                use:  [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: 'postcss-loader' },
                    { loader: 'scss-loader' }
                  ],
                include: [resolve('src')],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 多入口的html文件用chunks这个参数来区分
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html'),
            filename: 'index.html',
            hash: true, //防止缓存
            minify: {
                removeAttributeQuotes: true //压缩 去掉引号,
            }
        }),

        new MiniCssExtractPlugin({
            filename: "static/style/[name].css",
            chunkFilename: 'static/style/[name].css'
        }),

        new webpack.HotModuleReplacementPlugin(), //HMR
        new webpack.NamedModulesPlugin() // HMR
    ]
})

module.exports = devWebpackConfig