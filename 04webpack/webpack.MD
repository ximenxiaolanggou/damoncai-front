# Webpack简介

webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。 在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。 它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)

## **webpack** **五个核心概念** 

1. **Entry：**入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. **Output：**输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. **Loader：**Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 (webpack 自 身 只 理 解 JavaScript)

4. **Plugins：**插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩， 一直到重新定义环境中的变量等。

5. **Mode：**模式(Mode)指示 webpack 使用相应模式的配置。

   | 选项        | 描述                                                         | 特点                        |
   | ----------- | ------------------------------------------------------------ | --------------------------- |
   | development | 会将DefinePlugin中process.env.NODE_ENV的值设置为 development。启用 NamedChunksPlugin和NamedModulesPlugin。 | 能让代码本地调试 运行的环境 |
   | production  | 会将DefinePlugin中process.env.NODE_ENV的值设置为 development。启用 NamedChunksPlugin、FlagIncludedChunksPlugin, ModuleConcatenationPlugin,NoEmitOnErrorsPlugin, OccurrenceOrderPlugin,SideEffectsFlagPlugin 和 TerserPlugin。 | 能让代码优化上线 运行的环境 |

   

# Webpack初体验

1. `npm init` 初始化包管理

2. `npm install webpack webpack-cli -g` 全局安装

3. `npm install webpack webpack-cli -D` 本地安装

4. 开发环境：` webpack ./src/index.js -o ./build/built.js --mode=development`

   webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js 整体打包环境为开发环境

**结论：**

> webpack能处理js(包含模块化)/json文件，但不能处理css/img资源



# Webpack打包样式

1. 创建文件

![](./images/1.png)

2. 下载依赖

   ```shell
   npm i css-loader style-loader less-loader less -d
   ```

3. 配置webpack.config.js

   ```js
   /*
     webpack.config.js  webpack的配置文件
       作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
   
       所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
   */
   
   // resolve用来拼接绝对路径的方法
   const { resolve } = require('path');
   
   module.exports = {
       // webpack配置
       // 1. 入口文件
       entry: './src/index.js',
       // 2.输出
       output: {
           // 输出文件名称
           filename: 'built.js',
           // 输出路径
           path: resolve(__dirname,'build')
       },
       // 3.loader配置
       module: {
         rules: [
             // 详细loader配置
             // 不同文件必须配置不同loader处理
             {
                 //匹配到那个文件
                 test: /\.css$/,
                 // 使用哪些loader进行处理
                 use: [
                     // use数组中loader执行顺序：从右到左，从下到上 依次执行
                     // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                     'style-loader',
                     // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                     'css-loader'
                 ]
             },
             {
                 test: /\.less$/,
                 use: [
                     'style-loader',
                     'css-loader',
                     // 将less文件编译成css文件
                     // 需要下载 less-loader和less
                     'less-loader'
                 ]
             }
         ]
       },
       // 4.plugins配置
       plugins: [
   
       ],
       // 模式
       mode: 'development', // 开发模式
       // mode: 'production'
   }
   ```

   



# Webpack打包html

1. 创建文件

   ![](./images/2.png)

2. 下载html打包插件

   ```shell
   npm i html-webpack-plugin -d
   ```

3. webpackconfig.js中引入插件

   ```js
   plugins: [
       //如果不指定 template会创建一个新的index.html文件，并引入打包好的文件
       new HtmlWebpackPlugin({
           template: './src/index.html'
       })
   ],
   ```

   **注意：**如果不指定 template会创建一个新的html文件，并引入打包好的文件

# Webpack打包图片

1. 创建文件

   ![](./images/4.png)

2. 下载依赖

   ```shll
   npm install url-loader file-loader html-loader -D
   ```

