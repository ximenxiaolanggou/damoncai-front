/**
 * 安装：npm install art-template express-art-template --save
 * 配置：app.engine('art',require('express-art-template'))
 * 使用：
 */
let express = require('express')
let bodyParser = require('body-parser')
let app = express();
let router = require('./router/router')

app.listen(3000,() => {
    console.log('Server Started....')
})

/**
 * 配置 art-template模板
 * 第一个参数表示，当渲染.html结尾文件的时候，使用art-template模板引擎
 */
app.engine('html',require('express-art-template'))
app.use('/public/',express.static('./public/'))
/**
 * 配置post参数解析
 */
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
/**
 * 挂载路由
 */
app.use(router);



app.get('/get',(req,res) => {
    /**
     * get请求通过 request.query获取参数对象
     */
    console.log(req.query)
})

app.post('/post',(req,res) => {
    /**
     * Express中没有封装获取post提交参数的方法需要依赖第三方插件包 body-parser
     * 1.安装 nmp install body-parser --save
     * 2.配置信息 app.use(bodyParser.urlencoded({extended:false}))
     *           app.user(bodyParser.json())
     */
    console.log(typeof req.body,req.body)
})
