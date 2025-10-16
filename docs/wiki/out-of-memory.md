
# 内存不够

----

| Language | Message                                                                           | Browser      |                                                                                                                                        |
|----------|-----------------------------------------------------------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| 简体中文 | 内存不够                                                                          |              |                                                                                                                                        |
| 繁体中文 | 記憶體不足                                                                        |              |                                                                                                                                        |
| 英文     | out of memory                                                                     |              |                                                                                                                                        |
|          | Out of memory                                                                     | IE9,Safari 5 | Error                                                                                                                                  |
|          | allocation size overflow                                                          | Firefox 4    | InternalError                                                                                                                          |
|          | sad browser tab                                                                   | Chrome 10    | 无法捕获，实测范例代码的结果是提示该脚本占用内存过多而不是出现 sad browser tab，然而在真正的脚本中死循环时，确实出现了 sad browser tab |
|          | my box ground to a crawl for several minutes;<br/> I ended up killing the process | Opera 11     |                                                                                                                                        |
| 韩文     | 메모리 부족                                                                       |              |                                                                                                                                        |

一般是由于递归太深，或出现巨大、甚至是无限循环，造成堆、栈溢出。

也有可能真的就是内存不够造成的。

## 案例

| 异常字段 | 值                                                      |
|----------|---------------------------------------------------------|
| Message  | 메모리 부족                                             |
| Message  | 内存不够                                                |
| URL      | https://cashier.alipay.com/standard/payment/cashier.htm |
| File     | https://cashier.alipay.com/standard/payment/cashier.htm |
| Line     | 1                                                       |


----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 内存不够                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| URL      | https://cashier.alipay.com/standard/gateway/confirm.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| File     | https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/arale.aspect-1.0.js,static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/aralex.base-1.1.js,cashier/cashier.Widget-1.0.js,cashier/cashier.AsyncHtml-1.2.js,cashier/cashier.Tab-1.3.js,cashier/cashier.AlieditAmount-1.0.js,cashier/cashier.module-1.7.js,cashier/cashier.ProvinceSelect-1.0.js |
| Line     | 729                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

相关代码

<!-- start-line=727; -->
```javascript
b=a.getOffsets(),d=c.getOffsets();return{left:d.left-b.left,top:d.top-b.top}},staticTips:[],showStaticTip:function(c,a,b){var d=c.attr("id"),e=this.staticTips[d]||c,b=b||{};if(e){this.staticTips[d]||(this.staticTips[d]=e);this.hideAllStaticTips();var d=this.getOffsets(a,b.parent),f=a.region(),g=f.bottom-f.top,f=f.right-f.left;"right"===b.position?e.setStyle({left:d.left+f+(b.offsetLeft||0)+"px",top:d.top+parseInt(g/2,10)+(b.offsetTop||0)+"px"}):"bottom"===b.position?e.setStyle({left:d.left+parseInt(f/
2,10)+(b.offsetLeft||0)+"px",top:d.top+g+b.offsetTop+(b.offsetTop||0)+"px"}):e.setStyle({left:d.left+"px",top:d.top+"px"});e.attr("isbindevent")||(d=e.query(".j-apop-close"),d.length&&(E.on(d[0],"click",function(a){a.stopEvent();e.addClass("fn-hide")}),e.attr("isbindevent",!0)));e.removeClass("fn-hide");this.hasTipShow=!0;E.publish("cashier/common/showStaticTip",[c,a,b])}},hasTipShow:!1,staticTips:{},hideAllStaticTips:function(){for(var c in this.staticTips)this.staticTips[c]&&(this.staticTips[c].addClass("fn-hide"),
E.publish("cashier/common/hideStaticTip",[this.staticTips[c]]));Cashier.Module.hasTipShow=!1},clickHideTip:function(c){E.subscribe("common/click/body",window,function(a){if(Cashier.Module.hasTipShow){for(var b=$(a.target),d=d||20,a=!1;d--&&b;){for(var e=b.attr("className"),f=0,g;g=c[f];f++)if(~e.indexOf(g)){a=!0;break}if(a)break;b=b.parent()}a||(Cashier.Module.hideAllStaticTips(),$E.publish("common/hideAllTip",[]))}})},init:function()}}(window);
Cashier.Module.Cookie={set:function(c,a,b){c=this._createCookieString(c,a,!0,b);return document.cookie=c},get:function(c){var a=this._parseCookieString(document.cookie);try{return a[c]}catch(b){return null}},_parseCookieString:function(c,a){var b={};if(arale.isString(c)&&0<c.length){var d=!1===a?function(a){return a}:decodeURIComponent;if(/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(c))for(var e=c.split(/;\s/g),f=null,g=null,h=null,i=0,j=e.length;i<j;i++){h=e[i].match(/([^=]+)=/i);if(h instanceof Array)try{f=
decodeURIComponent(h[1]),g=d(e[i].substring(h[1].length+1))}catch(k){}else g=f=decodeURIComponent(e[i]);b[f]=g}}return b},_createCookieString:function(c,a,b,d){c=encodeURIComponent(c)+"="+(b?encodeURIComponent(a):a);arale.isObject(d)&&(d.expires instanceof Date&&(c+="; expires="+d.expires.toGMTString()),arale.isString(d.path)&&""!==d.path&&(c+="; path="+d.path),arale.isString(d.domain)&&""!==d.domain&&(c+="; domain="+d.domain),!0===d.secure&&(c+="; secure"));return c}};
```


## 相关异常

* [堆栈溢出](./out-of-stack-space.md)


## 延伸阅读

* [JavaScript and memory leaks](http://www.javascriptkit.com/javatutors/closuresleak/index.shtml)
* [IE6/7/8 Out of Memory?](http://stackoverflow.com/questions/3910044/ie6-7-8-out-of-memory)
* [JavaScript 中的堆栈溢出和内存不足](http://www.bokeyy.com/post/javascript-out-of-memery-and-stack.html) ，
    [英文原文](http://cautionsingularityahead.blogspot.com/2011/03/stack-overflow-and-out-of-memory-in.html)
* [这个小程序怎会报内存不足？](http://topic.csdn.net/t/20040825/15/3308385.html) - 递归：setTimeout(func(), 4),
    正确的应该是 setTimeout(func, 4) 或但不建议的 setTimeout("func()", 4)
* [javascript显10个图就出现"内存不够“的错误？](http://topic.csdn.net/t/20050514/18/4006964.html) - 递归，同上。
* [用ajax框架报内存不足错训](http://www.itlea.com/thread-156893-1-1.html) - 无限循环。
