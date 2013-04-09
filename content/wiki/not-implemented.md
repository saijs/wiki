
# 尚未实现

----

| Language | Message            | Number      |
|----------|--------------------|-------------|
| 简体中文 | 尚未实现           | -2147467263 |
| 日文     | 実装されていません |             |

## 分析

绑定事件时，事件处理函数带括号被立即执行，而这个处理函数本身又不是返回函数类型的，
就会报这个错误。

## 案例

```javascript
function handler(){}

var xhr = new XMLHttpRequest(); // IE8 支持 XMLHttpRequest 对象。
xhr.onreadystatechange = handler(); // 但是回调函数类型不是函数时，抛出『尚未实现』的异常。

elem.onclick = handler(); // 尚未实现
```

## 参考

* [JS报 “尚未实现”  错误](http://www.cnblogs.com/trance/archive/2011/07/29/2120681.html)
* [javascript 尚未实现错误解决办法](http://blog.csdn.net/xiaohutushen/article/details/1772980)
