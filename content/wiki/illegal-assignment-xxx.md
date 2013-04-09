
# 非法赋值: 'XXX'

----

| Language | Message                      |
|----------|------------------------------|
| 简体中文 | 非法赋值: 'MsgBox'           |
| 英文     | Illegal assignment: 'MsgBox' |

这个异常多发在 IE6,IE7 中。

页内或外联脚本都没有 MsgBox 相关代码，网络搜索也没有 JavaScript 相关的解释。
目前已知是 VBScript 可能会抛出这个异常，MsgBox 是 VBScript 的一个方法，
可以被调用，但不可被赋值。

~~猜测是客户端有自己安装的其他插件造成的脚本异常。~~

爆发次数很多，异常率也很高，这些异常都爆发在有密码控件的页面，怀疑密码控件有关。
但是密码控件相关的开发同学说没有使用 MsgBox 相关的方法。

## 案例

| 异常字段 | 值                                       |
|----------|------------------------------------------|
| Message  | 非法赋值: 'MsgBox'                       |
| URL      | https://auth.alipay.com/login/option.htm |
| File     | https://auth.alipay.com/login/option.htm |
| Line     | 1                                        |


----

| 异常字段 | 值                                     |
|----------|----------------------------------------|
| Message  | 非法赋值: 'MsgBox'                     |
| URL      | https://auth.alipay.com/login/xbox.htm |
| File     | https://auth.alipay.com/login/xbox.htm |
| Line     | 1                                      |

## 相关异常


## 延伸阅读

* [VBScript 教程](http://www.microsoft.com/china/vbscript/vbstutor/vbstutor.htm)
* [JS5008：非法赋值](http://msdn.microsoft.com/zh-cn/library/17a8353d(v=vs.90\).aspx)
* [非法赋值](http://doc.51windows.net/vbscript/?url=/vbscript/html/vserrillegalassignment.htm) - Visual Basic Scripting Edition Document.
    [2](http://codecoke.com/tech/VBscript/vserrillegalassignment.htm)

    > **非法赋值**
    >
    > 在一个赋值操作的左边试图使用一个只读标识符。不能对一个只读标识符赋值。
    >
    > 要纠正该错误
    >
    > 只在一个赋值操作的右边使用只读标识符。
