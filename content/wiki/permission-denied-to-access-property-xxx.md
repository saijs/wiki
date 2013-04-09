
# Permission denied to access property 'XXX'

----

| Language | Message                                                                                                                                  |
|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| 英文     | Permission denied to access property 'XXX'                                                                                               |
|          | Permission denied to call method XXX                                                                                                     |
|          | Permission denied for <XXX.YYY.ZZZ> to call method XXX                                                                                   |
|          | &lt;XXX.YYY.ZZZ&gt; *¾n document.domain à³CP &lt;XXX.YYY.ZZZ&gt; (ýp Location.toStringdocument.domain=&lt;XXX.YYY.ZZZ&gt; |


跨域访问资源，常见的是访问不同域的框架页 (frame,iframe)。

同主域的系统，可以通过设置为同一主域达到同源：document.domain = "alipay.com";


## 案例

| 异常字段 | 值                                                 |
|----------|----------------------------------------------------|
| Message  | Permission denied to call method Location.toString |
| URL      | https://authcenter.sit.alipay.net/login/option.htm |
| File     | (空)                                               |
| Line     | 0                                                  |

----

* Permission denied to access property 'toString'
* Permission denied to call method Location.toString
* Permission denied for &lt;https://authcenter.sit.alipay.net&gt; to call method Location.toString
* &lt;http://authcenter.sit.alipay.net&gt; *¾n document.domain à³CP &lt;http://accorderexprod.sit.alipay.net&gt; (ýp Location.toStringdocument.domain=&lt;http://alipay.net&gt;

## 相关异常

* [拒绝访问。](access-is-denied)
* [没有权限](permission-denied)

## 延伸阅读

* ["Location.toString" uncaught (security) exception caused by improper Flash plugin behavior](http://bugs.adobe.com/jira/browse/FP-561)
* [cross-domain? Firefox reports Permission denied to call method Location.toString](http://code.google.com/p/swfobject/issues/detail?id=318)
* [Uncaught Exception: Permission denied to call method to Location.toString](http://willperone.net/Code/as3error.php)
* [Permissions Denied to get Property location.toString in FireFox 3](http://www.west-wind.com/weblog/posts/2008/Jul/02/Permissions-Denied-to-get-Property-locationtoString-in-FireFox-3)
* [Error: Permission denied for (document.domain has not been set) to call method Location.toString on (document.domain=).](http://support.mozilla.com/zh-CN/questions/703527)
* [Permission denied to call method Location.toString](http://stackoverflow.com/questions/902501/permission-denied-to-call-method-location-tostring)
