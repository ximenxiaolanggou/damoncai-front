const express = require('express')
let path = require('path')
let router = require('./router')
let bodyParser = require('body-parser')

let app = express();

/**
 * path:路径操作
 * __dirname :动态获取当前文件的文件夹绝对路径
 * __filename:动态获取当前文件夹的绝对路径
 *
 * ./public 相对于执行node命令所在的终端路径
 * node就是这么设计的
 * 就是说，文件操作路径中，相对路径设置就是相对于执行node命令所在的路径
 * 在该文件的文件夹下使用node执行是没问题，若不在就会报路径找不到问题 node a/b/c/app.js
 */
app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)
app.set('views',path.join(__dirname,'./views')) //默认就是views
app.engine('html',require('express-art-template'))

/**
 * 全局404页面中间件
 */
app.use((req,res) => {
    res.render('404.html')
})

/**
 * 全局错误中间件
 */
app.use((err,req,res,next) => {
    res.status(500).json({flag:false,message:'Unknow Error'})
})

app.listen(3000,() => {
    console.log('Blog Server Started...')
})
