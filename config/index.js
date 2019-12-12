module.exports = {
    // 打包相对路径的项目 解决样式中资源的路径问题
    publicPath: "/",

    useEslint: true,

    showEslintErrorsInOverlay: true,

    // 开发环境
    development: {
        host: 'localhost',
        // 端口
        port: 8980,
        //api 代理地址
        apiURL: '',
    },
    // 生产环境
    production: {
        // 端口
        port: 8881,
        //api 代理地址
        apiURL: ''
    },

    // 源码路由  根目录
    originPagePath: 'src/views',
    //打包输出路径 相对于当前目录
    buildDirPath: '../',
    buildDirName: 'dist'
}