3. webpackconfig.js中引入loader

   ```js
   module: {
       rules: [
           {
               test: /\.less$/,
               // 要使用多个loader处理用use
               use: ['style-loader', 'css-loader', 'less-loader']
           },
           {
               // 问题：默认处理不了html中img图片
               // 处理图片资源
               test: /\.(jpg|png|gif)$/,
               // 使用一个loader
               // 下载 url-loader file-loader
               loader: 'url-loader',
               options: {
                   // 图片大小小于8kb，就会被base64处理
                   // 优点: 减少请求数量（减轻服务器压力）
                   // 缺点：图片体积会更大（文件请求速度更慢）
                   limit: 8 * 1024,
                   // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                   // 解析时会出问题：[object Module]
                   // 解决：关闭url-loader的es6模块化，使用commonjs解析
                   esModule: false,
                   // 给图片进行重命名
                   // [hash:10]取图片的hash的前10位
                   // [ext]取文件原来扩展名
                   name: '[hash:10].[ext]'
               },
               type: "javascript/auto"
           },
           {
               test: /\.html$/,
               // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
               loader: 'html-loader'
           }
       ]
   }
   ```

# Webpack打包其他资源

1. 采用阿里图标库

   ![](./images/5.png)

2. 下载依赖

   ```shll
   npm install file-loader -D
   ```

3. webpackconfig.js中引入loader

   ```js
   module: {
       rules: [
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           // 打包其他资源(除了html/js/css资源以外的资源)
           {
               // 排除css/js/html资源
               exclude: /\.(css|js|html|less)$/,
               loader: 'file-loader',
               type: "javascript/auto",
               options: {
                   esModule: false,
               }
           }
       ]
   }
   ```

   

# devServer

1. 安装依赖

   ```shell
   npm install webpack-dev-server -D
   ```

2. webpackconfig.js中添加devServe配置

   ```js
   // 开发服务器 devServe：用来自动化(自动编译，自动打开浏览器，自动刷新浏览器~~~)
   // 特点：只会在内存中编译打包，不会有人和输出
   // 启动devServer指令为：npx webpack-dev-server
   devServer: {
       // 项目构建后路径
       static: resolve(__dirname,'build'),
       // 启动gzip压缩
       compress: true,
       // 端口
       port: 3000,
       // 自动打开浏览器
       open: true
   }
   ```

3. 启动

   ```shell	
   npx webpack-dev-server
   ```

   

# Webpack生产环境配置

```js
/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader的配置
            {
                // 处理less资源
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 处理css资源
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: 'imgs'
                },
                type: "javascript/auto"
            },
            {
                // 处理html中img资源
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                },
                type: "javascript/auto"
            }
        ]
    },
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    }
};
```



# Webpack提取css文件成 单独文件

1. 安装依赖

   ```shell
   npm install mini-css-extract-plugin -D
   ```

2. webpack.config.js配置插件

   ```js
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   
   plugins: [
       // plugins的配置
       new HtmlWebpackPlugin({
           template: './src/index.html'
       }),
       new MiniCssExtractPlugin({
           filename: 'css/built.css'
       })
   ]
   ```

3. webpack.config.js配置插件使用MiniCssExtractPlugin.loader替换style-loader

   ```js
   module: {
       rules: [
           {
               // 处理css资源
               test: /\.css$/,
               use: [
                   // 创建style标签，将样式放入
                   // style-loader
                   // 这个loader取代style-loader,作用：提取js中的css成单独文件
                   MiniCssExtractPlugin.loader,
                   // 将css文件整合到js文件中
                   'css-loader'
               ]
           }
       ]
   }
   ```

4. 打包结果

   ![](./images/6.png)







# Webpack配置css兼容性问题

1. 安装依赖

   ```shell
   npm install postcss-loader@3.0.0 postcss-preset-env@6.7.0 -D
   ```

2. 编写package.json

   ![](./images/7.png)

   

