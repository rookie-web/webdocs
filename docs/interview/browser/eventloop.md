

### 进程
程序运行的独立内存空间，一个进程至少有一个线程
### 线程
进程开启后自动创建一个线程来执行代码，为主线程，可以有多个线程来执行不同代码任务
### 浏览器程序
多进程、多线程程序。主要分为浏览器进程、网络进程、渲染进程
1. 浏览器进程主要负责界面显示、用户交互、子进程管理，内部会启动多个线程处理不同任务
2. 网络进程负责加载网络资源，会启动多个线程来处理不同网络任务
3. 渲染进程启动后会开启一个主线程，负责执行HTML、CSS、JS代码。默认情况下浏览器会给每个标签页开启一个新的渲染进程
### 渲染主线程工作：事件队列
渲染主线程一开始进入一个无限循环，每次循环都会检查事件队列中是否存在任务。如果有就取出事件队列中的第一个执行，没有就进入休眠状态。主线程和其他线程可以随时向事件队列中添加任务，新任务添加在队列末尾。整个过程称之为事件循环。
### 异步
代码在执行过程中，会遇到一些无法立即处理的任务，
- 计时完成后需要执行的任务 —— `setTimeout`、`setInterval`
- 网络通信完成后需要执行的任务 -- `XHR`、`Fetch`
- 用户操作后需要执行的任务 -- `addEventListener`
如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于「阻塞」的状态，从而导致浏览器「卡死」，因此，浏览器选择**异步**来解决这个问题，使用异步的方式，**渲染主线程永不阻塞**

> 面试题：如何理解 JS 的异步？
>
> 
>
> 参考答案：
>
> JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。
>
> 而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。
>
> 如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。
>
> 所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。
>
> 在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

### JS为何会阻碍渲染
JS和UI渲染都在渲染主线程上执行

### 事件队列任务优先级
任务没有优先级，在事件队列中先进先出，但**事件队列是有优先级的**。
根据 W3C 的最新解释:

- 每个任务都有一个任务类型，同一个类型的任务必须在一个队列，不同类型的任务可以分属于不同的队列。
  在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。
- 浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行
> 随着浏览器的复杂度急剧提升，W3C 不再使用宏队列的说法

在目前 chrome 的实现中，至少包含了下面的队列：

- 延时队列（宏队列）：用于存放计时器到达后的回调任务，优先级「中」
- 交互队列（宏队列）：用于存放用户操作后产生的事件处理任务，优先级「高」
- 微队列：用户存放需要最快执行的任务，优先级「最高」

> 添加任务到微队列的主要方式主要是使用 Promise、MutationObserver
>
> 
>
> 例如：
>
> ```js
> // 立即把一个函数添加到微队列
> Promise.resolve().then(函数)
> ```


> 面试题：阐述一下 JS 的事件循环
> 参考答案：
>
> 事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。
>
> 在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。
>
> 过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
>
> 根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

> 面试题：JS 中的计时器能做到精确计时吗？为什么？
>
> 
>
> 参考答案：
>
> 不行，因为：
>
> 1. 计算机硬件没有原子钟，无法做到精确计时
> 2. 操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差
> 3. 按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差
> 4. 受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差

### 总结
事件循环是异步的实现方式，单线程是异步产生的原因