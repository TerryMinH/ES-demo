<!--
 * @Author: TerryMin
 * @Date: 2023-02-02 18:53:35
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-03 14:08:35
 * @Description: file not
-->
# 动画

一 [setTimeOut 与 requestAnimationFrame 区别](https://blog.csdn.net/weixin_40851188/article/details/89669416)

1. 引擎层面：setTimeout 属于 JS 引擎，存在事件轮询，存在事件队列。requestAnimationFrame 属于 GUI 引擎，发生在渲 染过程的中重绘重排部分，与电脑分辨路保持一致。

2. 性能层面：当页面被隐藏或最小化时，定时器 setTimeout 仍在后台执行动画任 务。当页面处于未激活的状态下，该页面的屏幕刷新任 务会被系统暂停，requestAnimationFrame 也会停止。

3. 应用层面：利用 setTimeout，这种定时机制去做动画，模拟固定时间刷新页面。requestAnimationFrame 由浏览器专门为动画提供 的 API，在运行时浏览器会自动优化方法的调用，在特定性环境下可以有效节省了 CPU 开销。


二 [animation各个属性详解](https://blog.csdn.net/aSuncat/article/details/52588078)

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```