3. 配置webpack.config.js

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   
   // 设置nodejs环境变量
   // process.env.NODE_ENV = 'development'; 
   
   module.exports = {
       entry: './src/js/index.js',
       output: {
           filename: 'js/built.js',
           path: resolve(__dirname, 'build')
       },
       module: {
           rules: [
               {
                   test: /\.css$/,
                   use: [
                       MiniCssExtractPlugin.loader,
                       'css-loader',
                       /*
                         css兼容性处理：postcss --> postcss-loader postcss-preset-env
   
                         帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
   
                         "browserslist": {
                           // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
                           "development": [
                             "last 1 chrome version",
                             "last 1 firefox version",
                             "last 1 safari version"
                           ],
                           // 生产环境：默认是看生产环境
                           "production": [
                             ">0.2%",
                             "not dead",
                             "not op_mini all"
                           ]
                         }
                       */
                       // 使用loader的默认配置
                       // 'postcss-loader',
                       // 修改loader的配置
                       {
                           loader: 'postcss-loader',
                           options: {
                               ident: 'postcss',
                               plugins: () => [
                                   // postcss的插件
                                   require('postcss-preset-env')()
                               ]
                           }
                       }
                   ]
               }
           ]
       },
       plugins: [
           new HtmlWebpackPlugin({
               template: './src/index.html'
           }),
           new MiniCssExtractPlugin({
               filename: 'css/built.css'
           })
       ],
       mode: 'development'
   }
   ```

   

# Webpack Css文件压缩

1. 安装依赖

   ```shell
   npm install postcss-loader postcss-preset-env -D
   ```

2. webpack.config.js中使用插件

   ```js
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
   plugins: [
       new MiniCssExtractPlugin({
           filename: 'css/built.css'
       }),
       new OptimizeCssAssetsWebpackPlugin()
   ]
   ```

3. 打包结果

   ![](./images/8.png)



# Webpack Eslint

1. 安装依赖

   ```shell
   npm install eslint-config-airbnb-base  eslint-plugin-import -D
   ```

2. webpack.config.js中配置loader

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         /*
           语法检查： eslint-loader  eslint
             注意：只检查自己写的源代码，第三方的库是不用检查的
             设置检查规则：
               package.json中eslintConfig中设置~
                 "eslintConfig": {
                   "extends": "airbnb-base"
                 }
               airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
         */
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'eslint-loader',
           options: {
             // 自动修复eslint的错误
             fix: true
           }
         }
       ]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html'
       })
     ],
     mode: 'development'
   };
   ```

3. package.json中配置

   ```json
   "eslintConfig": {
       "extends": "airbnb-base",
       "env": {
           "browser": true
       }
   }
   ```



# Webpack JS兼容性处理

1. 下载依赖

   ```shell
   npm install babel-loader @babel/core @babel/preset-env @babel/polyfill @babel/polyfill -D
   ```

