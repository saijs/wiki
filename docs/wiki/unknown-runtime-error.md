
# 未知的运行时错误

----

| Language | Message                  |
|----------|--------------------------|
| 简体中文 | 未知的运行时错误         |
| 英文     | Unknown runtime error    |
| 日文     | 未知の実行時エラーです。 |

一般是 IE 中由于 innerHTML 设置了不合适的值造成，比如 table, tr, li, p, form 之类的非法嵌套。


## 案例

今天遇到“未知的运行时错误”，调试代码都是正常的，效果展示也是正常的，调试了一下。

原因：这个表单中有两个需要将金额转化成中文大写金额，每个都对应一个span标签，
分别两个不同id，但是我js代码写了同一个ID，这样导致了这个错误。

实例如下：

![](../public/images/unknown-runtime-error-1.jpg)

导致问题代码：

```javascript
// 付款账户留存金额rmbconvert
E.on("J_amountMoney", "keyup", function(e){
    D.get("J_startEndMoneyCn").innerHTML = AP.widget.RMBConvert(D.get("J_amountMoney").value);
});

//起结金额rmbconvert
E.on("J_startEndMoney", "keyup", function(e){
    D.get("J_startEndMoneyCn").innerHTML = AP.widget.RMBConvert(D.get("J_startEndMoney").value);
});
```

正确的代码：

```javascript
// 付款账户留存金额rmbconvert
E.on("J_amountMoney", "keyup", function(e){
    D.get("J_amountMoneyCn").innerHTML = AP.widget.RMBConvert(D.get("J_amountMoney").value);
});

//起结金额rmbconvert
E.on("J_startEndMoney", "keyup", function(e){
    D.get("J_startEndMoneyCn").innerHTML = AP.widget.RMBConvert(D.get("J_startEndMoney").value);
});
```

冒顿点评：

这里提供的相关代码只是入口代码，修复后确实可以避免触发异常，但是实际抛出异常的
代码应该是在 `AP.widget.RMBConvert` 中。

## 相关异常


## 延伸阅读

* [设置 innerHTML 属性 导致 未知的运行时错误 IE bug](http://www.leakon.com/archives/41)
* [innerHTML 属性 导致 未知的运行时错误 IE bug](http://www.cnblogs.com/it563/articles/1178067.html)
* [htmlfile: 未知的运行时错误](http://wenqingluomo.blog.163.com/blog/static/7917174020106531238488/)
* [JavaScript 运行时错误](http://msdn.microsoft.com/zh-cn/library/1dk3k160(v=vs.94\).aspx)
