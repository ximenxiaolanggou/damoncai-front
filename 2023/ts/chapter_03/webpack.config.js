// 引入包
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所以目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: 'bundle.js'
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 兼容的目标浏览器
                                        targets: {
                                            "chrome":"88"
                                        },
                                        // core js 版本
                                        "corejs":"3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                // 排除文件
                exclude: /node_modules/
            }
        ]
    },

    // webpack 插件
    plugins: [
        new HTMLWebpackPlugin({
            title: '自定义title',
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ],

    // 用来设置引用文件
    resolve: {
        extensions: ['.ts', '.js']
    }
}