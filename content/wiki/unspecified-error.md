
# 未指明的错误。

----

| Language | Message            |
|----------|--------------------|
| 简体中文 | 未指明的错误。     |
| 英文     | Unspecified error. |

目前少量发现的在监控脚本中，已知是 IE 读取 outerHTML 造成，属于特殊客户端情况造成的异常。

1. 客户端安装 “Internet Explorer 增强的安全配置” 可能会导致这个异常。
2. 内部脚本需要修改 DOM 的场景，建议在 DOMReady, onload 之后执行，也可以考虑 setTimeout 执行。


## 案例


## 相关异常


## 延伸阅读

* [Internet Explorer 错误：30 未指明的错误](http://blog.sina.com.cn/s/blog_49d3ec2f0100o4kj.html)
* [(二)未知的运行时错误(ie6的未指明的错误)](http://www.cnblogs.com/wangxiang/articles/1653429.html)
* [关于脚本异常出现的“未指明的错误”](http://www.iteye.com/topic/90106)
* [Open Flash Chart2实现动态曲线图小结](http://sjsky.iteye.com/blog/1006107)
* [无法设置selected属性。未指明的错误](http://hi.baidu.com/jghc/blog/item/5e28c4d7faeb9f2106088b2c.html)
* [关于document对像未指明的错误](http://topic.csdn.net/u/20070907/17/02d71423-c027-4565-b650-57196702accd.html)
* [IE7:未指明的错误，解决办法](http://samueli.iteye.com/blog/237461)