2. webpack.config.js配置

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         /*
           js兼容性处理：babel-loader @babel/core 
             1. 基本js兼容性处理 --> @babel/preset-env
               问题：只能转换基本语法，如promise高级语法不能转换
             2. 全部js兼容性处理 --> @babel/polyfill  
               问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
             3. 需要做兼容性处理的就做：按需加载  --> core-js
         */  
         {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           options: {
             // 预设：指示babel做怎么样的兼容性处理
             presets: [
               [
                 '@babel/preset-env',
                 {
                   // 按需加载
                   useBuiltIns: 'usage',
                   // 指定core-js版本
                   corejs: {
                     version: 3
                   },
                   // 指定兼容性做到哪个版本浏览器
                   targets: {
                     chrome: '60',
                     firefox: '60',
                     ie: '9',
                     safari: '10',
                     edge: '17'
                   }
                 }
               ]
             ]
           }
         }
       ]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html'
       })
     ],
     mode: 'development'
   };
   ```



# Webpack JS代码压缩

1. 当mode采用`production`模式自动压缩

# Webpack Html代码压缩

1. 在html打包插件中配置压缩

   ```js
   plugins: [
       new HtmlWebpackPlugin({
           template: './src/index.html',
           // 压缩html代码
           minify: {
               // 移除空格
               collapseWhitespace: true,
               // 移除注释
               removeComments: true
           }
       })
   ],
   ```

2. 打包结果

   ![](./images/9.png)



# Webpack HMR

1. webpack.config.js

   ```js
   /*
     HMR: hot module replacement 热模块替换 / 模块热替换
       作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块）
         极大提升构建速度
   
         样式文件：可以使用HMR功能：因为style-loader内部实现了~
         js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
           注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
         html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）
           解决：修改entry入口，将html文件引入
   */
   
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = {
       entry: ['./src/js/index.js', './src/index.html'],
       output: {
           filename: 'js/built.js',
           path: resolve(__dirname, 'build')
       },
       module: {
           rules: [
               // loader的配置
               {
                   // 处理less资源
                   test: /\.less$/,
                   use: ['style-loader', 'css-loader', 'less-loader']
               },
               {
                   // 处理css资源
                   test: /\.css$/,
                   use: ['style-loader', 'css-loader']
               },
               {
                   // 处理图片资源
                   test: /\.(jpg|png|gif)$/,
                   loader: 'url-loader',
                   options: {
                       limit: 8 * 1024,
                       name: '[hash:10].[ext]',
                       // 关闭es6模块化
                       esModule: false,
                       outputPath: 'imgs'
                   }
               },
               {
                   // 处理html中img资源
                   test: /\.html$/,
                   loader: 'html-loader'
               },
               {
                   // 处理其他资源
                   exclude: /\.(html|js|css|less|jpg|png|gif)/,
                   loader: 'file-loader',
                   options: {
                       name: '[hash:10].[ext]',
                       outputPath: 'media'
                   }
               }
           ]
       },
       plugins: [
           // plugins的配置
           new HtmlWebpackPlugin({
               template: './src/index.html'
           })
       ],
       mode: 'development',
       devServer: {
           static: resolve(__dirname, 'build'),
           compress: true,
           port: 3000,
           open: true,
           // 开启HMR功能
           // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
           hot: true
       }
   };
   ```



# Webpack source-map

1. webpack.config.js配置

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = {
     entry: ['./src/js/index.js', './src/index.html'],
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         // loader的配置
         {
           // 处理less资源
           test: /\.less$/,
           use: ['style-loader', 'css-loader', 'less-loader']
         },
         {
           // 处理css资源
           test: /\.css$/,
           use: ['style-loader', 'css-loader']
         },
         {
           // 处理图片资源
           test: /\.(jpg|png|gif)$/,
           loader: 'url-loader',
           options: {
             limit: 8 * 1024,
             name: '[hash:10].[ext]',
             // 关闭es6模块化
             esModule: false,
             outputPath: 'imgs'
           }
         },
         {
           // 处理html中img资源
           test: /\.html$/,
           loader: 'html-loader'
         },
         {
           // 处理其他资源
           exclude: /\.(html|js|css|less|jpg|png|gif)/,
           loader: 'file-loader',
           options: {
             name: '[hash:10].[ext]',
             outputPath: 'media'
           }
         }
       ]
     },
     plugins: [
       // plugins的配置
       new HtmlWebpackPlugin({
         template: './src/index.html'
       })
     ],
     mode: 'development',
     devServer: {
       contentBase: resolve(__dirname, 'build'),
       compress: true,
       port: 3000,
       open: true,
       hot: true
     },
     devtool: 'eval-source-map'
   };
   
   /*
     source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）
   
       [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
   
       source-map：外部
         错误代码准确信息 和 源代码的错误位置
       inline-source-map：内联
         只生成一个内联source-map
         错误代码准确信息 和 源代码的错误位置
       hidden-source-map：外部
         错误代码错误原因，但是没有错误位置
         不能追踪源代码错误，只能提示到构建后代码的错误位置
       eval-source-map：内联
         每一个文件都生成对应的source-map，都在eval
         错误代码准确信息 和 源代码的错误位置
       nosources-source-map：外部
         错误代码准确信息, 但是没有任何源代码信息
       cheap-source-map：外部
         错误代码准确信息 和 源代码的错误位置 
         只能精确的行
       cheap-module-source-map：外部
         错误代码准确信息 和 源代码的错误位置 
         module会将loader的source map加入
   
       内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快
   
       开发环境：速度快，调试更友好
         速度快(eval>inline>cheap>...)
           eval-cheap-souce-map
           eval-source-map
         调试更友好  
           souce-map
           cheap-module-souce-map
           cheap-souce-map
   
         --> eval-source-map  / eval-cheap-module-souce-map
   
       生产环境：源代码要不要隐藏? 调试要不要更友好
         内联会让代码体积变大，所以在生产环境不用内联
         nosources-source-map 全部隐藏
         hidden-source-map 只隐藏源代码，会提示构建后代码错误信息
   
         --> source-map / cheap-module-souce-map
   */
   ```

   

