# JS基础相关

## call、apply、bind的区别
#### 共同点
都能够改变函数执行时的上下文，即改变this的指向，调用对象必须是一个函数

#### 不同点

``` js:line-numbers
fn.call(this, ...args)

fn.apply(this, [...args])

fn.bind(this,...args)
 ```

1. `call` 第一个参数就是调用对象，第二个参数开始接收任意个参数，每个参数都会映射到函数的对应位置的参数上，函数会立即调用
2. `apply` 第一个参数就是调用对象，第二个参数必须是数组或者类数组，映射到函数的对应参数上，函数会立即调用
3. `bind` 第一个参数就是调用对象，第二个参数开始接收任意个参数，每个参数都会映射到函数的对应位置的参数上，返回的是函数并且需要手动调用才会执行


## 什么是闭包
> 一个函数内部返回另一个函数，并且被保存下来就会产生闭包
特点：可以重复利用变量，并且这个变量不会污染全局变量，一直保存在内存当中，不会被回收
缺点：消耗内存较多，导致页面性能下降

``` js:line-numbers
function foo(params) {
	return function () {
		console.log(params)
	}
}
const fn = foo('闭包参数')

fn()
```

## js数据类型检测方式
1. `typeof`  可以检测基本数据类型
2. `instanceof` 只能判断应用数据类型
3. `constructor` 几乎可以判断基本数据类型和引用数据类型
4. `Object.prototype.toString.call()` 可以完美判断数据类型

``` js:line-numbers
typeof '123123'
[] instanceof Array
('123').constructor === String
Object.prototype.toString.call({})
```

## 防抖与节流
#### 防抖
函数n秒内只调用一次，若在n秒内重新触发，则重新计算执行时间

``` js:line-numbers
function debounce(fun,wait){
    let timer = null
    return (...args)=>{
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            fun(...args)
        },wait)
    }
}
```

#### 节流
函数以一定频率被调用，n秒执行一次

``` js:line-numbers
function throttle(fun,wait){
    let timer = null
    return (...args) => {
        if(!timer){
            timer = setTimeout(()=> { 
                timer = null
                fun(...args)
            },wait)
        }
    }
}
```

## Proxy 和 Object.defineProperty 区别

#### Object.defineProperty
> 对对象的单个属性进行监听拦截get和set，需要进行深度遍历对象才能拦截整个对象，后续对象的属性新增和删除都无法进行监听

``` js:line-numbers
function observe(obj) {
	for (const key in obj) {
		let v = obj[key]
		if (Object.prototype.toString.call(v) === '[object Object]') {
			observe(v)
		}
		Object.defineProperty(obj, 'a', {
			get() {
				console.log('读取属性--触发收集依赖函数')
				return v
			},
			set(val) {
				if (v !== val) {
					console.log('设置属性--触发收集依赖函数')
					v = val
				}
			}
		})
	}
}
```



#### Proxy
> 直接监听整个对象，不再是某个属性，可以监听到新增删除操作，无需深度遍历


``` js:line-numbers
const proxy = new Proxy(obj, {
	get(target, p) {
		let v = target[p]
		console.log('读取属性--触发收集依赖函数')
		return v
	},
	set(target, p, val) {
		if (target[p] !== val) {
			target[p] = val
			console.log('设置属性--触发收集依赖函数')
		}
		return true
	}
})
proxy.a = 4
```
