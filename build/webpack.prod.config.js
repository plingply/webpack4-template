'use strict'

const path = require('path');


const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空打包目录的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html的插件
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const config = require("../config/index")

module.exports = merge(baseConfig, {
	output: {
		publicPath: config.production.publicPath 
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', 'src', 'index.html'),
			filename: 'index.html',
			hash: true,//防止缓存
			minify: {
				removeAttributeQuotes: true,//压缩 去掉引号
				removeComments: true, //删除注释
				collapseWhitespace: true, //去空格
				minifyCSS: true, //压缩CSS
				minifyJS: true, //压缩JS
				removeEmptyAttributes: true //删除空白属性
			}
		}),
		
		new CleanWebpackPlugin([config.removeDistName], {
			root: path.join(__dirname,config.removeDist),
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
					drop_console: false, // 删除所有的 `console` 语句，可以兼容ie浏览器
					collapse_vars: true, // 内嵌定义了但是只用到一次的变量
					reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
				}
			}
		})
	],
	optimization: {
		splitChunks: {
			minSize: 1,
			chunks: "initial",
			name: "vendor"
		}
	}
})
