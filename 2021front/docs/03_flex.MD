# flex

## 概念

**弹性容器**

要使用弹性盒，必须先将一个元素设置为弹性容器，我们通过 display 来设置弹性容器，display:flex  设置为块级弹性容器，display:inline-flex 设置为行内的弹性容器

**弹性元素**

弹性容器的子元素是弹性元素（弹性项），弹性元素可以同时是弹性容器

## 属性

**flex-direction 指定容器中弹性元素的排列方式**

row 默认值，弹性元素在容器中水平排列（左向右） - 主轴 自左向右

row-reverse 弹性元素在容器中反向水平排列（右向左）- 自右向左

column 弹性元素纵向排列（自上向下）

column-reverse 弹性元素方向纵向排列（自下向上）

主轴：
          弹性元素的排列方向称为主轴
 侧轴：
           与主轴垂直方向的称为侧轴

**弹性元素的属性：**

**flex-grow 指定弹性元素的伸展的系数**

当父元素有多余空间的时，子元素如何伸展

- 父元素的剩余空间，会按照比例进行分配

**flex-shrink指定弹性元素的收缩系数**

- 当父元素中的空间不足以容纳所有的子元素时，如果对子元素进行收缩

**flex-wrap设置弹性元素是否在弹性容器中自动换行**

- nowrap 默认值，元素不会自动换行
- wrap 元素沿着辅轴方向自动换行
-  wrap-reverse 元素沿着辅轴反方向换行

**flex-flow: wrap 和 direction 的简写属性**

**justify-content：如何分配主轴上的空白空间（主轴上的元素如何排列）**

- flex-start 元素沿着主轴起边排列
- flex-end 元素沿着主轴终边排列
- center 元素居中排列
- space-around 空白分布到元素两侧
- space-between 空白均匀分布到元素间
- space-evenly 空白分布到元素的单侧

**align-items：元素在辅轴上如何对齐**

- stretch 默认值，将元素的长度设置为相同的值
- flex-start 元素不会拉伸，沿着辅轴起边对齐
- flex-end 沿着辅轴的终边对齐
- center 居中对齐
-  baseline 基线对齐

**align-self: 用来覆盖当前弹性元素上的align-items **

**align-content: 辅轴空白空间的分布**

**flex-basis 指定的是元素在主轴上的基础长度**

- 如果主轴是 横向的 则 该值指定的就是元素的宽度
- 如果主轴是 纵向的 则 该值指定的是就是元素的高度
- 默认值是 auto，表示参考元素自身的高度或宽度

-  如果传递了一个具体的数值，则以该值为准

 **flex 可以设置弹性元素所有的三个样式**

- flex 增长 缩减 基础;
- initial "flex: 0 1 auto".
- auto  "flex: 1 1 auto"
- none "flex: 0 0 auto" 弹性元素没有弹性