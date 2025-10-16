
# Invalid range in character set

----

| Language | Message                        |
|----------|--------------------------------|
| 英文     | Invalid range in character set |

通常是正则表达式有范围表达式使用了错误的范围，例如：

```javascript
var good = /[a-z]/;
var bad = /[z-a]/;
```

## 案例

| 异常字段 | 值                                                                                                                                         |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://securitycenter.alipay.com/cert/installByEmailSend.htm                                                                              |
| File     | https://securitycenter.alipay.com/cert/installByEmailSend.htm                                                                              |
| Line     | 1                                                                                                                                          |
| UA       | Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.1; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729) |

## 相关异常


## 参考

* [[http://msdn.microsoft.com/en-us/site/29xff710|Invalid range in character set (JavaScript)]]
* [[http://msdn.microsoft.com/en-us/site/85f00xy2|Invalid range in character set (VBScript)]]
