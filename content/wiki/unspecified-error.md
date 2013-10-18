
# 未指明的错误。

----

| Language | Message                 |
|----------|-------------------------|
| 简体中文 | 未指明的错误。          |
| 英文     | Unspecified error.      |
| 葡萄牙文 | Error no especificado.  |
| 法文     | Erreur non spécifiée. |
| 意大利文 | Errore non specificato. |

目前少量发现的在监控脚本中，已知是 IE 读取 outerHTML 造成，属于特殊客户端情况造成的异常。

1. 客户端安装 “Internet Explorer 增强的安全配置” 可能会导致这个异常。
2. 内部脚本需要修改 DOM 的场景，建议在 DOMReady, onload 之后执行，也可以考虑 setTimeout 执行。


## 案例

有些 AJAX 会导致这个错误。参考：

```js
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
url += "?suggest=" + data;
xmlHttp.open("POST", url, false);
xmlHttp.send("suggest=" + data);
```

将 setRequestHeader 放在 open 之后可以解决。

```js
xmlHttp.open("POST", url, false);
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlHttp.send("suggest=" + data);
```

* http://fangta.bokee.com/6521032.html
* http://bbs.csdn.net/topics/310169825

----

使用 `window.open` 时，有时页面抛出“未指明的错误”异常，此问题一般是由于，
页面中包含多个同名的 `name` 参数造成的(如：都命名为 `_self`)，
解决方案即使用不同名的 `name` 参数，或者不使用 `name` 参数。

* [参考](http://xiyang.09.blog.163.com/blog/static/59827615201321893813871/)

----

Windows XP 系统，猎豹浏览器 IE8 模式下，支付宝新版密码控件(v3.3.0.0)
在 `<form>` 中就会抛出这个异常。异常文件是所在页面，异常行号是 58。

```html
<form>
 <span id="test" >
  <object width="180" height="24" classid="clsid:8EB7C6CB-2DA6-4ABE-B2EA-EAC5A372E757"></object>
 </span>
</form>
```

![未指明的错误。](../images/lb-unspecified-error.png)

这个异常本身不影响密码控件的使用，不影响业务。

## 相关异常


## 延伸阅读

* [Internet Explorer 错误：30 未指明的错误](http://blog.sina.com.cn/s/blog_49d3ec2f0100o4kj.html)
* [(二)未知的运行时错误(ie6的未指明的错误)](http://www.cnblogs.com/wangxiang/articles/1653429.html)
* [关于脚本异常出现的“未指明的错误”](http://www.iteye.com/topic/90106)
* [Open Flash Chart2实现动态曲线图小结](http://sjsky.iteye.com/blog/1006107)
* [无法设置selected属性。未指明的错误](http://hi.baidu.com/jghc/blog/item/5e28c4d7faeb9f2106088b2c.html)
* [关于document对像未指明的错误](http://topic.csdn.net/u/20070907/17/02d71423-c027-4565-b650-57196702accd.html)
* [IE7:未指明的错误，解决办法](http://samueli.iteye.com/blog/237461)
