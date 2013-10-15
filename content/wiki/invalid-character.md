
# 无效字符

----

| Language | Message                           |
|----------|-----------------------------------|
| 简体中文 | 无效字符                          |
| 繁体中文 | 不正確的字元                      |
|          | 字元無效                          |
| 英文     | Invalid character                 |
| 日文     | 文字が正しくありません。          |
| 俄文     | Недопустимый знак |

使用被 JavaScript 编译器识别为无效的一个或多个字符来组合标识符。 有效字符使用下列规则：

* 第一个字符必须是 ASCII 字母（大写或小写）或下划线 (_)。
* 随后的字符可以是 ASCII 字母、数字或下划线。
* 标识符名称不能是保留字。

应该避免使用不属于 JavaScript 语言定义的字符。

## 案例

| 异常字段 | 值                                      |
|----------|-----------------------------------------|
| Message  | Invalid character                       |
| URL      | https://auth.alipay.com/login/index.htm |
| File     | https://auth.alipay.com/login/index.htm |
| Line     | 300                                     |

## 相关异常


## 延伸阅读

* [无效字符(JavaScript)](http://msdn.microsoft.com/zh-cn/library/67wha3s7(v=vs.94\).aspx)
* [无效字符 (VBScript)](http://doc.51windows.net/vbscript/?url=/vbscript/html/vserrinvalidcharacter.htm)
* [IE下js报行:X 错误:无效字符 的问题](http://blog.csdn.net/zhimin8haomi/article/details/5267034)
  - 迁移代码文件后找不到被引用的脚本（然后就会引入 404 页面）所导致的异常。
* [脚本发生错误（无效字符）](http://pansanday.blog.163.com/blog/static/38166280201238721177/)
  - 复制网页中的代码中包含中文标点符合导致。
