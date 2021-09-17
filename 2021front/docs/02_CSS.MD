# 选择器

## 常规选择器

1. 元素选择器:   标签名{}
2. ID选择器：#id属性值{}
3. 类选择器：.class属性值{}
4. 通配选择器：*{}

## 复合选择器

1. 交集选择器：div.red{}
2. 并集选择器： h1, span,#b1{}

## 关系选择器

1. 子元素选择器(父元素 > 子元素)：div.box > span{}
2. 后代元素选择器(祖先 后代)：div span {}
3. 选择下一个兄弟： p + span{}
4. 选择下边所有的兄弟： p ~ span{}

## 属性选择器

[属性名] 选择含有指定属性的元素
[属性名=属性值] 选择含有指定属性和属性值的元素
[属性名^=属性值] 选择属性值以指定值开头的元素
[属性名$=属性值] 选择属性值以指定值结尾的元素
 [属性名*=属性值] 选择属性值中含有某值的元素的元素

```css
/* p[title]{ */
/* p[title=abc]{ */
/* p[title^=abc]{ */
/* p[title$=abc]{ */
p[title*=e]{
    color: orange;
}
```

## 伪类选择器

伪类（不存在的类，特殊的类）

- 伪类用来描述一个元素的特殊状态，比如：第一个子元素、被点击的元素、鼠标移入的元素...

- 伪类一般情况下都是使用:开头

   :first-child 第一个子元素
   :last-child 最后一个子元素
    :nth-child() 选中第n个子元素
    特殊值：
         n 第n个 n的范围0到正无穷
         2n 或 even 表示选中偶数位的元素
         2n+1 或 odd 表示选中奇数位的元素

  ​	**以上这些伪类都是根据所有的子元素进行排序**

  ​	:first-of-type
  ​    :last-of-type
  ​     :nth-of-type()

  ​	 **这几个伪类的功能和上述的类似，不通点是他们是在同类型元素中进行排序**

  ​	 :not() 否定伪类

  ​     **将符合条件的元素从选择器中去除**

    ```css
  ul > li:first-child{
      color: red;
  } 
  
  ul > li:last-child{
  	color: red;
  }
  
  ul > li:nth-child(2n+1){
  	color: red;
  }
  
  ul > li:nth-child(even){
  	color: red;
  }
  
  ul > li:first-of-type{
  	color: red;
  }
  
  ul > li:not(:nth-of-type(3)){
      color: yellowgreen;
  }
    ```



## a元素伪类

```css
//:link 用来表示没访问过的链接（正常的链接
a:link{
    color: red;
}

//:visited 用来表示访问过的链接
// 由于隐私的原因，所以visited这个伪类只能修改链接的颜色
a:visited{
    color: orange; 
    /* font-size: 50px;   */
}

//:hover 用来表示鼠标移入的状态
a:hover{
    color: aqua;
    font-size: 50px;
}

// :active 用来表示鼠标点击
a:active{
    color: yellowgreen;
}
```

## 伪元素选择器

 伪元素，表示页面中一些特殊的并不真实的存在的元素（特殊的位置）

**伪元素使用 :: 开头**

- ::first-letter 表示第一个字母
- ::first-line 表示第一行
- ::selection 表示选中的内容
- ::before 元素的开始
- ::after 元素的最后
  - before 和 after 必须结合content属性来使用

```css
p::first-letter{
    font-size: 50px;
}

p::first-line{
    background-color: yellow; 
}

p::selection{
    background-color: greenyellow;
}

/* div::before{
content: 'abc';
color: red;
}

div::after{
content: 'haha';
color: blue;
} */

div::before{
    content: '『';
}

div::after{
    content: '』';
}
```



## 样式继承

样式的继承，我们为一个元素设置的样式同时也会应用到它的后代元素上

继承是发生在祖先后后代之间的

继承的设计是为了方便我们的开发，利用继承我们可以将一些通用的样式统一设置到共同的祖先元素上， 这样只需设置一次即可让所有的元素都具有该样式

**注意：**

- 并不是所有的样式都会被继承， 比如 背景相关的，布局相关等的这些样式都不会被继承。

## 选择器权重

样式的冲突，当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突。发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定

