/*
    index.js：webpack 入口起点文件

    1.运行指令
      开发环境： webpack ./src/index.js -o ./build/built.js --mode=development
               webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境为开发环境
      生产环境： webpack ./src/index.js -o ./build/built.js --mode=production

      生产环境比开发环境多了压缩js文件资源

    2.webpack能处理js(包含模块化)/json文件，但不能处理css/img资源


 */
import demo from './demo.json'

console.log(demo)

function add(x=1,y=2){
    return x + y;
}

console.log(add())
