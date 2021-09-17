//引入http、fs依赖
let http = require('http')
let fs = require('fs')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    let url = request.url;
    /**
     * 访问跟路径 ====> 访问html首页
     * /babay  ====> 访问图片资源
     */
    if("/" == url){
        response.setHeader("Content-Type","text/html;charset=utf-8")
        fs.readFile('../resource/index.html', (err,data) => {
            if(data){
                response.end(data);
            }
        })
    }else if ("/baby"  == url){
        response.setHeader("Content-Type","image/gif")
        fs.readFile('../resource/1.gif', (err,data) => {
            if(data){
                response.end(data);
            }
        })
    }
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