**选择器的权重：**

内联样式              1,0,0,0
id选择器               0,1,0,0
类和伪类选择器   0,0,1,0
元素选择器           0,0,0,1
通配选择器           0,0,0,0
继承的样式           没有优先级

比较优先级时，需要将所有的选择器的优先级进行相加计算，最后优先级越高，则越优先显示（分组选择器是单独计算的），选择器的累加不会超过其最大的数量级，类选择器在高也不会超过id选择器，如果优先级计算后相同，此时则优先使用靠下的样式。

可以在某一个样式的后边添加 !important ，则此时该样式会获取到最高的优先级，甚至超过内联样式，
注意：在开发中这个玩意一定要慎用！

## 长度单位

- 像素

  - 屏幕（显示器）实际上是由一个一个的小点点构成的

     - 不同屏幕的像素大小是不同的，像素越小的屏幕显示的效果越清晰
     - 所以同样的200px在不同的设备下显示效果不一样

- 百分比

  - 也可以将属性值设置为相对于其父元素属性的百分比
  - 设置百分比可以使子元素跟随父元素的改变而改变

- em

  -  em是相对于元素的字体大小来计算的
  - 1em = 1font-size
  - em会根据字体大小的改变而改变

- rem
  - rem是相对于根元素的字体大小来计算

## 颜色单位

- RGB值：
  - RGB通过三种颜色的不同浓度来调配出不同的颜色
  - R red，G green ，B blue
  - 每一种颜色的范围在 0 - 255 (0% - 100%) 之间
  - 语法：RGB(红色,绿色,蓝色)
- RGBA:
  - 就是在rgb的基础上增加了一个a表示不透明度
  - 需要四个值，前三个和rgb一样，第四个表示不透明度
  - 1表示完全不透明   0表示完全透明  .5半透明
- 十六进制的RGB值
  - 语法：#红色绿色蓝色
  - 颜色浓度通过 00-ff
  - 如果颜色两位两位重复可以进行简写  #aabbcc --> #abc
- HSL值 HSLA值
  -  H 色相(0 - 360)
  - S 饱和度，颜色的浓度 0% - 100%
  - L 亮度，颜色的亮度 0% - 100%

```css
background-color: red;
background-color: rgb(255, 0, 0);
background-color: rgb(0, 255, 0);
background-color: rgb(0, 0, 255);
background-color: rgb(255,255,255);
background-color: rgb(106,153,85);
background-color: rgba(106,153,85,.5);
background-color: #ff0000;
background-color: #ffff00;
background-color: #ff0;
background-color: #bbffaa;
background-color: #9CDCFE;
background-color: rgb(254, 156, 156);
background-color: hsla(98, 48%, 40%, 0.658);
```

## 文档流

 - 网页是一个多层的结构，一层摞着一层
            - 通过CSS可以分别为每一层来设置样式
            - 作为用户来讲只能看到最顶上一层
            - 这些层中，最底下的一层称为文档流，文档流是网页的基础，我们所创建的元素默认都是在文档流中进行排列
            - 对于我们来元素主要有两个状态
                - 在文档流中
                - 不在文档流中（脱离文档流）
         
- 元素在文档流中有什么特点：

     - 块元素
          - 块元素会在页面中独占一行(自上向下垂直排列)
          - 默认宽度是父元素的全部（会把父元素撑满）
          -  默认高度是被内容撑开（子元素）
     -  行内元素
          - 行内元素不会独占页面的一行，只占自身的大小
          -  行内元素在页面中左向右水平排列，如果一行之中不能容纳下所有的行内元素则元素会换到第二行继续自左向右排列（书写习惯一致）
          - 行内元素的默认宽度和高度都是被内容撑开

     

## 盒子模型

- 内容区（content）
- 内边距（padding）
- 边框（border）
- 外边距（margin）

### 盒子模型 - 边框

- 边框的宽度 border-width
- 边框的颜色 border-color
-  边框的样式 border-style



-  border-top：1px  solid red
-  border-right
-  border-bottom
-  border-left

### 盒子模型 - 内边距

内容区和边框之间的距离是内边距

- padding-top
- padding-right
- padding-bottom
- padding-left

**内边距的设置会影响到盒子的大小**

