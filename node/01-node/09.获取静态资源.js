//引入http、fs依赖
let http = require('http')
let fs = require('fs')
let template = require('art-template')

//创建实例
http
    .createServer((request,response) => {
    let url = request.url;
    if("/" == url){
        response.setHeader("Content-Type","text/html;charset=utf-8")
        /**
         * 读取模板组装数据
         */
        fs.readFile('./template/info2.html', (err,data) => {
            if(err){
                return  response.end("error");
            }else{
                let tel = template.render(data.toString(),{name:'damon',sex:'男',age:25});
                console.log(tel)
                response.end(tel.toString());
            }
        })
    }else if(url.startsWith("/public")){
        fs.readFile('.' + url, (err,data) => {
            if(err){
                return  response.end("error");
            }else {
                console.log(data.toString())
                response.end(data);
            }
        })
    }else if(url.startsWith('favicon.ico')){
        response.end()
    }
})
    .listen(3000,() => {
    console.log('服务器启动成功')
});

