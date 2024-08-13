# 常用的一些js函数
开发中提高效率的实用小技巧

## 时间格式化（将时间转为时分秒）

``` js:line-numbers
const timeFromDate = date => date.toTimeString().slice(0, 8)
timeFromDate(new Date(2021, 11, 2, 12, 30, 0));  // 12:30:00
timeFromDate(new Date());  // 返回当前时间 09:00:00
```

## 获取URL参数
``` js:line-numbers
Object.fromEntries(new URLSearchParams(window.location.search))
```

## 格式化金额(千分位)
``` js:line-numbers
const num = 100010001;
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // 100,010,001
```

## 自定义位数补0
``` js:line-numbers
const fillZero = (num, len) => num.toString().padStart(len, "0");
fillZero(9, 2);    // 09
```

## 保留小数（保持精度）
> 利用进行指数倍增，再指数缩减的方式，可以实现保留任意位数小数，还可以避免精度丢失的问题。
``` js:line-numbers
const round = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;

round(12.453,2);       // 12.45
round(12.457,2);       // 12.46
```

## 判断数据类型
> 利用 `Object.prototype.toString.call`方法可以准确判断数据类型

``` js:line-numbers
const type = (val) => Object.prototype.toString.call(val).slice(8, -1);

type(1);              // Number
type('s');            // String
type(false);          // Boolean
type([]);             // Array
type({});             // Object
type(new Date());     // Date
type(Symbol(0));      // Symbol
type(undefined);      // Undefined
type(null);           // Null
```

## 图片懒加载
> 利用 `IntersectionObserver()`构造器创建并返回一个 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)。对象，通过观察 `intersectionRatio`的状态来确定目标是否在视口内
``` js:line-numbers
const lazyLoad = function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if ( entry.intersectionRatio > 0 ) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target)
            }
        })
    })
    Array.from(document.getElementsByTagName('img')).forEach(el => {
        observer.observe(el)
    })
}
```

## 保留固定位数的小数
``` js:line-numbers
const formatterNum = (v)=>{
    if(v.includes('.')){
        const pair = val.split('.'); 
        return `${pair[0]}.${pair[1].slice(0, 2)}`;           
    }else {
        return v    
    }
}
```

## 判断空对象
``` js:line-numbers
isEmpty(obj) {
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}
```