**背景颜色会延伸到内边距上**

**简写：** padding: 10px 20px 30px 40px;

### 盒子模型 - 外边距

- 外边距不会影响盒子可见框的大小
- 但是外边距会影响盒子的位置

**一共有四个方向的外边距：**

- margin-top：上外边距，设置一个正值，元素会向下移动
- margin-right：默认情况下设置margin-right不会产生任何效果
- 下外边距，设置一个正值，其下边的元素会向下移动
- 左外边距，设置一个正值，元素会向右移动

**margin也可以设置负值，如果是负值则元素会向相反的方向移动**

元素在页面中是按照自左向右的顺序排列的:

- 所以默认情况下如果我们设置的左和上外边距则会移动元素自身
- 而设置下和右外边距会移动其他元素

## 布局

### 布局 - 水平布局

margin-left+border-left+padding-left+width+padding-right+border-right+margin-right = 其父元素内容区的宽度 （必须满足）

 100 + 0 + 0 + 200 + 0 + 0 + 400 = 800
 100 + 0 + 0 + 200 + 0 + 0 + 500 = 800

- 以上等式必须满足，如果相加结果使等式不成立，则称为过度约束，则等式会自动调整

- 如果这七个值中没有为 auto 的情况，则浏览器会自动调整margin-right值以使等式满足

- 这七个值中有三个值和设置为auto

  width

  marging-left

  margin-right

  - 如果某个值为auto，则会自动调整为auto的那个值以使等式成立

    0 + 0 + 0 + auto + 0 + 0 + 0 = 800  auto = 800
    0 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 600
    200 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 400

    auto + 0 + 0 + 200 + 0 + 0 + 200 = 800  auto = 400

    auto + 0 + 0 + 200 + 0 + 0 + auto = 800  auto = 300

  - 如果将一个宽度和一个外边距设置为auto，则宽度会调整到最大，设置为auto的外边距会自动为0

  - 如果将三个值都设置为auto，则外边距都是0，宽度最大

  - 如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值（所以我们经常利用这个特点来使一个元素在其父元素中水平居中）

    **示例：**

     width: 40px;
     margin: 0 auto;

### 布局 - 垂直布局

- 默认情况下父元素的高度被内容撑开
- 子元素是在父元素的内容区中排列的，如果子元素的大小超过了父元素，则子元素会从父元素中溢出， 使用 overflow 属性来设置父元素如何处理溢出的子元素
  - overflow ：visible（默认值 子元素会从父元素中溢出，在父元素外部的位置显示）
  - overflow ：hidden（溢出内容将会被裁剪不会显示）
  - overflow ：scroll（生成两个滚动条，通过滚动条来查看完整的内容）
  - overflow ：auto（根据需要生成滚动条）
- 使用overflow-x和overflow-y生成滚动条

## 外边距折叠

**垂直外边距的重叠**

- 相邻的垂直方向外边距会发生重叠现象
  - 兄弟元素
    - 兄弟元素间的相邻垂直外边距会取两者之间的较大值（两者都是正值）
    - 特殊情况：
      - 如果相邻的外边距一正一负，则取两者的和
      - 如果相邻的外边距都是负值，则取两者中绝对值较大的
    - 兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们不需要进行处理
  - 父子元素
    - 父子元素间相邻外边距，子元素的会传递给父元素（上外边距）
    - 父子外边距的折叠会影响到页面的布局，必须要进行处理
      - 方案：给父元素上外边距给个边框
      - 方案：可以为父元素添加overflow:hidden

## 行内元素的盒模型

**行内元素的盒模型：**

- 行内元素不支持设置宽度和高度
- 行内元素可以设置padding，但是垂直方向padding不会影响页面的布局
- 行内元素可以设置border，垂直方向的border不会影响页面的布局
- 行内元素可以设置margin，垂直方向的margin不会影响布局

**display用来设置元素显示的类型**

 可选值：

-  inline 将元素设置为行内元素
-  block 将元素设置为块元素
- inline-block 将元素设置为行内块元素 （行内块，既可以设置宽度和高度又不会独占一行）
- table 将元素设置为一个表格
- none 元素不在页面中显示，**不会占据页面位置**

