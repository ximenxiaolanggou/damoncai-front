# meta标签
```html
<meta charset="UTF-8">

    <!--
       meta主要用于设置网页中的一些元数据，元数据不是给用户看
           charset 指定网页的字符集
           name 指定的数据的名称
           content 指定的数据的内容

               keywords 表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开
                   <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>
                   <meta name="keywords" content="网购,网上购物,在线购物,网购网站,网购商城,购物网站,网购中心,购物中心,卓越,亚马逊,卓越亚马逊,亚马逊中国,joyo,amazon">

               description 用于指定网站的描述
                   <meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
                   网站的描述会显示在搜索引擎的搜索的结果中

               title标签的内容会作为搜索结果的超链接上的文字显示
    -->
    <meta name="keyword" content="HTML5,前端,CSS3">
    <meta name="description" content="这是一个非常不错的网站">

    <!--
         <meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
       将页面重定向到另一个网站
   -->
    <meta http-equiv="refresh" content="3;url=https://www.baidu.com/">
    <title>Title</title>
```

# 语义化标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>

<hr>
<!--
    h标签 1 - 6 逐级递减
-->
<h1>一级标签</h1>
<h2>二级标签</h2>
<h3>三级标签</h3>
<h4>四级标签</h4>
<h5>五级标签</h5>
<h6>六级标签</h6>

<hr>
<!--
    hgroup标签用来为标题分组，可以将一组相关的标题同时放入到hgroup
-->
<hgroup>
    <h1>主标题</h1>
    <h2>副标题</h2>
</hgroup>


<hr>
<!--
    p标签表示页面中的一个段落

    p也是一个块元素
 -->
<p>在p标签中的内容就表示一个段落</p>
<p>在p标签中的内容就表示一个段落</p>


<hr>
<!--
      em标签用于表示语音语调的一个加重

      在页面中不会独占一行的元素称为行内元素（inline element）
-->
<p>今天天气<em>真</em>不错！</p>


<hr>
<!--
     strong表示强调，重要内容！
-->
<p>你今天必须要<strong>完成作业</strong>！</p>


<hr>
<!--
     blockquote 表示一个长引用:
     1. 独占一行(快元素)
     2. 首行缩进两个字符
-->
鲁迅说：
<blockquote>这句话我是从来没有说过的！</blockquote>


<hr>
<!--
     q表示一个短引用
     1. 添加双引号
-->
子曰<q>学而时习之，乐呵乐呵！</q>


<hr>
<!--
      br标签表示页面中的换行
-->
<br/>
<br/>
<br/>
br


<hr>
<!--
      块元素（block element）
          - 在网页中一般通过块元素来对页面进行布局
      行内元素（inline element）
          - 行内元素主要用来包裹文字

          - 一般情况下会在块元素中放行内元素，而不会在行内元素中放块元素
          - 块元素中基本上什么都能放
          - p元素中不能放任何的块元素

      浏览器在解析网页时，会自动对网页中不符合规范的内容进行修正
          比如：
              标签写在了根元素的外部
              p元素中嵌套了块元素
              根元素中出现了除head和body以外的子元素
              ... ...
-->


<hr>
<!--
        布局标签（结构化语义标签）
 -->

<!--
   header 表示网页的头部
   main 表示网页的主体部分(一个页面中只会有一个main)
   footer 表示网页的底部
   nav 表示网页中的导航
   aside 和主体相关的其他内容（侧边栏）
   article 表示一个独立的文章
   section 表示一个独立的区块，上边的标签都不能表示时使用section

   div 没有语义，就用来表示一个区块，目前来讲div还是我们主要的布局元素
   span 行内元素，没有任何的语义，一般用于在网页中选中文字

 -->
<header></header>
<main></main>
<footer></footer>

<nav></nav>
<aside></aside>
<article></article>

<section></section>

<div></div>

<span></span>