# Webpack one of

1. webpack.config.js配置

   ```js
   const { resolve } = require('path');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   // 定义nodejs环境变量：决定使用browserslist的哪个环境
   process.env.NODE_ENV = 'production';
   
   // 复用loader
   const commonCssLoader = [
     MiniCssExtractPlugin.loader,
     'css-loader',
     {
       // 还需要在package.json中定义browserslist
       loader: 'postcss-loader',
       options: {
         ident: 'postcss',
         plugins: () => [require('postcss-preset-env')()]
       }
     }
   ];
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       filename: 'js/built.js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           // 在package.json中eslintConfig --> airbnb
           test: /\.js$/,
           exclude: /node_modules/,
           // 优先执行
           enforce: 'pre',
           loader: 'eslint-loader',
           options: {
             fix: true
           }
         },
         {
           // 以下loader只会匹配一个
           // 注意：不能有两个配置处理同一种类型文件
           oneOf: [
             {
               test: /\.css$/,
               use: [...commonCssLoader]
             },
             {
               test: /\.less$/,
               use: [...commonCssLoader, 'less-loader']
             },
             /*
               正常来讲，一个文件只能被一个loader处理。
               当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                 先执行eslint 在执行babel
             */
             {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                 presets: [
                   [
                     '@babel/preset-env',
                     {
                       useBuiltIns: 'usage',
                       corejs: {version: 3},
                       targets: {
                         chrome: '60',
                         firefox: '50'
                       }
                     }
                   ]
                 ]
               }
             },
             {
               test: /\.(jpg|png|gif)/,
               loader: 'url-loader',
               options: {
                 limit: 8 * 1024,
                 name: '[hash:10].[ext]',
                 outputPath: 'imgs',
                 esModule: false
               }
             },
             {
               test: /\.html$/,
               loader: 'html-loader'
             },
             {
               exclude: /\.(js|css|less|html|jpg|png|gif)/,
               loader: 'file-loader',
               options: {
                 outputPath: 'media'
               }
             }
           ]
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({
         filename: 'css/built.css'
       }),
       new OptimizeCssAssetsWebpackPlugin(),
       new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
           collapseWhitespace: true,
           removeComments: true
         }
       })
     ],
     mode: 'production'
   };
   ```



# Webpack 缓存

1. webpack.config.js

   ```js
   const { resolve } = require('path');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   /*
     缓存：
       babel缓存
         cacheDirectory: true
         --> 让第二次打包构建速度更快
       文件资源缓存
         hash: 每次wepack构建时会生成一个唯一的hash值。
           问题: 因为js和css同时使用一个hash值。
             如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）
         chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
           问题: js和css的hash值还是一样的
             因为css是在js中被引入的，所以同属于一个chunk
         contenthash: 根据文件的内容生成hash值。不同文件hash值一定不一样    
         --> 让代码上线运行缓存更好使用
   */
   
   // 定义nodejs环境变量：决定使用browserslist的哪个环境
   process.env.NODE_ENV = 'production';
   
   // 复用loader
   const commonCssLoader = [
     MiniCssExtractPlugin.loader,
     'css-loader',
     {
       // 还需要在package.json中定义browserslist
       loader: 'postcss-loader',
       options: {
         ident: 'postcss',
         plugins: () => [require('postcss-preset-env')()]
       }
     }
   ];
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       filename: 'js/built.[contenthash:10].js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           // 在package.json中eslintConfig --> airbnb
           test: /\.js$/,
           exclude: /node_modules/,
           // 优先执行
           enforce: 'pre',
           loader: 'eslint-loader',
           options: {
             fix: true
           }
         },
         {
           // 以下loader只会匹配一个
           // 注意：不能有两个配置处理同一种类型文件
           oneOf: [
             {
               test: /\.css$/,
               use: [...commonCssLoader]
             },
             {
               test: /\.less$/,
               use: [...commonCssLoader, 'less-loader']
             },
             /*
               正常来讲，一个文件只能被一个loader处理。
               当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
               先执行eslint 在执行babel
             */
             {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                 presets: [
                   [
                     '@babel/preset-env',
                     {
                       useBuiltIns: 'usage',
                       corejs: { version: 3 },
                       targets: {
                         chrome: '60',
                         firefox: '50'
                       }
                     }
                   ]
                 ],
                 // 开启babel缓存
                 // 第二次构建时，会读取之前的缓存
                 cacheDirectory: true
               }
             },
             {
               test: /\.(jpg|png|gif)/,
               loader: 'url-loader',
               options: {
                 limit: 8 * 1024,
                 name: '[hash:10].[ext]',
                 outputPath: 'imgs',
                 esModule: false
               }
             },
             {
               test: /\.html$/,
               loader: 'html-loader'
             },
             {
               exclude: /\.(js|css|less|html|jpg|png|gif)/,
               loader: 'file-loader',
               options: {
                 outputPath: 'media'
               }
             }
           ]
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({
         filename: 'css/built.[contenthash:10].css'
       }),
       new OptimizeCssAssetsWebpackPlugin(),
       new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
           collapseWhitespace: true,
           removeComments: true
         }
       })
     ],
     mode: 'production',
     devtool: 'source-map'
   };
   ```

   

