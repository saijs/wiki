
# 被编码的 URI 中包含非法字符

----

| Language | Message                                             |
|----------|-----------------------------------------------------|
| 简体中文 | 被编码的 URI 中包含非法字符                         |
|          | 被解码的 URI 不是合法的编码                         |
| 英文     | The URI to be encoded contains an invalid character |

多出现于 IE 浏览器中。由于 JScript 5.5 新增的 encodeURI，decodeURI，
encodeURIComponent，decodeURIComponent 4个转码函数将汉字视为 3 个字节，
而我们程序中比较常用的GB2312, GBK, UTF-8处理中文都是2字节的。

客户端解决方案：工具 -> 选项 -> 高级 -> 设置 -> 国际 -> 发送 UTF-8 URL.

服务端解决方案：

1. 后端变量的值是已经反转码好的。
1. 然后端传输过来的编码每个字是 3 个字节长度。

## 案例

| 异常字段 | 值                                                                                                            |
|----------|---------------------------------------------------------------------------------------------------------------|
| Message  | 被编码的 URI 中包含非法字符 <br />                                                                            |
| URL      | https://cashier.alipay.com/standard/fastpay/fastPayCashier.htm                                                |
| File     | https://a.alipayobjects.com/ar/??alipay.light.base-1.1.js,alipay.tracker-1.11.js,alipay.fmsmng.monitor-1.4.js |
| Line     | 68                                                                                                            |

<!-- start-line=67; -->
```javascript
var stack=[];light.each(obj,function(property,value){if(!property||!obj.hasOwnProperty(property)){return
}stack.push(light.encode(property)+splitter+light.encode(value))});return stack.join(connector||"&")
},unparam:function(text,splitter,connector){var obj={};if(!text){return obj}splitter=splitter||"=";
```

## 相关异常


## 参考

* [JS5024：要编码的 URI 包含无效字符](http://msdn.microsoft.com/zh-cn/library/061fh4cw%28v=VS.90%29.aspx)
* [JS5025：要解码的 URI 不是有效编码](http://msdn.microsoft.com/zh-cn/library/3aztces0%28v=vs.90%29.aspx)
* [“被解码的 URI 不是合法的编码” 的问题解决](http://blog.csdn.net/cuixiping/archive/2007/08/03/1723741.aspx)
* [encodeURI之URL中文参数问题](http://www.cnblogs.com/walkingboy/archive/2007/01/26/encodeURIAndFormAction_Chinese.html)
