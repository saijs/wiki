
# 由于出现错误 XXX 而导致此项操作无法完成。

----

| Language | Message                                                                     |
|----------|-----------------------------------------------------------------------------|
| 简体中文 | 由于出现错误 800a03e8 而导致此项操作无法完成。                              |
|          | 由于出现错误 c0000096 而导致此项操作无法完成。                              |
| 繁体中文 | 發生錯誤，無法完成操作 800a03e8。                                           |
| 韩文     | c00ce56e 오류가 발생하여 작업을 완료할 수 없습니다.                         |
| 法文     | Impossible d'effectuer l'opération à cause de l'erreur suivante 80020101. |
| 英文     | Could not complete the operation due to error c00c023f.                     |

主要发生在页面 load 过程中，操作 DOM 不当引起。

## 案例

| 异常字段 | 值                                                                                                     |
|----------|--------------------------------------------------------------------------------------------------------|
| Message  | 發生錯誤，無法完成操作 800a03e8。                                                                      |
| URL      | https://www.alipay.com/static/teach/index.htm                                                          |
| File     | https://img.alipay.com/js/global/jquery.js                                                             |
| Line     | 1                                                                                                      |
| UA       | Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727) |


----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 由于出现错误 c0000096 而导致此项操作无法完成。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| URL      | https://cashier.alipay.com/standard/gateway/optimizedMotoPay.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| File     | [https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,...,static/ar/aralex.classicvalidator-1.1.js](https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/arale.aspect-1.0.js,static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/aralex.base-1.1.js,cashier/cashier.Widget-1.0.js,cashier/cashier.AsyncHtml-1.2.js,cashier/cashier.Tab-1.3.js,cashier/cashier.AlieditAmount-1.0.js,cashier/cashier.module-1.8.js,static/ar/alipay.security.alieditcontrol-1.3.js,static/ar/alipay.http-1.1.js,static/ar/aralex.validator-1.1.js,static/ar/aralex.classicvalidator-1.1.js) |
| Line     | 510                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

相关代码：

<!-- start-line=508; -->
```javascript
this._xhr.open(this._options.method.toUpperCase(),url,this._options.async);$H(this._options.headers).each(function(key,value){try{this._xhr.setRequestHeader(key,value)
}catch(e){}},this);this._xhr.onreadystatechange=arale.hitch(this,this.onStateChange);
this._xhr.send(data);if(!this._options.async){this.onStateChange()}return this},cancel:function(){if(!this._running){return this
}this._running=false;this._xhr.onreadystatechange=function(){};this._xhr.abort();
this._xhr=arale.browser.Request();return this},onStateChange:function(){var that=this,options=this._options;
```

## 相关异常


## 延伸阅读

* [Dom 未加载完全 appendChild 操作在IE6与IE8下的bug.](http://iloves.org/2011/01/dom-%E6%9C%AA%E5%8A%A0%E8%BD%BD%E5%AE%8C%E5%85%A8-appendchild-%E6%93%8D%E4%BD%9C%E5%9C%A8ie6%E4%B8%8Eie8%E4%B8%8B%E7%9A%84bug/)
* [google adsense广告代码在IE7 IE8内核浏览器上有严重问题，IE6正常](http://www.google.com/support/forum/p/adsense/thread?tid=3a2018d98dfcafad&hl=zh-CN)

    故障现象：无法打开internet站点，已中止操作。

    | 异常字段 | 值                                                        |
    |----------|-----------------------------------------------------------|
    | Line     | 1                                                         |
    | Char     | 244                                                       |
    | Code     | 0                                                         |
    | Error    | 由于出现错误 800a03e8 而导致此项操作无法完成。            |
    | 网址     | http://pagead2.googlesyndication.com/pagead/render_ads.js |

* [Internet Explorer 无法打开 Internet 站点 XXX.YYY.ZZZ。已中止操作](http://topic.csdn.net/u/20081021/22/c8f3129c-cc73-429e-aa7e-b723cec3620d.html)