# Webpack tree sharding

tree shaking：去除无用代码
前提：1. 必须使用ES6模块化  2. 开启production环境
作用: 减少代码体积

1. webpack.config.js

   ```js
   const { resolve } = require('path');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');
   const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   /*
     tree shaking：去除无用代码
       前提：1. 必须使用ES6模块化  2. 开启production环境
       作用: 减少代码体积
   
       在package.json中配置 
         "sideEffects": false 所有代码都没有副作用（都可以进行tree shaking）
           问题：可能会把css / @babel/polyfill （副作用）文件干掉
         "sideEffects": ["*.css", "*.less"]
   */
   
   // 定义nodejs环境变量：决定使用browserslist的哪个环境
   process.env.NODE_ENV = 'production';
   
   // 复用loader
   const commonCssLoader = [
     MiniCssExtractPlugin.loader,
     'css-loader',
     {
       // 还需要在package.json中定义browserslist
       loader: 'postcss-loader',
       options: {
         ident: 'postcss',
         plugins: () => [require('postcss-preset-env')()]
       }
     }
   ];
   
   module.exports = {
     entry: './src/js/index.js',
     output: {
       filename: 'js/built.[contenthash:10].js',
       path: resolve(__dirname, 'build')
     },
     module: {
       rules: [
         {
           // 在package.json中eslintConfig --> airbnb
           test: /\.js$/,
           exclude: /node_modules/,
           // 优先执行
           enforce: 'pre',
           loader: 'eslint-loader',
           options: {
             fix: true
           }
         },
         {
           // 以下loader只会匹配一个
           // 注意：不能有两个配置处理同一种类型文件
           oneOf: [
             {
               test: /\.css$/,
               use: [...commonCssLoader]
             },
             {
               test: /\.less$/,
               use: [...commonCssLoader, 'less-loader']
             },
             /*
               正常来讲，一个文件只能被一个loader处理。
               当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
                 先执行eslint 在执行babel
             */
             {
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                 presets: [
                   [
                     '@babel/preset-env',
                     {
                       useBuiltIns: 'usage',
                       corejs: { version: 3 },
                       targets: {
                         chrome: '60',
                         firefox: '50'
                       }
                     }
                   ]
                 ],
                 // 开启babel缓存
                 // 第二次构建时，会读取之前的缓存
                 cacheDirectory: true
               }
             },
             {
               test: /\.(jpg|png|gif)/,
               loader: 'url-loader',
               options: {
                 limit: 8 * 1024,
                 name: '[hash:10].[ext]',
                 outputPath: 'imgs',
                 esModule: false
               }
             },
             {
               test: /\.html$/,
               loader: 'html-loader'
             },
             {
               exclude: /\.(js|css|less|html|jpg|png|gif)/,
               loader: 'file-loader',
               options: {
                 outputPath: 'media'
               }
             }
           ]
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({
         filename: 'css/built.[contenthash:10].css'
       }),
       new OptimizeCssAssetsWebpackPlugin(),
       new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
           collapseWhitespace: true,
           removeComments: true
         }
       })
     ],
     mode: 'production',
     devtool: 'source-map'
   };
   ```

   

