# JavaScript

## 数据类型

### 字符串

```javascript
var str = 'hello world';
var str = "hello world";
var str = 'hello "world"';
```

### 数值

```javascript
var num = 100;
var num = 0.01;
var num = 100e5;
var num = 100e-5;
```

### 布尔

```javascript
var bool = true;
var bool = false;
```

### 数组

```javascript
var array = new Array();
array[1] = 100;
array[2] = 200;
```

### 对象

```javascript
var person = {
firstname : "John",
lastname  : "Doe",
id        :  5566
};

// 寻址方法

name = person.lastname;
name = person["lastname"];
```

### Undefined 和 Null

```javascript
var a; // Undefined
person = null;
```

当声明新变量时，可以使用关键词 `new` 来声明其类型：`var person = new Object;`

> JavaScript 变量均为对象，当声明一个变量时，就创建了一个新的对象。