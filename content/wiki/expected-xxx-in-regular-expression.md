
# 正则表达式中缺少 'XXX'

----

| Language | Message                              |
|----------|--------------------------------------|
| 简体中文 | 正则表达式中缺少 'XXX'               |
| 英文     | Expected 'XXX' in regular expression |

## 案例

```javascript
new RegExp("(");
```

| Browser | Language | Message                                                                   | Number      |
|---------|----------|---------------------------------------------------------------------------|-------------|
| IE      | 简体中文 | 正则表达式中缺少 ')'                                                      | -2146823268 |
| Chrome  | 英文     | Uncaught SyntaxError: Invalid regular expression: /(/: Unterminated group |             |
| Firefox |          | unterminated parenthetical                                                |             |
| Opera   |          | RegExp constructor: invalid regular expression                            |             |
| Safari  |          | Invalid regular expression: missing )                                     |             |


----

```javascript
new RegExp("[");  // 正则表达式中缺少 ']'
```

| Browser | Language | Message                                                               | Number      |
|---------|----------|-----------------------------------------------------------------------|-------------|
| IE      | 简体中文 | 正则表达式中缺少 ']'                                                  | -2146823269 |
| Chrome  | 英文     | Invalid regular expression: /[/: Unterminated character class         |             |
| Firefox |          | invalid range in character class                                      |             |
| Opera   |          | 无异常                                                                |             |
| Safari  |          | Invalid regular expression: mission terminating ] for character class |             |



| 异常字段 | 值                   |
|----------|----------------------|
| Message  | 正则表达式中缺少 ']' |

----

| 异常字段 | 值                                 |
|----------|------------------------------------|
| Message  | Expected ']' in regular expression |

----

| 异常字段 | 值                                 |
|----------|------------------------------------|
| Message  | Expected ')' in regular expression |

## 相关异常

* [错误的数量词](unexpected-quantifier.md)
* [正则表达式语法错误](regular-expression-syntax-error.md)

<!-- 抛出相关异常 -->
<script type="text/javascript">
try{new RegExp('(');}catch(ex){monitor.error(ex);}
try{new RegExp("[");}catch(ex){monitor.error(ex);}
</script>

## 参考

* [正则表达式中应有“)”](http://msdn.microsoft.com/zh-cn/library/5ay321c5(v=vs.94\).aspx)
* [正则表达式中应有“\]”](http://msdn.microsoft.com/zh-cn/library/tad157ds(v=vs.94\).aspx)
