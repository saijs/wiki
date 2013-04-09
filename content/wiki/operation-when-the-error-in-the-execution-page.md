
# 执行页内操作时的错误。

----

| Language | Message                |
|----------|------------------------|
| 简体中文 | 执行页内操作时的错误。 |

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 执行页内操作时的错误。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| URL      | https://cashier.alipay.com/standard/gateway/cartoonPay.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| File     | https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/arale.aspect-1.0.js,static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/aralex.base-1.1.js,cashier/cashier.Widget-1.0.js,cashier/cashier.AsyncHtml-1.2.js,cashier/cashier.Tab-1.3.js,cashier/cashier.AlieditAmount-1.0.js,cashier/cashier.module-1.7.js,static/ar/alipay.security.alieditcontrol-1.3.js |
| Line     | 508                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

相关代码：

<!-- start-line=507; -->
```javascript
}else{url=url+"?"+data}data=null}var url_old=url;url=$Ajax.decorateUrl(url);url=url?url:url_old;
this._xhr.open(this._options.method.toUpperCase(),url,this._options.async);$H(this._options.headers).each(function(key,value){try{this._xhr.setRequestHeader(key,value)
}catch(e){}},this);this._xhr.onreadystatechange=arale.hitch(this,this.onStateChange);
```

## 相关异常


## 延伸阅读

* [Windows事件代码ID及错误信息](windows-event-code-id-and-error-message.md)
