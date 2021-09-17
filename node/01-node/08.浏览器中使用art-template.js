//引入http、fs依赖
let http = require('http')
let fs = require('fs')
let template = require('art-template')

//创建实例
let server = http.createServer();

//注册request请求事件
server.on('request',(request,response) => {
    let url = request.url;
    if("/" == url){
        response.setHeader("Content-Type","text/html;charset=utf-8")
        /**
         * 读取模板组装数据
         */
        fs.readFile('./template/info.html', (err,data) => {
            if(data){
                let tel = template.render(data.toString(),{name:'damon',sex:'男',age:25});
                response.end(tel);
            }
        })
    }
})

//绑定端口
server.listen(3000,() => {
    console.log('服务器启动成功')
})
