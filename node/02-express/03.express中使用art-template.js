/**
 * 安装：npm install art-template express-art-template --save
 * 配置：app.engine('art',require('express-art-template'))
 * 使用：
 */
let express = require('express')

let app = express();

app.listen(3000,() => {
    console.log('Server Started....')
})

/**
 * 配置 art-template模板
 * 第一个参数表示，当渲染.html结尾文件的时候，使用art-template模板引擎
 */
app.engine('html',require('express-art-template'))
app.use('/public/',express.static('./public/'))



app.get('/',(req,res) => {
    /**
     * render('html模板名',模板数据)
     * 第一个参数不能写路径，默认会从项目中的views文件夹中查找
     * 修改默认路径：app.set('views',render函数的默认路径)
     */
    res.render('index.html',{name:'damon'})
})
