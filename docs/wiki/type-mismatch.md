
# 类型不匹配

----

| Language | Message       | Number      |
|----------|---------------|-------------|
| 简体中文 | 类型不匹配    | -2146828275 |
| 简体中文 | 类型不匹配。  | -2147352571 |
| 繁体中文 | 型態不符合    |             |
| 英文     | Type mismatch |             |

## 分析

```javascript
elem.appendChild("I am not HTMLElemnt.");
```

| Browser | Language | Message                                                                        | Number      |
|---------|----------|--------------------------------------------------------------------------------|-------------|
| IE      | 简体中文 | 类型不匹配。                                                                   | -2147352571 |
| Firefox | 英文     | Could not convert JavaScript argument arg 0 [nsIDOMHTMLDivElement.appendChild] |             |
| Chrome  | 英文     | NOT_FOUND_ERR: DOM Exception 8                                                 |             |
| Safari  | 英文     | NOT_FOUND_ERR: DOM Exception 8                                                 |             |
| Opera   | 英文     | WRONG_ARGUMENTS_ERR                                                            |             |

```javascript
new ActiveXObject(); // 『类型不匹配』

var xhr = new ActiveXObject("Msxml2.XMLHTTP");
xhr.onreadystatechange = handler(); // 『类型不匹配』，注意最后的括号。
```

## 案例

| 异常字段 | 值                                                               |
|----------|------------------------------------------------------------------|
| Message  | 类型不匹配                                                       |
| URL      | https://cashier.alipay.com/standard/gateway/phoneCardDeposit.htm |
| File     | https://cashier.alipay.com/standard/gateway/phoneCardDeposit.htm |
| Line     | 19                                                               |


----

```javascript
xmlHttp.onreadystatechange = updatePage(t_id);
```


----

```javascript
elem.appendChild(txt);
```

## 相关异常

* [参数无效。](invalid-argument.md)

## 参考

* [类型不匹配 (Visual Basic)](http://msdn.microsoft.com/zh-cn/library/3etdkytt%28v=vs.80%29.aspx)
* [类型不匹配](http://www.hudong.com/wiki/%E7%B1%BB%E5%9E%8B%E4%B8%8D%E5%8C%B9%E9%85%8D)
