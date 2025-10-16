
# 未结束的字符串常量

----

| Language | Message                            | Browser |
|----------|------------------------------------|---------|
| 简体中文 | 未结束的字符串常量                 | IE      |
| 繁体中文 | 無法判定字串常數的結尾             | IE      |
| 英文     | Unterminated string constant       | IE      |
|          | unterminated string literal        | Firefox |
|          | Unexpected token ILLEGAL           | Chrome  |
| 日文     | 終了していない文字列型の定数です。 | IE      |
| 西班牙   | Constante de cadena sin terminar   |         |
| 未知     | Constante chaîne non terminée     |         |

一般由后端传的变量中带有换行符/引号造成，也有可能是编码造成的特殊字符异常。

## 案例

```javascript
function show(value) {
    alert(value);
}
var script = '<script>show("test\n\r");<\/script>';
document.write(script);
```

JavaScript 编码时把 `\n\r` 转换为换行，最后输出在页面的 JavaScript 变成

```js
show("test
);
```

所以造成 JavaScript 语法错误。

使用 jsonp 获取后台输出的 html 页面容易出现此问题，需要在服务器端过滤 `\r\n` 等特殊符号。

| Browser    | Message                     | Number |
|------------|-----------------------------|--------|
| IE 6,7,8   | 未结束的字符串常量          |        |
| Chrome 22  | Unexpected token ILLEGAL    |        |
| Firefox 21 | unterminated string literal |        |

## 相关异常


## 参考

* [javascript 未结束的字符串常量](http://www.emool.cn/archives/y2008/140.html)
