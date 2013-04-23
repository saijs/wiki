
# HTML Parsing Error: Unable to modify the parent container element before the child element is closed (KB927917)

----

| Language | Message                                                                                                         |
|----------|-----------------------------------------------------------------------------------------------------------------|
| 英文     | HTML Parsing Error: Unable to modify the parent container element before the child element is closed (KB927917) |

常见于 IE8 浏览器，不当的 DOM 操作，会导致这种异常。

解决方法（以下之一）：

* 将需要需要 DOM 操作的部分放到 dom ready 之后执行。
* 确保被操作的 DOM 已经渲染完成。
* 为浏览器安装 [KB2416400](http://www.microsoft.com/zh-cn/download/search.aspx?q=KB2416400&p=2&r=10&t=28&s=Relevancy~Descending) 补丁。


## 案例

### 现象：

### 异常描述：

当用户访问带有应用侧边栏的页面时，就有几率报 Unable to modify the parent
container element before the child element is closed 的错误，并导致页面渲染失败。

### 原因分析：

其一，3月28日上线的新代码中为了尽早执行侧边栏的相关代码，
没有把代码放在 domReady 之后运行。即代码的执行时机可能是页面正在渲染的时候。

其二，侧边栏代码执行时，如果页面元素的标签尚未正确闭合（即正在渲染的一个中间状态），
此时如果对未闭合的元素的父元素进行了操作（插入，删除，移动），就会报上述的错误。

经过排查，侧边栏的代码中，对应用中分页切换操作（switchable组件）过程中，
有一个预期之外的操作，这个操作往 body 里插入了一个 div 元素，最终导致了报错。

[演示](http://arale.alipay.im/alipay/appaside/examples/ie8-parse-error.html)

### 解决方法：

指定 switchable 的 element 参数（已闭合），避免被默认插入到 body 中
（body 未渲染完成的可能性比较大）。

详细故障可以参考 [支付宝故障单](http://itil.alipay.net/bug/bug_manage.htm?bugNo=BUG20130418482103&incidentNo=INC20130415175808597&action=view)。

## 相关异常


## 参考

* [Internet Explorer 无法打开 Internet 站点 XXX 操作已中止。(KB927917)](http://support.microsoft.com/KB/927917)
* [JS error in IE8 (HTML Parsing Error)](http://www.longtailvideo.com/support/forums/jw-player/setup-issues-and-embedding/10476/js-error-in-ie8-html-parsing-error)
* [Problem with HTML Parser in IE](http://stackoverflow.com/questions/301484/problem-with-html-parser-in-ie)
* [HTML Parsing Error--Unable to modify the parent container element before the child element is closed (KB927917)](http://answers.microsoft.com/en-us/ie/forum/ie9-windows_7/html-parsing-error-unable-to-modify-the-parent/968ddb1a-2e72-e011-8dfc-68b599b31bf5)
* [HTML Parsing Error: Unable to modify the parent element before the child element is closed (K927917) in eBay -- eBay problem or mine?](http://answers.microsoft.com/en-us/ie/forum/ie8-windows_vista/html-parsing-error-unable-to-modify-the-parent/932e9ebc-3168-4a5e-b65c-3407ad9b9bbf)
* [HTML Parsing Error: Unable to modify the parent container element before the child element is closed (KB927917)](http://answers.microsoft.com/en-us/ie/forum/ie8-windows_other/html-parsing-error-unable-to-modify-the-parent/e64759e0-d344-42d6-b1d8-0ce27504dd71)
* [I am new to IE8 and have received this error continuously since downloading IE8](http://answers.microsoft.com/en-us/ie/forum/ie8-windows_other/i-am-new-to-ie8-and-have-received-this-error/a6e6a3be-6f1f-41a9-9ede-d4d878664615)
* [Unable to modify the parent container element before the child element is closed](http://forums.techarena.in/software-development/1254863.htm)
