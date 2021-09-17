/*
    nodemon 实现服务自动重启
        1.安装依赖 npm install --global nodemon
        2.nodemon 启动文件
 */
let express = require('express')

let app = express();

app.listen(3000,() => {
    console.log('Server Started....')
})

app.get('/',(req,res) => {
    res.send('hello')
})
