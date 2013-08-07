
# Script error.

- tags: 可排除

----

| Language | Message                  | Browser                         | 备注 |
|----------|--------------------------|---------------------------------|------|
| 英文     | Script error.            | Firefox, Chrome, Safari, Opera. |      |
|          | Script Error: 0x80072ee4 |                                 |      |

## 分析

异常信息通常如下：

| 异常字段 | 值            |
|----------|---------------|
| Message  | Script error. |
| File     | (空)          |
| Line     | 0             |

1. 在某些版本的 Firefox 中，地址栏执行脚本 `javascript:notExistFunction()`
    代码，Firebug 可以提示正确的 `"notExistFunction" is undefined`，
    但是 onerror 异常事件处理函数中得到的错误消息却是 `Script error.`。
1. 用户脚本(userscript) 异常导致。
1. 因为同源策略，Firefox, Chrome, Safari 等浏览器，
    页面引用的非同域的外部脚本中抛出了异常，本页面无权限获得这个异常详情，
    所以就成了 `Script error.`。静态脚本使用独立域名未必就一定是件好事啊。


## 案例

a.com/a.html

```html
<script type="text/javascript">
    window.onerror = function(m,f,l){
        var s = "message:"+m+", file:"+f+", line:"+l;
        console.log(s);
        window.status = s;
    };
</script>
<script type="text/javascript" src="b.com/b.html"></script>
```

这里 a.com/a.html 页面引用了 b.com/b.html 脚本『注意：b.html 是一个页面』，
这时会抛出异常：

| Browser | type    | Message                                                                                              | File         | Line |
|---------|---------|------------------------------------------------------------------------------------------------------|--------------|------|
| IE      | console | 语法错误                                                                                             | b.com/b.html | 1    |
|         | onerror | 语法错误                                                                                             | b.com/b.html | 1    |
| Firefox | console | syntax error                                                                                         | b.com/b.html | 1    |
|         | onerror | Script error.                                                                                        |              | 0    |
| Chrome  | console | Uncaught SyntaxError: Unexpected token &lt;                                                          | b.com/b.html | 1    |
|         | onerror | Script error.                                                                                        |              | 0    |
| Safari  | console |                                                                                                      |              |      |
|         | onerror | Script error.                                                                                        |              | 0    |
| Opera   | console | Syntax error at line 1 while loading: expected expression, got '<'<br /><!DOCTYPE html PUBLI <br />^ | a.com/a.html | 4    |
|         | onerror | Script error.                                                                                        |              | 0    |


引入外部脚本，该外部脚本会抛出异常：

a.com/a.html

```html
<script type="text/javascript">
    window.onerror = function(m,f,l){
        var s = "message:"+m+", file:"+f+", line:"+l;
        console.log(s);
        window.status = s;
    };
</script>
<script type="text/javascript" src="b.com/b.js"></script>
```

b.com/b.js

```javascript
// some comments
// for lines.
var a = ;
```

| Browser | type    | Message                                                                                        | File         | Line |
|---------|---------|------------------------------------------------------------------------------------------------|--------------|------|
| IE      | console | 语法错误                                                                                       | b.com/b.js   | 3    |
|         | onerror | 语法错误                                                                                       | b.com/b.js   | 3    |
| Firefox | console | syntax error                                                                                   | b.com/b.js   | 3    |
|         | onerror | Script error.                                                                                  |              | 0    |
| Chrome  | console | Uncaught SyntaxError: Unexpected token ;                                                       | b.com/b.js   | 3    |
|         | onerror | Script error.                                                                                  |              | 0    |
| Safari  | console | Script error.                                                                                  |              | 0    |
|         | onerror | Script error.                                                                                  |              | 0    |
| Opera   | console | Syntax error at line 3 while loading: expected expression, got ';'<br/>var a = ;<br/>--------^ | a.com/a.html | 4    |
|         | onerror | Script error.                                                                                  |              | 0    |


特殊的，如果是脚本中主动掷出的异常，Safari 会稍有不同。

b.com/b.js

```javascript
// some comments
// for lines.
throw new Error("test error on b.");
```

| Browser | type    | Message                                     | File         | Line |
|---------|---------|---------------------------------------------|--------------|------|
| IE      | console | test error on b.                            | b.com/b.js   | 3    |
|         | onerror | test error on b.                            | b.com/b.js   | 3    |
| Firefox | console | test error on b.                            | b.com/b.js   | 3    |
|         | onerror | Script error.                               |              | 0    |
| Chrome  | console | Uncaught Error: test error on b.            | b.com/b.js   | 3    |
|         | onerror | Script error.                               |              | 0    |
| Safari  | console | Error: test error on b.                     |              |      |
|         | onerror | undefined                                   |              | 0    |
| Opera   | console | Uncaught exception: Error: test error on b. | a.com/a.html | 4    |
|         | onerror | Script error.                               |              | 0    |


## 参考

* [Cryptic “Script Error.” reported in Javascript in Chrome and Firefox](http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox)
* [WebKit source that checks origin](http://trac.webkit.org/browser/branches/chromium/648/Source/WebCore/dom/ScriptExecutionContext.cpp?rev=77122#L301)
* [Firefox source that checks](http://mxr.mozilla.org/mozilla-beta/source/dom/base/nsJSEnvironment.cpp#316)
* [Same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy)
