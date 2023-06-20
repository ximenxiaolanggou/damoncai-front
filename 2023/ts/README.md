# 环境安装
## node 安装
## 全局安装ts npm包
npm i typescript -g
## hello world
1. 创建`01_helloworld.ts` 文件，写上内容 `console.log("Hello TS");`
2. 打开cmd执行 `tsc 01_helloworld.ts`

# TS 基本语法

# TS 编译选项
`tsc xxx.ts -w` 监视某个文件自动生成js文件

## TSC 编译所有文件
1、在文件根目录创建tsconfig.json文件
2、执行tsc命令

### tsconfig.json文件配置
```json
{
  // include指定哪些文件需要编译
  "include": [
    "./src/**/*"
  ],
  // exclude 不编译哪些文件：默认配置["node_modules", "bower_components","jspm_packages"]
//  "exclude": [
//
//  ],
  // extends 继承
  // files 配置需要编译的文件

  // 编译器的选项
  "compilerOptions": {
    // 全局严格检测总开关，默认false
    "strict": true,
    // 指定ts被编译为的ES版本
    "target": "ES6",
    // 指定要使用模块化的规范
    "module": "ES6",
    // 指定项目中使用的库
//    "lib": [],
    // 指定编译后文件所在的目录
    "outDir": "./dist",
    // 将代码合并成一个文件输出到app.js中 ，见全局作用域中的代码合并到同一个文件中
//    "outFile": "./dist/app.js",
    // 默认是否对js文件进行编译，默认为 false
    "allowJs": true,
    // 检测js代码是否符合规范，默认为 false
    "checkJs": true,
    // 是否移除注释，默认为 false
    "removeComments": true,
    // 不生成编译后的文件，默认为 false
    "noEmit": false,
    // 报错不生成编译后文件， 默认为 false
    "noEmitOnError": true,
    // 开启严格模式，默认值为 false
    "alwaysStrict": true,
    // 不允许隐士any,默认 false，如果为true function sum(x:number, y:number) {}参数需要设置类型
    "noImplicitAny": true,
    // 不允许不明确类型this， 默认false，
    "noImplicitThis": false,
    // 严格空值检测，默认false
    "strictNullChecks": false
  }
}
```
## Webpack管理TS
1、创建新的文件夹
2、执行 npm init -y , 生成package.json文件
3、安装依赖，` cnpm i -D webpack webpack-cli typescript ts-loader`
4、根目录创建`webpack.config.js`文件
```json
// 引入包
const path = require('path')


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
                use: 'ts-loader',
                // 排除文件
                exclude: /node_modules/
            }
        ]
    }
}
```
5、根目录创建`tsconfig.json`文件
```json
{
  "compilerOptions": {
    // 全局严格检测总开关，默认false
    "strict": true,
    // 指定ts被编译为的ES版本
    "target": "ES6",
    // 指定要使用模块化的规范
    "module": "ES6",
  }
}
```

6、package.json中添加打包命令，添加build
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```