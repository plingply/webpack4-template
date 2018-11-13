module.exports = {
    // 打包相对路径的项目 解决样式中资源的路径问题
    publicPath: "../../",
    // 开发环境
    development: {
        // 端口
        port: 8989,
        // 静态资源路径
        publicPath: '/',
        //api 代理地址
        apiURL: '',
        // eslint
        useEslint: false,
        showEslintErrorsInOverlay: false
    },
    // 生产环境
    production: {
        // 端口
        port: 8888,
        // 静态资源路径
        publicPath: '',
        //api 代理地址
        apiURL: ''
    }
}