**visibility 用来设置元素的显示状态**

可选值：

-  visible 默认值，元素在页面中正常显示
- hidden 元素在页面中隐藏 不显示，**但是依然占据页面的位置**

## 默认样式

 默认样式：

- 通常情况，浏览器都会为元素设置一些默认样式
-  默认样式的存在会影响到页面的布局
- 通常情况下编写网页时必须要去除浏览器的默认样式（PC端的页面）

解决方案：引入外部样式解决

## 盒子尺寸

- box-sizing：content-box（默认值）宽度和高度用来设置内容区的大小
- box-sizing：border-box 宽度和高度用来设置整个盒子可见框的大小,width 和 height 指的是内容区 和 内边距 和 边框的总大小

## 轮廓和圆角

### box-shadow

box-shadow 用来设置元素的阴影效果，阴影不会影响页面布局 

```css
box-shadow: 0px 0px 50px rgba(0, 0, 0, .3);
```

- 第一个值 水平偏移量 设置阴影的水平位置 正值向右移动 负值向左移动
- 第二个值 垂直偏移量 设置阴影的水平位置 正值向下移动 负值向上移动
- 第三个值 阴影的模糊半径
- 第四个值 阴影的颜色

### outline

outline 用来设置元素的轮廓线，用法和border一模一样

轮廓和边框不同的点，就是轮廓不会影响到可见框的大小   

### border-radius

 border-radius: 用来设置圆角 圆角设置的圆的半径大小

```css
border-top-left-radius: 
border-top-right-radius 
border-bottom-left-radius: 
border-bottom-right-radius: 
border-top-left-radius:50px 100px; //可以写两个值
```

border-radius 可以分别指定四个角的圆角

 border-radius: 20px；将元素设置为一个圆形

border-radius: 50%

## 浮动

通过浮动可以使一个元素向其父元素的左侧或右侧移动，使用 float 属性来设置于元素的浮动

**float：**

- none 默认值 ，元素不浮动
- left 元素向左浮动
- right 元素向右浮动

**注意：**

- 元素设置浮动以后，水平布局的等式便不需要强制成立
- 元素设置浮动以后，会完全从文档流中脱离，不再占用文档流的位置
- 所以元素下边的还在文档流中的元素会自动向上移动

**浮动特点：**

- 浮动元素会完全脱离文档流，不再占据文档流中的位置
- 设置浮动以后元素会向父元素的左侧或右侧移动
- 浮动元素默认不会从父元素中移出
- 浮动元素向左或向右移动时，不会超过它前边的其他浮动元素
- 如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移
- 浮动元素不会超过它上边的浮动的兄弟元素，最多最多就是和它一样高

**简单总结：**

-  浮动目前来讲它的主要作用就是让页面中的元素可以水平排列，
- 通过浮动可以制作一些水平方向的布局 

### 浮动其他特点

- 浮动元素不会盖住文字，文字会自动环绕在浮动元素的周围，所以我们可以利用浮动来设置文字环绕图片的效果

**元素设置浮动以后，将会从文档流中脱离，从文档流中脱离后，元素的一些特点也会发生变化**

**块元素：**

- 块元素不在独占页面的一行
- 脱离文档流以后，块元素的宽度和高度默认都被内容撑开

**行内元素：**

-  行内元素脱离文档流以后会变成块元素，特点和块元素一样

**脱离文档流以后，不需要再区分块和行内了**

### 浮动导致高度塌陷问题

**高度塌陷的问题：**

- 在浮动布局中，父元素的高度默认是被子元素撑开的
- 当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离，将会无法撑起父元素的高度，导致父元素的高度丢失
- 父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱
-  所以高度塌陷是浮动布局中比较常见的一个问题，这个问题我们必须要进行处理！

### BFC(Block Formatting Context) 块级格式化环境

BFC是一个CSS中的一个隐含的属性，可以为一个元素开启BFC，开启BFC该元素会变成一个独立的布局区域

**元素开启BFC后的特点：**

- .开启BFC的元素不会被浮动元素所覆盖
- 开启BFC的元素子元素和父元素外边距不会重叠
- 开启BFC的元素可以包含浮动的子元素

**可以通过一些特殊方式来开启元素的BFC：**