</body>
</html>
```

# 列表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--
    列表可以分为三类：
        1.有序列表
        2.无序列表
        3.自定义列表

    无序列表，使用ol标签来创建无序列表
        使用li表示列表项

    无序列表，使用ul标签来创建无序列表
        使用li表示列表项

    定义列表，使用dl标签来创建一个定义列表
        使用dt来表示定义的内容
        使用dd来对内容进行解释说明

    列表之间可以互相嵌套
-->

<ul>
    <li>name</li>
    <li>age</li>
    <li>gender</li>
</ul>

<ol>
    <li>name</li>
    <li>age</li>
    <li>gender</li>
</ol>

<dl>
    <dt>小明</dt>
    <dd>男</dd>
    <dd>18</dd>
    <dd>中国</dd>
    <dt>小芳</dt>
    <dd>女</dd>
    <dd>18</dd>
    <dd>中国</dd>
</dl>

<ul>
    <li>一班</li>
    <ol>
        <li>张三</li>
        <li>李四</li>
        <li>王五</li>
    </ol>
    <li>二班</li>
    <ul>
        <li>张三</li>
        <li>李四</li>
        <li>王五</li>
    </ul>
</ul>
</body>
</html>
```



# 超链接

> 打开外部连接 

`<a href="http://www.baidu.com">打开百度</a><br/>`

> 打开内部连接 

`<a href="03.列表.html">打开列表页面</a><br/>`

>target属性：
>    _self:替换自身页面
>    _blank:打开新页面

```html
<a href="03.列表.html" target="_blank">打开列表页面_blank</a><br/>
<a href="03.列表.html" target="_self">打开列表页面_self</a><br/>
<a href="03.列表.html" target="_parent">打开列表页面_parent</a><br/>
<a href="03.列表.html" target="_top">打开列表页面_top</a><br/>
```

>跳转到自身页面某个位置
>href = "#" 跳转到本页面首页
>href = "#id" 跳转到ID所在的属性的标签位置(自己定义跳转到当前页面某人地方)

```html
<p id="name">哈哈1</p>
<a href="#">底部跳转到顶部</a><br>
<a href="#name">底部跳转到id属性为name的标签位置</a>
```



# 图片标签 img

图片标签用于向当前页面中引入一个外部图片使用img标签来引入外部图片，img标签是一个自结束标签img这种元素属于替换元素（块和行内元素之间，具有两种元素的特点）

**属性：**

- src：src 属性指定的是外部图片的路径（路径规则和超链接是一样的）

- alt：alt 图片的描述，这个描述默认情况下不会显示，有些浏览器会图片无法加载时显示搜索引擎会根据alt中的内容来识别图片，如果不写alt属性则图片不会被搜索引擎所收录

- ```
  width 图片的宽度 (单位是像素)
  height 图片的高度
  宽度和高度中如果只修改了一个，则另一个会等比例缩放
  注意：
  	一般情况在pc端，不建议修改图片的大小，需要多大的图片就裁多大
  	但是在移动端，经常需要对图片进行缩放（大图缩小）
  ```

**图片的格式：**

- ```
  jpeg(jpg)
  - 支持的颜色比较丰富，不支持透明效果，不支持动图
  - 一般用来显示照片
  ```

- ```
  gif
  - 支持的颜色比较少，支持简单透明，支持动图
  - 颜色单一的图片，动图
  ```

- ```
  png
  - 支持的颜色丰富，支持复杂透明，不支持动图
  - 颜色丰富，复杂透明图片（专为网页而生）
  ```

- ```
  webp
  - 这种格式是谷歌新推出的专门用来表示网页中的图片的一种格式
  - 它具备其他图片格式的所有优点，而且文件还特别的小
  - 缺点：兼容性不好
  ```

- ```
  base64
  - 将图片使用base64编码，这样可以将图片转换为字符，通过字符的形式来引入图片
  - 一般都是一些需要和网页一起加载的图片才会使用base64
  ```

效果一样，用小的
效果不一样，用效果好的

# iframe

内联框架，用于向当前页面中引入一个其他页面

**属性：**

- src： 指定要引入的网页的路径
- frameborder：指定内联框架的边框
- width：宽带
- height：高度

```html
<iframe src="https://www.qq.com" width="800" height="600" frameborder="0"></iframe>
```



# audio和video

audio 标签用来向页面中引入一个外部的音频文件的

**音视频文件引入时，默认情况下不允许用户自己控制播放停止**

**属性：**

- controls 是否允许用户控制播放
- autoplay 音频文件是否自动播放
- loop 音乐是否循环播放

```html
<audio controls>
    <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ -->
    <source src="./source/audio.mp3">
    <source src="./source/audio.ogg">
    <embed src="./source/audio.mp3" type="audio/mp3" width="300" height="100">
</audio>

<video controls>
    <source src="./source/flower.webm">
    <source src="./source/flower.mp4">
    <embed src="./source/flower.mp4" type="video/mp4">
</video>

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=b00318l66nt" allowFullScreen="true" width="500" height="300"></iframe>
```

