
# 找不到指定的程序。

----

| Language | Message            |
|----------|--------------------|
| 简体中文 | 找不到指定的程序。 |

未知，猜测是 ActiveXObject 对象抛出的异常。

## 案例

| 异常字段 | 值                                                     |
|----------|--------------------------------------------------------|
| URL      | https://tradeexprod.alipay.com/excashier/excashier.htm |
| File     | https://static.alipay.com/build/js/um/um.js            |
| Line     | 1                                                      |
| UA       | IE8, .NET CLR 1.1.4322                                 |

```javascript
new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
```

几个 ActiveXObject 相关的操作都加了 try/catch，理论上是不会抛出异常的。


## 相关异常


## 延伸阅读