- 设置元素的浮动（不推荐）

- 将元素设置为行内块元素（不推荐）

- 将元素的overflow设置为一个非visible的值

  常用的方式 为元素设置 overflow:hidden 开启其BFC 以使其可以包含浮动元素

### 浮动导致高度塌陷 - 解决方案（开启BFC）

> 方案一

父元素添加`overflow:hidden`属性

> 方案二

**clear：**清除浮动元素对当前元素所产生的影响

**可选值：**

- left 清除左侧浮动元素对当前元素的影响
- right 清除右侧浮动元素对当前元素的影响
- both 清除两侧中最大影响的那侧

**原理：**

设置清除浮动以后，浏览器会自动为元素添加一个上外边距，以使其位置不受其他元素的影响

> 方案三(优化方案)

```css
<style>
        .box1{
            border: 10px red solid;

            /* overflow: hidden; */
        }

        .box2{
            width: 100px;
            height: 100px;
            background-color: #bfa;
            float: left;
        }

        .box3{
            clear: both;
        }

        .box1::after{
            content: '';
            display: block;
            clear: both;
        }
        
    </style>
</head>
<body>

    <div class="box1">
        <div class="box2"></div>
        <!-- <div class="box3"></div> -->
    </div>
    
</body>
</html>
```

**流程：**

使用伪元素选择器，给父元素添加空元素，因为默认添加的是行内元素需要定义为快元素，并设置clear,这样这个空内容就不会被浮动元素覆盖住，由于浏览器是通过给定外边距使其不会被覆盖，所以父元素也会随之撑大，这样就可以避免高度塌陷问题

### clearfix

clearfix 这个样式可以同时解决高度塌陷和外边距重叠的问题，当你在遇到这些问题时，直接使用clearfix这个类即可

```css
.clearfix::before,
.clearfix::after{
    content: '';
    display: table;
    clear: both;
}
```



## 定位

### 简介

 定位（position）：定位是一种更加高级的布局手段， 通过定位可以将元素摆放到页面的任意位置，使用position属性来设置定位

**可选值：**

-  static 默认值，元素是静止的没有开启定位
-  relative 开启元素的相对定位
- absolute 开启元素的绝对定位
-  fixed 开启元素的固定定位
- sticky 开启元素的粘滞定位

### 相对定位

相对定位：当元素的position属性值设置为relative时则开启了元素的相对定位

**相对定位特点：**

1. 元素开启相对定位以后，如果不设置偏移量元素不会发生任何的变化
2. 相对定位是参照于元素在文档流中的位置进行定位的
3. .相对定位会提升元素的层级
4. 相对定位不会使元素脱离文档流
5. 相对定位不会改变元素的性质块还是块，行内还是行内

**偏移量offset：当元素开启了定位以后，可以通过偏移量来设置元素的位置**

1. top：定位元素和定位位置上边的距离

2. bottom：定位元素和定位位置下边的距离

   定位元素垂直方向的位置由top和bottom两个属性来控制，通常情况下我们只会使用其中一

3. left：定位元素和定位位置的右侧距离

   定位元素水平方向的位置由left和right两个属性控制，通常情况下只会使用一个

### 绝对定位

当元素的position属性值设置为absolute时，则开启了元素的绝对定位

**绝对定位特点：**

1. 开启绝对定位后，如果不设置偏移量元素的位置不会发生变化
2. 开启绝对定位后，元素会从文档流中脱离
3. 绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
4. 绝对定位会使元素提升一个层级
5. 绝对定位元素是相对于其包含块进行定位的（子绝父相）

**包含块（ containing block）：**

- 正常情况下：包含块就是离当前元素最近的祖先块元素
- 绝对定位的包含块：包含块就是离它最近的开启了定位的祖先元素，如果所有的祖先元素都没有开启定位则根元素就是它的包含块

### 固定定位

将元素的position属性设置为fixed则开启了元素的固定定位

**固定定位特点：**

1. 固定定位也是一种绝对定位，所以固定定位的大部分特点都和绝对定位一样
2.  唯一不同的是固定定位永远参照于浏览器的视口进行定位(固定定位的元素不会随网页的滚动条滚动)

### 粘滞定位

