//引入http依赖
let http = require('http')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    let url = request.url;
    if(url.indexOf('html') != -1){
        response.setHeader('Content-Type','text/html;charset=utf-8')
    }else if(url.indexOf('plain') != -1){
        response.setHeader('Content-Type','text/plain;charset=utf-8')
    }
    response.end('<h1>Hello world</h1>')
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
