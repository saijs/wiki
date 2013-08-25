
# 堆栈溢出

----

| Language | Message                                                |           | Error Type    |
|----------|--------------------------------------------------------|-----------|---------------|
| 简体中文 | 堆栈溢出                                               |           |               |
| 英文     | Out of stack space                                     | IE9       | Error         |
|          | too much recursion                                     | Firefox 4 | InternalError |
|          | Maximum call stack size exceeded                       | Safari 5  | RangeError    |
|          | Maximum call stack size exceeded, type: stack_overflow | Chrome 10 | RangeError    |
|          | Maximum recursion depth exceeded                       | Opera 11  | Error         |


## 案例

同时引用两次对同一个原生方法进行重写的脚本导致无限循环调用。

参考：
* [未知异常: Maximum call stack size exceeded](http://www.zizhujy.com/blog/post/2012/03/18/Uncaught-RangeError-Maximum-call-stack-size-exceeded.aspx)
    [2](http://blog.csdn.net/vean_system/article/details/7799232)
* [对JavaScript的Math.pow()函数的一个修正](http://zizhujy.com/blog/post/2012/02/21/%E5%AF%B9JavaScript%E7%9A%84Mathpow(\)%E5%87%BD%E6%95%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E4%BF%AE%E6%AD%A3.aspx)

## 相关异常

* [内存不够](out-of-memory.md)

## 参考

* [Maximum call stack size exceeded error](http://stackoverflow.com/questions/6095530/maximum-call-stack-size-exceeded-error)
* [JSpec - RangeError: Maximum call stack size exceeded](http://stackoverflow.com/questions/1814337/jspec-rangeerror-maximum-call-stack-size-exceeded)
* [V8中的堆栈溢出错误](http://blog.csdn.net/gengshenghong/article/details/7583821)
* [JavaScript 中的堆栈溢出和内存不足](http://www.bokeyy.com/post/javascript-out-of-memery-and-stack.html)
* [JavaScript stack overflow error](http://www.nczonline.net/blog/2009/05/19/javascript-stack-overflow-error/)
* [对于JavaScript的 Stack overflow at line 错误总结](http://www.cnblogs.com/S.Sams/archive/2009/01/18/1377783.html)