当元素的position属性设置为sticky时则开启了元素的粘滞定位

**粘滞定位特点：**

1. 粘滞定位和相对定位的特点基本一致
2.  不同的是粘滞定位可以在元素到达某个位置时将其固定

### 绝对定位元素布局

**水平布局：**
left + margin-left + border-left + padding-left + width + padding-right + border-right + margin-right + right = 包含块的内容区的宽度

**当我们开启了绝对定位后: **

1. 水平方向的布局等式就需要添加left 和 right 两个值
2. 此时规则和之前一样只是多添加了两个值
3. 当发生过度约束：
   1. 如果9个值中没有 auto 则自动调整right值以使等式满足
   2.  如果有auto，则自动调整auto的值以使等式满足
4. 可设置auto的值： margin width left right
5. 因为left 和 right的值默认是auto，所以如果不指定left和right则等式不满足时，会自动调整这两个值

**垂直方向：**

 top + margin-top/bottom + padding-top/bottom + border-top/bottom + height = 包含块的高度

### 元素层级

 对于开启了定位元素，可以通过z-index属性来指定元素的层级

 z-index需要一个整数作为参数，值越大元素的层级越高元素的层级越高越优先显示

-  如果元素的层级一样，则优先显示靠下的元素
- 祖先的元素的层级再高也不会盖住后代元素

## 字体

**font**

- font-size：字体大小,和font-size相关的单位
  1. em，相当于元素的一个font-size
  2. rem，相当于根元素的一个font-size

- font-family 字体族(字体的格式)

  - 属性：

    1. serif  衬线字体
    2. sans-serif 非衬线字体
    3. monospace 等宽字体
    4. 指定字体的类别，浏览器会自动使用该类别下的字体

  - font-family 可以同时指定多个字体，多个字体间使用,隔开(字体生效时优先使用第一个，第一个无法使用则使用第二个 以此类推)

    font-family：Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif

- 行高（line height）

  - 行高指的是文字占有的实际高度，可以通过line-height来设置行高，行高可以直接指定一个大小（px em）
  -  也可以直接为行高设置一个整数，如果是一个整数的话，行高将会是字体的指定的倍数
  - 行间距 = 行高 - 字体大小
  -  字体框：体框就是字体存在的格子，设置font-size实际上就是在设置字体框的高度
  - 行高会在字体框的上下平均分配

- font-weight：字重 字体的加粗

  - 属性：
    1.  normal 默认值 不加粗
    2. bold 加粗
    3. 100-900 九个级别（没什么用）

-  font-style：字体的风格

  - 属性：
    1. normal 正常的
    2. italic 斜体

- 字体简写：font: 字体大小/行高 字体族(行高 可以省略不写 如果不写使用默认值)



**图标字体(icon-font)**

在网页中经常需要使用一些图标，可以通过图片来引入图标，但是图片大小本身比较大，并且非常的不灵活，所以在使用图标时，我们还可以将图标直接设置为字体，然后通过font-face的形式来对字体进行引入，这样我们就可以通过使用字体的形式来使用图标

> fontawesome 使用步骤

1. 下载https://fontawesome.com/

2. 解压

3. 将css和webfonts移动到项目中

4. 将all.css引入到网页中`<link rel="stylesheet" href="./asset/fontawesome/css/all.css">`

5. 使用

   1. 直接通过类名使用图标字体

      class="fas fa-bell"

      class="fab fa-accessible-icon"

      ```html
      <i class="fas fa-bell" style="font-size:80px; color:red;"></i>
      <i class="fas fa-bell-slash"></i>
      <i class="fab fa-accessible-icon"></i>
      <i class="fas fa-otter" style="font-size: 160px; color:green;"></i>
      ```

   2. 通过伪元素来设置图标字体

      1. 找到要设置图标的元素通过before或after选中
      2. 在content中设置字体的编码
      3. 设置字体的样式

      ```css
       li::before{
           /* 
           通过伪元素来设置图标字体
           1.找到要设置图标的元素通过before或after选中
           2.在content中设置字体的编码
           3.设置字体的样式
           fab
           font-family: 'Font Awesome 5 Brands';
      
           fas
           font-family: 'Font Awesome 5 Free';
           font-weight: 900; 
      
           */
           content: '\f1b0';
           /* font-family: 'Font Awesome 5 Brands'; */
           font-family: 'Font Awesome 5 Free';
           font-weight: 900; 
           color: blue;
           margin-right: 10px;
      }
      ```

   3.  通过实体来使用图标字体： &#x图标的编码;

      ```html
      <span class="fas">&#xf0f3;</span>
      ```

