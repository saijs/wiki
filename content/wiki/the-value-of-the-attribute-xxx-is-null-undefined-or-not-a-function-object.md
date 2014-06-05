
# 属性“XXX”的值为 null、未定义或不是 Function 对象

----

| Language | Message                                                                   |
|----------|---------------------------------------------------------------------------|
| 简体中文 | 属性“XXX”的值为 null、未定义或不是 Function 对象                        |
| 繁体中文 | 屬性 'XXX' 的值為 null 或未經定義，且不是 Function 物件                   |
| 韩文     | 'XXX' 속성 값이 null이거나 정의되지 않았습니다. Function 개체가 아닙니다. |

## 案例

| 异常字段 | 值                                                                  |
|----------|---------------------------------------------------------------------|
| Message  | 属性“_360se_youxi_js_test”的值为 null、未定义或不是 Function 对象 |

----

由于函数名写错（如下案例：大小写不匹配），被调用函数未定义导致的异常。

```js
seajs.use(["$"], function(jQ){

  // ...

  jq(selector)...
})
```

这种情况下，在 IE6,7,8 浏览器中，对应的异常为：

* [缺少对象](object-expected.md)

在 Webkit 内核的浏览器中，对应的异常为：

* [Uncaught ReferenceError: XXX is not defined](xxx-is-undefined.md)

## 相关异常

* [缺少对象](object-expected.md)
* [Uncaught ReferenceError: XXX is not defined](xxx-is-undefined.md)

## 延伸阅读
