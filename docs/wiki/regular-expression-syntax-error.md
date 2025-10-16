
# 正则表达式语法错误

----

| Language | Message            | Number |
|----------|--------------------|--------|
| 简体中文 | 正则表达式语法错误 |        |

## 案例

```javascript
new RegExp(")");  // 正则表达式语法错误
```

| Browser | Language | Message                                           | Number      |
|---------|----------|---------------------------------------------------|-------------|
| IE      | 简体中文 | 正则表达式语法错误                                | -2146823271 |
| Chrome  | 英文     | Invalid regular expression: /)/: Unmatched ')'    |             |
| Firefox |          | unmatched ) in regular expression                 |             |
| Opera   |          | RegExp constructor: invalid regular expression    |             |
| Safari  |          | Invalid regular expression: unmatched parentheses |             |



## 相关异常

1. [错误的数量词](unexpected-quantifier.md)
1. [正则表达式中缺少 'XXX'](expected-xxx-in-regular-expression.md)

## 参考

* [正则表达式中有语法错误](http://msdn.microsoft.com/zh-cn/library/43z1w3ay%28v=vs.80%29.aspx)