## 文本

- text-align：文本的水平对齐

  - 属性：
    1. left 左侧对齐
    2. right 右对齐
    3. center 居中对齐
    4. justify 两端对齐

- vertical-align：设置元素垂直对齐的方式

  - 属性：
    	1. baseline 默认值 基线对齐
     	2.  top 顶部对齐
     	3. bottom 底部对齐
     	4.  middle 居中对齐

- text-decoration：设置文本修饰

  - 属性：
    1. none 什么都没有
    2. underline 下划线
    3. line-through 删除线
    4. overline 上划线

-  white-space：设置网页如何处理空白

  - 属性：

    1. normal 正常
    2. nowrap 不换行
    3. pre 保留空白

    ```css
    /*多出内容用三个点*/
    .box2{
        width: 200px;
        /* 
        white-space 设置网页如何处理空白
        可选值：
        normal 正常
        nowrap 不换行
        pre 保留空白
    
        */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    ```

## 背景

background-image 设置背景图片 

- 可以同时设置背景图片和背景颜色，这样背景颜色将会成为图片的背景色
- 如果背景的图片小于元素，则背景图片会自动在元素中平铺将元素铺满
- 如果背景的图片大于元素，将会一个部分背景无法完全显示
- 如果背景图片和元素一样大，则会直接正常显示

**background-image: url("./img/1.png")**

**background-repeat**

- repeat 默认值 ， 背景会沿着x轴 y轴双方向重复

-  repeat-x 沿着x轴方向重复
-  repeat-y 沿着y轴方向重复
- no-repeat 背景图片不重复

**background-position 用来设置背景图片的位置**

设置方式：

-  通过 top left right bottom center 几个表示方位的词来设置背景图片的位置(使用方位词时必须要同时指定两个值，如果只写一个则第二个默认就是center)
- 通过偏移量来指定背景图片的位置：水平方向的偏移量 垂直方向变量

**background-clip (设置背景的范围 )**

可选值：

- border-box 默认值，背景会出现在边框的下边
- padding-box 背景不会出现在边框，只出现在内容区和内边距
- content-box 背景只会出现在内容区

**background-origin (背景图片的偏移量计算的原点)**

可选值：

- padding-box 默认值，background-position从内边距处开始计算
- content-box 背景图片的偏移量从内容区处计算
- border-box 背景图片的变量从边框处开始计算

**background-size 设置背景图片的大小**

第一个值表示宽度 

第二个值表示高度

如果只写一个，则第二个值默认是 auto

 cover 图片的比例不变，将元素铺满

 contain 图片比例不变，将图片在元素中完整显示

## 背景渐变

通过渐变可以设置一些复杂的背景颜色，可以实现从一个颜色向其他颜色过渡的效果，渐变是图片，需要通过background-image来设置

- linear-gradient() 线性渐变，颜色沿着一条直线发生变化

  linear-gradient(red,yellow) 红色在开头，黄色在结尾，中间是过渡区域

  线性渐变的开头，我们可以指定一个渐变的方向， to left，to right, to bottom, to top, deg(表示度数)，turn表示圈

  渐变可以同时指定多个颜色，多个颜色默认情况下平均分布，也可以手动指定渐变的分布情况

  repeating-linear-gradient() 可以平铺的线性渐变

  ```css
  /* background-image: linear-gradient(red,yellow,#bfa,orange); */
  /* background-image: linear-gradient(red 50px,yellow 100px, green 120px, orange 200px); */
  background-image: repeating-linear-gradient(to right ,red, yellow 50px);
  ```

