<!--
 * @Author: TerryMin
 * @Date: 2023-02-02 18:53:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-12-30 18:23:26
 * @Description: file not
-->

# 动画

## [transform 变换](https://juejin.cn/post/6959407827047677965)

transform 主要包括以下几种:

1. 旋转 rotate
2. 扭曲 skew
3. 缩放 scale
4. 移动 translate
5. 矩阵变形 matrix。

## [transition 过渡动画](https://juejin.cn/post/6970885478967050254)

transition 族属性:

1. transition-property 指定使用过渡效果的 css 属性(all)
2. transition-duration 设置过渡动画持续时间(0s)
3. transition-timing-function 设置动画的时间函数(ease)
4. transition-delay 设置动画的延迟时间(0s)

## [animation 自定义动画 各个属性详解](https://blog.csdn.net/aSuncat/article/details/52588078)

[animation 属性](https://juejin.cn/post/6970883520168198158#heading-8):

1. animation-name：指定要绑定到选择器的关键帧的名称。
2. animation-duration：定义动画完成一个周期需要多少秒或毫秒(0s)
3. animation-timing-function：指定动画将如何完成一个周期。
4. animation-delay：属性定义动画什么时候开始。
5. animation-iteration-count ：定义动画应该播放多少次(默认1, 值分两种:具体number数值、infinite执行无限次)
6. animation-direction：定义是否循环交替反向播放动画(normal)
7. animation-fill-mode：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
8. animation-play-state：指定动画是否正在运行或已暂停(默认值为：running设为paused(暂停)，动画将停止执行)
