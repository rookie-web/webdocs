# 类的继承方式（ES5）

ES5 中类的继承方式及优缺点

##  1.原型链继承

**核心：** 将父类的实例作为子类的原型  
**缺点：** 父类新增原型方法/原型属性，子类都能访问到，父类一变其它的都变了

```js:line-numbers
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  //对原型进行扩展
  return this.name;
};
function Parent(age) {
  this.age = age;
}
Parent.prototype = new Person("老明"); // 原型链继承
Parent.prototype.getAge = function () {
  return this.age;
};

Parent.prototype.getName = function () {
  //可以重写从父类继承来的方法,会优先调用自己的。
  console.log(222);
};

var result = new Parent(22);
console.log(result.getName()); //老明　　//调用了从Person原型中继承来的方法(继承到了当前对象的原型中)
console.log(result.getAge()); //22 　　//调用了从Parent原型中扩展来的方法
```

##  2.构造函数继承

**核心：** 借用构造函数的基本思想就是利用call或者apply把父类中通过this指定的属性和方法复制（借用）到子类创建的实例中。  
**缺点：**  
1. 只能继承父类构造函数的属性; 
2. 无法实现构造函数的复用。（每次用每次都要重新调用）
3. 每个新实例都有父类构造函数的副本

``` js:line-numbers
function Person (name) {
    this.name = name;
    this.friends = ['小李','小红'];
    this.getName = function () {
        return this.name;
     }
};

Person.prototype.geSex = function () {    //对原型进行扩展的方法
    console.log("男");
};

function Parent = (age) {
    Person.call(this,'老明');　　//这一句是核心关键
    //这样就会在新parent对象上执行Person构造函数中定义的所有对象初始化代码，
    // 结果parent的每个实例都会具有自己的friends属性的副本
    this.age = age;
};

var result = new Parent(23);
console.log(result.name);　　　　//老明
console.log(result.friends);　　//["小李", "小红"]
console.log(result.getName());　　//老明
console.log(result.age);　　　　//23
console.log(result.getSex());　　//这个会报错，调用不到父原型上面扩展的方法
```


##  3.组合继承

**核心：** 使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承  
**缺点：** 调用了两次父类构造函数，生成了两份实例

``` js:line-numbers
function Person  (name) {
    this.name = name;
    this.friends = ['小李','小红'];
};

Person.prototype.getName = function () {
    return this.name;
};

function Parent (age) {
    Person.call(this,'老明');　　//调用构造函数的方法和属性
    this.age = age;
};

Parent.prototype = new Person('老明');　//调用原型上的属性和方法
Parent.prototype.constructor = Parent

var result = new Parent(24);
console.log(result.name);　　　　//老明
result.friends.push("小智");
console.log(result.friends);　　//['小李','小红','小智']
console.log(result.getName());　　//老明
console.log(result.age);　　　　//24

var result1 = new Parent(25);   //通过借用构造函数都有自己的属性，通过原型享用公共的方法
console.log(result1.name);　　//老明
console.log(result1.friends);　　//['小李','小红']
```


##  4.原型式继承
**核心：** 用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。  
**缺点：**  所有实例都会继承原型上的属性，无法实现复用

``` js:line-numbers
// 封装一个函数容器 等同于ES5 Object.create()方法
function obj(o) {
    function F() {};
    F.prototype = o;
    return new F();
};
function Person  (name) {
    this.name = name;
    this.friends = ['小李','小红'];
};

Person.prototype.getName = function () {
    return this.name;
};
var result = obj(new Person());
// var result = Object.create(new Person());  ES5 Object.create()方法
console.log(result.friends)
```

##  5.寄生式继承
**核心：** 没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象，就是给原型式继承外面套了个壳子。  
**缺点：**  没用到原型，无法复用

``` js:line-numbers
// 封装一个函数容器
function obj(o) {
    function F() {};
    F.prototype = o;
    return new F();
};
function Person  (name) {
    this.name = name;
    this.friends = ['小李','小红'];
};

Person.prototype.getName = function () {
    return this.name;
};
//  通过调用函数创建一个新对象
function createObj (orignal) {
    var clone = obj(orignal)
    clone.sayHi = function () {
        alert('hi')
    };
    return clone
}
var result = createObj(new Person())
console.log(result.sayHi())
```

##  6.寄生组合式继承
**核心：** 整合以上及方式优点  
``` js:line-numbers
function Person  (name) {
    this.name = name;
    this.friends = ['小李','小红'];
};

Person.prototype.getName = function () {
    return this.name;
};

function Student (name, className) {
    Person.call(this,name)
    this.className = className
}
Student.prototype = Object.create(Person.prototype )
Student.prototype.constructor = Student
Student.prototype.sayHi = function () {
    console.log(this.name+'hi'+this.className)
};
var result  = new Student('ceo','class1')
console.log(result.friends)
```