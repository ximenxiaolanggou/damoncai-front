//引入http依赖
let http = require('http')
let url = require('url')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    /**
     * 设置重定向
     *      1.设置相应头
     *      2.设置302状态码
     */
    response.statusCode = 302;
    response.setHeader("Location","http://47.100.22.236");
    response.end()
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
