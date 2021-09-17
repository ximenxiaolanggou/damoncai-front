 //1.通国require引入filesystem
let fs = require('fs')

 /**
  * 参数一:读取文件的路径
  * 参数二：回调函数
  *     成功: error null ,data 数据
  *     失败：error 错误对象，data null
  */
 fs.readFile('./data.txt',function (error,data) {
    console.log(data.toString())
})
