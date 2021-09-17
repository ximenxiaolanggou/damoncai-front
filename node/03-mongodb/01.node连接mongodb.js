const mongoose = require('mongoose');

//连接MongoDB数据库
mongoose.connect('mongodb://localhost/demo',{userMongoClient:true});

mongoose.Promise = global.Promise;

/**
 * 创建一个模型 ===>就是在设计一个数据库
 * 第一个参数:
 *      传入一个大写名词单数字字符串用来表示你的数据库名称
 *      例如这里的Cat 最终会变成 cats作为数据库的集合名称
 * 第二个参数：
 *      架构对象
 */
let Cat = mongoose.model('Cat',{name:String,age:Number})

let kitty = new Cat({name: 'damon4',age:15})

/**
 * 增
 */
// kitty.save((error,ret) => {
//     if(error){
//         console.log(error)
//     }else {
//         console.log(ret)
//     }
// })
// /**
//  * 查询所有
//  */
// Cat.find((error,ret) => {
//     if(error){
//         console.log(error)
//     }else {
//         console.log(ret)
//     }
// })
//
// /**
//  * 条件查询
//  */
// Cat.find(
//     {name:'damon1'},
//     (error,ret) => {
//     if(error){
//         console.log(error)
//     }else {
//         console.log(ret)
//     }
// })

/**
 * 条件查询
 */
// Cat.findOne(
//     {name:'damon2',age:13},
//     (error,ret) => {
//         if(error){
//             console.log(error)
//         }else {
//             console.log('=========== findOne ==========')
//             console.log(ret)
//         }
//     })

/**
 * 删除数据
 */
// Cat.remove(
//     {name:'damon2',age:13},
//     (error,ret) => {
//         if(error){
//             console.log(error)
//         }else {
//             console.log('=========== remove ==========')
//             console.log(ret)
//         }
//     })

/**
 * 更新
 */
Cat.findByIdAndUpdate(
    '123',
    {name:'hheh'},
    (error,ret) => {
        if(error){
            console.log(error)
        }else {
            console.log('=========== remove ==========')
            console.log(ret)
        }
    })