# Webpack code split

## 多入口文件打包

```JS
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 单入口
  // entry: './src/js/index.js',
  entry: {
    // 多入口：有一个入口，最终输出就有一个bundle
    index: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
    // [name]：取文件名
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
};
```

## 多入口文件打包，将同一个公共第三方模块打包成一个chunk文件

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 单入口
  // entry: './src/js/index.js',
  entry: {
    index: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
    // [name]：取文件名
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  /*
    1. 可以将node_modules中代码单独打包一个chunk最终输出
    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
  */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
};
```

## 单入口打包，并将不同文件打包成不同chunk文件

1. webpack.config.js

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = {
     // 单入口
     entry: './src/js/index.js',
     output: {
       // [name]：取文件名
       filename: 'js/[name].[contenthash:10].js',
       path: resolve(__dirname, 'build')
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html',
         minify: {
           collapseWhitespace: true,
           removeComments: true
         }
       })
     ],
     /*
       1. 可以将node_modules中代码单独打包一个chunk最终输出
       2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
     */
     optimization: {
       splitChunks: {
         chunks: 'all'
       }
     },
     mode: 'production'
   };
   ```

2. 入口文件

   ```js
   /*
     通过js代码，让某个文件被单独打包成一个chunk
     import动态导入语法：能将某个文件单独打包
   */
   import(/* webpackChunkName: 'test' */'./test')
       .then(({ mul, count }) => {
       // 文件加载成功~
       // eslint-disable-next-line
       console.log(mul(2, 5));
   })
       .catch(() => {
       // eslint-disable-next-line
       console.log('文件加载失败~');
   });
   ```

   

# Webpack懒加载 

1. js文件

   ```js
   console.log('index.js文件被加载了~');
   
   // import { mul } from './test';
   
   document.getElementById('btn').onclick = function() {
     // 懒加载~：当文件需要使用时才加载~
     // 预加载 prefetch：会在使用之前，提前加载js文件 
     // 正常加载可以认为是并行加载（同一时间加载多个文件）  
     // 预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
     import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
       console.log(mul(4, 5));
     });
   };
   ```



# Webpack external

1. webpack.config.js

   ```shell
   externals: {
   // 拒绝jQuery被打包进来
   jquery: 'jQuery'
   }
   ```



# Webpack dll

1. webpack.config.js

   ```js
   const { resolve } = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   const webpack = require('webpack');
   const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
   
   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'built.js',
       path: resolve(__dirname, 'build')
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html'
       }),
       // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
       new webpack.DllReferencePlugin({
         manifest: resolve(__dirname, 'dll/manifest.json')
       }),
       // 将某个文件打包输出去，并在html中自动引入该资源
       new AddAssetHtmlWebpackPlugin({
         filepath: resolve(__dirname, 'dll/jquery.js')
       })
     ],
     mode: 'production'
   };
   ```

2. webpack.dll.js

   ```js
   /*
     使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
       当你运行 webpack 时，默认查找 webpack.config.js 配置文件
       需求：需要运行 webpack.dll.js 文件
         --> webpack --config webpack.dll.js
   */
   
   const { resolve } = require('path');
   const webpack = require('webpack');
   
   module.exports = {
     entry: {
       // 最终打包生成的[name] --> jquery
       // ['jquery'] --> 要打包的库是jquery
       jquery: ['jquery'],
     },
     output: {
       filename: '[name].js',
       path: resolve(__dirname, 'dll'),
       library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
     },
     plugins: [
       // 打包生成一个 manifest.json --> 提供和jquery映射
       new webpack.DllPlugin({
         name: '[name]_[hash]', // 映射库的暴露的内容名称
         path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
       })
     ],
     mode: 'production'
   };
   ```

   

# 问题

## webpack5用url-loader打包后出现图片打不开、资源重复问题

添加` type: "javascript/auto"`

![](./images/3.png)























