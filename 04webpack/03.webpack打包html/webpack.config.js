
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
      rules: [
      ]
    },
    plugins: [
        //如果不指定 template会创建一个新的html文件，并引入打包好的文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development', // 开发模式
}
