
# uncaught exception: unknown (can't convert to string)

----

| Language | Message                                               |
|----------|-------------------------------------------------------|
| 英文     | uncaught exception: unknown (can't convert to string) |

Firefox 的 BUG。抛出的 JavaScript 异常如果是一个对象，并且这个对象有定义 toString 方法时，
就会抛出这个异常。这个 bug 在 2006 年 v1.5 已经被修复，难道是旧病复发？

不建议抛出自定义对象的 JavaScript 异常。
`throw new Error(msg)` 能够兼容绝大多数浏览器。

## 案例

| 异常字段 | 值                                                                                       |
|----------|------------------------------------------------------------------------------------------|
| URL      | [https://self.alipay.com/task/sendTaskEmail.htm]                                         |
| Message  | uncaught exception: unknown (can't convert to string)                                    |
| UA       | Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-TW; rv:1.9.2.4) Gecko/20100611 Firefox/3.6.4 |


## 相关异常


## 参考

* [Bug 350650 - js reports "uncaught exception: unknown (can't convert to string)"](https://bugzilla.mozilla.org/show_bug.cgi?id=350650)
