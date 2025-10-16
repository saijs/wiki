
# 缺少十六进制数字

----

| Language | Message          |
|----------|------------------|
| 简体中文 | 缺少十六进制数字 |

字符串中的反斜线未转义，`\x` 之后的字符是不合法的十六进制字符时，
会导致这个异常。

```javascript
var a = "\x6";
var path = "C:\xls\path";
```

| Browser | Message                                         |
|---------|-------------------------------------------------|
| IE      | 缺少十六进制数字                                |
| Firefox | malformed hexadecimal character escape sequence |
| Chrome  | (无异常)                                        |
| Safari  | (无异常)                                        |
| Opera   | (无异常)                                        |

字符串中普通反斜线，应该被转义成双反斜线。

```javascript
var a = "\\x6";
var path = "C:\\xls\\path";
```

## 案例

| 异常字段 | 值                                      |
|----------|-----------------------------------------|
| Message  | 缺少十六进制数字                        |
| URL      | https://auth.alipay.com/login/index.htm |
| File     | https://auth.alipay.com/login/index.htm |
| Line     | 805                                     |


----

| 异常字段 | 值                                           |
|----------|----------------------------------------------|
| Message  | 缺少十六进制数字                             |
| URL      | [https://auth.alipay.com/login/certCheck.htm |
| File     | [https://auth.alipay.com/login/certCheck.htm |
| Line     | 94                                           |


----

| 异常字段 | 值                                                               |
|----------|------------------------------------------------------------------|
| URL      | https://cashier.alipay.com/standard/gateway/optimizedMotoPay.htm |
| File     | https://cashier.alipay.com/standard/gateway/optimizedMotoPay.htm |
| Line     | 94                                                               |

多个不同页面都抛有这个脚本异常，且异常行号都是 94，异常次数采样在 1 左右，
可能是客户端脚本自身的异常。


## 相关异常


## 延伸阅读
