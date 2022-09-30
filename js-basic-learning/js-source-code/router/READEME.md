<!--
 * @Author: TerryMin
 * @Date: 2022-09-29 17:47:07
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-09-29 18:09:36
 * @Description: file not
-->
# 前端路由

## [前端路由实现方式](https://juejin.cn/post/7127143415879303204)

1. hash模式:
 - 通过浏览器提供的hashchange api,监听url中hash改变的时候,触发事件。有了监听事件，且改变hash页面并不刷新，这样我们就可以在监听事件的回调函数中，执行我们展示和隐藏不同UI显示的功能，从而实现前端路由。

2. history模式:
 - history路由模式的实现，是要归功于HTML5提供的一个history全局对象