-  radial-gradient() 径向渐变(放射性的效果)，默认情况下径向渐变的形状根据元素的形状来计算的

   正方形 --> 圆形
   长方形 --> 椭圆形
    我们也可以手动指定径向渐变的大小

   circle
  ellipse

  **语法：**radial-gradient(大小 at 位置, 颜色 位置 ,颜色 位置 ,颜色 位置)

  **大小：**
           circle 圆形
          ellipse 椭圆
          closest-side 近边	
          closest-corner 近角
          farthest-side 远边
          farthest-corner 远角

## 过度（transition）

过渡（transition）：通过过渡可以指定一个属性发生变化时的切换方式，通过过渡可以创建一些非常好的效果，提升用户的体验

**属性：**

- transition-property：指定要执行过渡的属性 ，多个属性间使用,隔开，多个属性间使用,隔开

  大部分属性都支持过渡效果，注意过渡时必须是从一个有效数值向另外一个有效数值进行过渡

- transition-duration: 指定过渡效果的持续时间，支持秒和毫秒单位

- transition-timing-function: 过渡的时序函数（ 指定过渡的执行的方式 ） 

  -  ease 默认值，慢速开始，先加速，再减速
  - ease-in 加速运动
  -  ease-out 减速运动
  -  ease-in-out 先加速 后减速
  - cubic-bezier() 来指定时序函数（https://cubic-bezier.com）
  - steps() 分步执行过渡效果
    1. end ， 在时间结束时执行过渡(默认值)
    2. start ， 在时间开始时执行过渡



## 动画

动画和过渡类似，都是可以实现一些动态的效果，不同的是过渡需要在某个属性发生变化时才会触发，动画可以自动触发动态效果，设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤

**定义动画**

```css
@keyframes test {
    /* from表示动画的开始位置 也可以使用 0% */
    from{
        margin-left: 0;
        background-color: orange;
    } 

    /* to动画的结束位置 也可以使用100%*/
    to{
        background-color: red;
        margin-left: 700px;
    }
}
```

**属性：**

animation-name：要对当前元素生效的关键帧的名字

animation-duration: 动画的执行时间

animation-delay: 动画延时

animation-iteration-count 动画执行的次数 	

animation-timing-function: 过渡的时序函数

 animation-iteration-count：循环执行次数 1.数值 2.infinite(无限)

animation-direction：指定动画运行的方向

- normal 默认值  从 from 向 to运行 每次都是这样 
- reverse 从 to 向 from 运行 每次都是这样 
-  alternate 从 from 向 to运行 重复执行动画时反向执行
- alternate-reverse 从 to 向 from运行 重复执行动画时反向执行

animation-play-state: 设置动画的执行状态

- running 默认值 动画执行
- paused 动画暂停

animation-fill-mode: 动画的填充模式

-  none 默认值 动画执行完毕元素回到原来位置
- forwards 动画执行完毕元素会停止在动画结束的位置
- backwards 动画延时等待时，元素就会处于开始位置
- both 结合了forwards 和 backwards

## 变形

变形就是指通过CSS来改变元素的形状或位置

 变形不会影响到页面的布局

transform 用来设置元素的变形效果：

**translate（位移）:**

-  translateX() 沿着x轴方向平移
-  translateY() 沿着y轴方向平移
-  translateZ() 沿着z轴方向平移
- 平移元素，百分比是相对于自身计算的

Z轴平移需要开启视距 ：z轴平移，调整元素在z轴的位置，正常情况就是调整元素和人眼之间的距离，距离越大，元素离人越近， z轴平移属于立体效果（近大远小），默认情况下网页是不支持透视，如果需要看见效果，必须要设置网页的视距

```css
html{
    /* 设置当前网页的视距为800px，人眼距离网页的距离 */
    perspective: 800px;
}
```

**rotate（旋转）**

 通过旋转可以使元素沿着x y 或 z旋转指定的角度

- rotateX
- rotateY
- rotateZ

```css
/* transform: rotateZ(.25turn); */
/* transform: rotateY(180deg) translateZ(400px); */
/* transform: translateZ(400px) rotateY(180deg) ; */
```

 **是否显示元素的背面**
 backface-visibility: hidden;

**scale（缩放）**

- scaleX() 水平方向缩放
- scaleY() 垂直方向缩放
-  scale() 双方向的缩放

```css
transform:scale(1.2);
```

**设置3d变形效果** 
transform-style: preserve-3d;