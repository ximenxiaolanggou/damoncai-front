//引入http依赖
let http = require('http')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    console.log(request,response);
    let url = request.url;
    //只能响应 字符串和二进制数据
    response.write(url);
    response.write('收到请回答');
    response.end();
    //缩写 res.end('hello')
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
