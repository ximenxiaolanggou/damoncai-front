//引入http依赖
let http = require('http')
let url = require('url')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    /**
     * 第二个参数，设置为true会将参数转换为对象
     */
    let parseObj = url.parse(request.url,true)
    console.log(parseObj)
    response.end(JSON.stringify(parseObj.query))
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
