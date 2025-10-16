
# DOM Exception: INVALID\_CHARACTER\_ERR (5)

----

| Language | Message                                  | Browser |
|----------|------------------------------------------|---------|
| 英文     | DOM Exception: INVALID_CHARACTER_ERR (5) | IE9     |

## 分析

IE9 创建元素(createElement) 开始严格遵循标准实现，不支持传入完整的 HTML 代码方式。

```javascript
document.createElement('<input type="text" name="user" />');
```

应该使用标准方式：

```javascript
var input = document.createElement("input");
input.setAttribute("name", "user");
input.setAttribute("type", "text");
```

## 案例


## 相关参考


## 参考

* [DOM Exception: INVALID_CHARACTER_ERR (5)](http://stackoverflow.com/questions/5990917/dom-exception-invalid-character-err-5)
* [Invalid Character DOM Exception in IE9](http://stackoverflow.com/questions/5344029/invalid-character-dom-exception-in-ie9)
* [Javascript: DOM Exception: INVALID_CHARACTER_ERR (5)](http://stackoverflow.com/questions/6169901/javascript-dom-exception-invalid-character-err-5)
* [IE9 : DOM Exception: INVALID_CHARACTER_ERR (5)](http://blog.csdn.net/a497785609/article/details/6317502)
    [2](http://www.cnblogs.com/zhangqs008/archive/2011/04/12/2341141.html)
* [IE9 - DOM Exception: INVALID_CHARACTER_ERR (5)](https://github.com/brandonaaron/bgiframe/issues/6)
* [DOM Exception Error Codes](http://msdn.microsoft.com/en-us/library/ie/gg592979(v=vs.85\).aspx)
* http://www.ajaxbbs.net/post/IE9-DOMException-INVALID_CHARACTER_ERR.html
