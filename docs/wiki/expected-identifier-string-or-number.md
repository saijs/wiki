
# 缺少标识符、 字符串或数字

----

| Language | Message                                  |
|----------|------------------------------------------|
| 简体中文 | 缺少标识符、 字符串或数字                |
| 英文     | Expected identifier, string or number    |
| 法文     | Identificateur, chaîne ou nombre attendu |

JavaScript Object 最后多了一个逗号导致：

```javascript
var obj = {
    key:value ,
};
```

另有可能是使用了 JavaScript 保留字作为变量名。


## 相关

* [缺少标识符](expected-identifier.md)
