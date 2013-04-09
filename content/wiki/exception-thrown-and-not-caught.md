
# 例外被抛出且未被接住

----

| Language | Message                         |
|----------|---------------------------------|
| 简体中文 | 例外被抛出且未被接住            |
|          | 引发了异常但未捕获              |
|          | JS5022：异常被引发且未被捕获    |
| 英文     | Exception thrown and not caught |

IE 浏览器中 throw 出非 Error 对象，异常消息均是这个。

```javascript
throw "err";
throw 1;
throw {};
throw new TypeError("type error");
throw new ReferenceError("ref err");
throw new SyntaxError("syntax error");

// ...
```

抛出异常建议使用：

```javascript
throw new Error("err message.");
```

## 案例

| 异常字段 | 值                                                      |
|----------|---------------------------------------------------------|
| Message  | Exception thrown and not caught                         |
| URL      | https://cashier.alipay.com/standard/gateway/payFlow.htm |
| File     | https://cashier.alipay.com/standard/gateway/payFlow.htm |
| Line     | 590                                                     |

----

| 异常字段 | 值                                                       |
|----------|----------------------------------------------------------|
| Message  | 例外被抛出且未被接住                                     |
| Message  | 引发了异常但未捕获                                       |
| URL      | https://cashier.alipay.com/standard/gateway/ebankPay.htm |
| File     | https://cashier.alipay.com/standard/gateway/ebankPay.htm |
| Line     | 1                                                        |


## 相关异常


## 延伸阅读

* [JavaScript 异常](http://blog.hotoo.me/javascript-exceptions.html)
* [JS5022：异常被引发且未被捕获](http://www.aspxhome.com/chm/JScript8/xk40eh20.htm)

    > 代码包含一个未包含在 try 块内的 throw 语句，或者代码不包含用于捕获错误的关联
    > catch 块。使用 throw 语句从 try 块中引发的异常将在 try 块外由 catch 语句捕获。
    >
    > 更正此错误
    >
    > 1. 将可以引发异常的代码放在 try 块中，并确保存在相应的 catch 块。
    > 1. 确保 catch 语句接受格式正确的异常。
    > 1. 如果重新引发异常，则确保存在另一个相应的 catch 语句。
