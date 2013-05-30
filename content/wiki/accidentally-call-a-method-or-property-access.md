
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
<body>
```
```javascript
var row = document.createElement("tr");
document.getElementById("tbody").appendChild(row);
```
由错误的标签嵌套引起，IE会报此错误。

----

```javascript
var iframe = document.createElement("iframe");
var form = document.createElement("form");
iframe.appendChild(form);
```
iframe还没有添加到document中时，向iframe中添加子节点，IE会报此错误。

----

## 相关异常


## 延伸阅读
