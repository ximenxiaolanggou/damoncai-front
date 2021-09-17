const express = require('express')

//1.创建服务器应用程序
var app = express()
app.listen(3000,() => {
    console.log('Server started...')
})

//放开公共资源
app.use('/public/',express.static('./public/'))

app.get('/', (req,res) => {
    res.send('hello');
})
