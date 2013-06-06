
# 未结束的字符串常量

----

| Language | Message                            |
|----------|------------------------------------|
| 简体中文 | 未结束的字符串常量                 |
| 繁体中文 | 無法判定字串常數的結尾             |
| 英文     | Unterminated string constant       |
| 日文     | 終了していない文字列型の定数です。 |

一般由后端传的变量中带有换行符/引号造成，也有可能是编码造成的特殊字符异常。

## 案例

```javascript
function show(value) {
    alert(value);
}
var script = '<script>show("test\n\r");<\/script>';
document.write(script);
```

javascript编码时把\n\r转换为换行，最后输出在页面的javascript变成

```
show("test
);
```

所以造成javascript语法错误。

使用jsonp获取后台输出的html页面容易出现此问题，需要在服务器端过滤\r\n。

| Browser    | Message                                                                                        | Number |
|------------|------------------------------------------------------------------------------------------------|--------|
| IE 6,7,8   | 未结束的字符串常量                                                                             |        |
| Chrome 22  | Unexpected token ILLEGAL                                                                       |        |
| Firefox 21 | unterminated string literal                                                                    |        |

## 相关异常


## 参考

* [javascript 未结束的字符串常量](http://www.emool.cn/archives/y2008/140.html)
