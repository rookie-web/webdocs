# 浏览器相关

## iframe跨域通信

1.  通过`document.domain`强制设置同一个主域
2.  `postMessage`发送数据，另一个通过监听`message`事件来接收
3.  通过中间页通信。不同域之间利用iframe的`location.hash`传值，相同域之间直接js访问来通信。


## 强缓存与协商缓存

> 强缓存就是浏览器本地根据服务器设置的过期时间来判断是否使用缓存，未过期则从本地缓存里面拿资源，过期则重新请求服务器拿资源

强缓存根据响应头`Cache-control`或`Expires`字段来控制，表示缓存的时间，单位是毫秒。Cache-control优先级高

> 协商缓存就是浏览器每次都向服务器发送请求，由服务器来告诉浏览器是从缓存里面拿资源还是返回最新资源给浏览器使用

协商缓存由服务器来决定是否使用缓存资源，初次请求后响应头会携带`Etag`标识，再次请求时请求头带`If-None-Match`字段，值为Etag的值，服务器对比之后不一致则返回最新资源，否则使用缓存资源

## cookie  localStorage  sessionStorage的区别

| 方式 | 生命周期 | 存储容量 | 存储位置 |
| --- | --- | --- | --- |
| cookie | 可以设置失效时间 | 4KB | 保存在客户端，每次请求都会带上 |
| localStorage | 永久存储除非手动清除 | 5MB | 保存在客户端，不于服务端交互 |
| sessionStorage | 仅在当前会话窗口下生效，关闭后清除 | 5MB | 保存在客户端，不于服务端交互 |

## 资源（script、link）加载的方式
async、defer 是 script 标签的专属属性，对于网页中的其他资源，可以通过 link 的 preload、prefetch 属性来预加载

#### 正常模式
这种情况下 JS 会阻塞 dom 渲染，浏览器必须等待 index.js 加载和执行完成后才能去做其它事情
``` js:line-numbers
<script src="index.js"></script>
```

#### async 模式
async 模式下，它的加载是异步的，JS 不会阻塞 DOM 的渲染，async 加载是无顺序的，当它加载结束，JS 会立即执行
使用场景：若该 JS 资源与 DOM 元素没有依赖关系，也不会产生其他资源所需要的数据时，可以使用async 模式，比如埋点统计

``` js:line-numbers
<script async src="index.js"></script>
```
#### defer 模式
defer 模式下，JS 的加载也是异步的，defer 资源会在 DOMContentLoaded 执行之前，并且 defer 是有顺序的加载
如果有多个设置了 defer 的 script 标签存在，则会按照引入的前后顺序执行，即便是后面的 script 资源先返回。defer 可以用来控制 JS 文件的执行顺序，比如 element-ui.js 和 vue.js，因为 element-ui.js 依赖于 vue，所以必须先引入 vue.js，再引入 element-ui.js
``` js:line-numbers
<script defer src="index.js"></script>
```
#### module 模式
在主流的现代浏览器中，script 标签的属性可以加上 type="module"，浏览器会对其内部的 import 引用发起 HTTP 请求，获取模块内容。这时 script 的行为会像是 defer 一样，在后台下载，并且等待 DOM 解析。Vite 就是利用浏览器支持原生的 es module 模块，开发时跳过打包的过程，提升编译效率
``` js:line-numbers
<script type="module">import { a } from './a.js'</script>
```
#### preload
link 标签的 preload 属性：用于提前加载一些需要的依赖，这些资源会优先加载
1. preload 加载的资源是在浏览器渲染机制之前进行处理的，并且不会阻塞 onload 事件
2. preload 加载的 JS 脚本其加载和执行的过程是分离的，即 preload会预加载相应的脚本代码，待到需要时自行调用；
``` js:line-numbers
<link rel="preload" as="script" href="index.js">
```
#### prefetch
prefetch 是利用浏览器的空闲时间，加载页面将来可能用到的资源的一种机制；通常可以用于加载其他页面（非首页）所需要的资源，以便加快后续页面的打开速度
1. prefetch 加载的资源可以获取非当前页面所需要的资源，并且将其放入缓存至少5分钟（无论资源是否可以缓存）
2. 当页面跳转时，未完成的 prefetch 请求不会被中断
``` js:line-numbers
<link rel="prefetch" as="script" href="index.js">
```

## 前端路由
> 用来描述URL与UI界面的一种映射关系

#### hash 和 history 模式区别
1. hash的URL地址拼接#号，history没有
2. 刷新页面时hash会加载#号后对应的页面，history会报错
3. hash在#号后的路径发生变化触发`onhashchange`事件，history通过H5新增的`pushState`，`replaceState`，`popState`来修改历史记
4. history需要后端服务配置，否则会出现**404**


## JS 的事件循环
渲染主线程一开始进入一个无限循环，每次循环都会检查事件队列中是否存在任务。如果有就取出事件队列中的第一个执行，没有就进入休眠状态。主线程和其他线程可以随时向事件队列中添加任务，新任务添加在队列末尾。整个过程称之为[事件循环](/interview/browser/eventloop.html)。

#### 宏任务（宏队列）
通常包括用户交互事件（如点击、滚动）、网络请求、定时器等(`setTimeout`、`setInterval`、`XHR`、`Fetch`、`addEventListener`)

#### 微任务（微队列）
用户存放需要最快执行的任务，优先级「最高」。添加任务到微队列的主要方式主要是使用 `Promise`、`MutationObserver`



