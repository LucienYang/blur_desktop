# blur_desktop
纯html实现类似mac os 动态高斯模糊效果

先看下效果：
![desktop.png](http://upload-images.jianshu.io/upload_images/1784147-03b8c75f09fc99ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

整个页面分为：
* 顶部工具栏（实现了高斯模糊）
* 桌面区
* 开始菜单（实现了高斯模糊）
* 通知区（实现了高斯模糊）
* 底部dock（实现了高斯模糊）

# 桌面展示

![GIF.gif](http://upload-images.jianshu.io/upload_images/1784147-4ce1bb01f632793a.gif?imageMogr2/auto-orient/strip)

# 开始菜单和通知区展示
![GIF3.gif](http://upload-images.jianshu.io/upload_images/1784147-67d67d54cfd94cb9.gif?imageMogr2/auto-orient/strip)

> 其实原理就是把桌面截了个屏然后再做高斯模糊，覆盖在原来的的桌面上截取部分作展示，也就其实是两层图片

用到的js库如下
> [html2canvas](https://github.com/niklasvh/html2canvas) 一个纯前端js工具用来将页面截取成一个图片
>
> [StackBlur](https://github.com/flozz/StackBlur) 使用canvas技术做高斯模糊的js工具，挺好用  

当然，做的这个东西是建立在对性能，对浏览器兼容性等等都不考录的情况下的一个尝试，目前在chrome下测试效果完全没有问题，在IE下好像不太理想，HTML5性能不好