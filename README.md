- 点击label标签让文本域自动聚焦
![image.png](https://upload-images.jianshu.io/upload_images/6541235-a52d178ca30ac802.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 父组件将方法作为值传到子组件
使用bind 显示修改this
![image.png](https://upload-images.jianshu.io/upload_images/6541235-563bad970745ea47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- propTypes校验
![image.png](https://upload-images.jianshu.io/upload_images/6541235-6ec91004f260c89e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 虚拟dom
![image.png](https://upload-images.jianshu.io/upload_images/6541235-673d5b10afed37c7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 演变过程: JSX > createElement > 虚拟dom (JS对象) > 真实dom
- 虚拟dom Diff算法
key的重要性: 提高对比的效率

  1. setState 是异步函数更新,为了提高底层性能
- 使用ref 获取dom
![image.png](https://upload-images.jianshu.io/upload_images/6541235-1aeb8a7ea83a01fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 数据更新后获取dom节点
![image.png](https://upload-images.jianshu.io/upload_images/6541235-2d227daa40714bf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 生命周期componentWillReceiveProps
render() 生命周期必须定义
![image.png](https://upload-images.jianshu.io/upload_images/6541235-928175d5c68f05fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- CSS3 过渡动画
- forwards 让元素保存动画的最后一帧状态
![image.png](https://upload-images.jianshu.io/upload_images/6541235-4fb43e8cfe6e50a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 使用react-transition-group动画插件
[react-transition-group](https://github.com/reactjs/react-transition-group)
![image.png](https://upload-images.jianshu.io/upload_images/6541235-554d224e62e39523.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- ## Redux
![image.png](https://upload-images.jianshu.io/upload_images/6541235-d56e44ef3f783a4e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 + 核心API
![image.png](https://upload-images.jianshu.io/upload_images/6541235-8b69ee91d4026807.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
+ reducer 纯函数
纯函数指的是 给定固定的输入,就一定会有固定的输出,而且不会有任何的副作用
![image.png](https://upload-images.jianshu.io/upload_images/6541235-edad30859eb369f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 容器组件
只关心逻辑,不负责页面渲染
- UI组件
不关心逻辑,只负责页面渲染
- 无状态组件
没有render()函数,只是一个函数,没有声明周期函数,效率更高
![image.png](https://upload-images.jianshu.io/upload_images/6541235-d7f21cd73ca628d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 使用React-thunk中间件
![image.png](https://upload-images.jianshu.io/upload_images/6541235-9d21dc56a191721b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/6541235-2a2241fa70cd7925.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- React-redux
   + Provider核心API
![image.png](https://upload-images.jianshu.io/upload_images/6541235-e39e753436455a5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 使用ref 获取dom
![image.png](https://upload-images.jianshu.io/upload_images/6541235-9ff50d6e42bc8d8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 异步组件及withRouter路由方法的使用
[第三方库react-loadable](https://github.com/jamiebuilds/react-loadable)
- Props,state,render
当组件的state或者props发生改变的时候,render函数就会重新执行

- redux工作流
![image.png](https://upload-images.jianshu.io/upload_images/6541235-d00e4c8e08924848.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
