const express = require('express');
let router = express.Router();

let User = require('./models/user')

router.get('/',(req,res) => {
    res.render('index.html');
})

router.get('/login',(req,res) => {
    res.render('login.html');
})

router.get('/register',(req,res) => {
    res.render('register.html');
})

router.post('/register',(req,res,next) => {
    /**
     * 当调用next的时候，如果传递参数，则直接往后找待有四个参数的应用程序级别中间件
     * 当发生错误时，我们可以调用next传递错误对象
     * 当然就会被全局错误处理中间件匹配到并处理
     */
    next(123)
    let params = req.body;
    User.findOne(
        {
            $or: [
                {email:params.email},
                {nickname:params.nickname}
            ]
        },(error,data) => {
            if(error){
                return res.status(500).send('Net Error...')
            }
            if(data){
                return res.status(200).json({flag:true,message:'email or nickname alerdy exists.'})
            }
           //添加
            new User(params).save((err,ret) => {
                // res.status(200).send('{"flag":true}')
                if(err){
                    return res.status(500).json({flag:true,message:'register fail'})
                }
                res.status(200).json({flag:true}) // express提供一个方法将对象转化为字符串
            })
        }
    )
})

module.exports = router;
