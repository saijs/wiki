
# 意外地调用了方法或属性访问。

----

| Language | Message                      |
|----------|------------------------------|
| 简体中文 | 意外地调用了方法或属性访问。 |

## 案例

```html
<table>
</table>
    <tbody id="tbody">
    </tbody>
```

```javascript
var row = document.createElement("tr");
document.getElementById("tbody").appendChild(row);
```
由错误的标签嵌套引起，IE会报此错误。

| Browser    | Message                                                                                        | Number |
|------------|------------------------------------------------------------------------------------------------|--------|
| IE 6,7,8   | 意外地调用了方法或属性访问。                                                                   | 0      |
| IE 9       | 无法获取属性“appendChild”的值: 对象为 null 或未定义                                          | 0      |
| IE 10      | 无法获取未定义或 null 引用的属性“appendChild”                                                | 0      |
| Chrome 17  | Uncaught TypeError: Cannot call method 'appendChild' of null                                   |        |
| Safari 6   | TypeError: 'null' is not an object (evaluating 'document.getElementById("tbody").appendChild') |        |
| Firefox 21 | TypeError: document.getElementById(...) is null                                                |        |
| Opera 12   | Uncaught exception: TypeError: Cannot convert 'document.getElementById("tbody")' to object     |        |



----

```javascript
var iframe = document.createElement("iframe");
var form = document.createElement("form");
iframe.appendChild(form);
```
iframe还没有添加到document中时，向iframe中添加子节点，IE会报此错误。

----

## 相关异常

* [无法获取属性“XXX”的值：对象为 null 或未定义](unable-to-get-value-of-the-property-xxx-object-is-null-or-undefined.md)

## 延伸阅读
