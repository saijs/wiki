
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

参考： [未知异常: Maximum call stack size exceeded](http://www.zizhujy.com/blog/post/2012/03/18/Uncaught-RangeError-Maximum-call-stack-size-exceeded.aspx)
[2](http://blog.csdn.net/vean_system/article/details/7799232)

## 相关异常

* [内存不够](out-of-memory.md)

## 参考

* [JavaScript 中的堆栈溢出和内存不足](http://www.bokeyy.com/post/javascript-out-of-memery-and-stack.html)
* [JavaScript stack overflow error](http://www.nczonline.net/blog/2009/05/19/javascript-stack-overflow-error/)
* [对于JavaScript的 Stack overflow at line 错误总结](http://www.cnblogs.com/S.Sams/archive/2009/01/18/1377783.html)
