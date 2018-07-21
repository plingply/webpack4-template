const express = require("express");
const path = require("path");
const httpProxy = require('http-proxy');
const app = express();
const config = require("../config/index")

// 新建一个代理 Proxy Server 对象  
const proxy = httpProxy.createProxyServer();

//设置静态资源
app.use(express.static(path.resolve(__dirname, "../dist/")));

app.all("/api/*", function (req, res) {
    proxy.web(req, res, { target: config.production.apiURL });
})

app.listen(config.production.port, function () {
	console.log('服务已启动')
})