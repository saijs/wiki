
# 客户端没有所需的特权。

----

| Language | Message                |
|----------|------------------------|
| 简体中文 | 客户端没有所需的特权。 |

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://cashier.alipay.com/standard/payment/cashier.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Message  | 客户端没有所需的特权。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| File     | https://a.alipayobjects.com/static/ar/??alipay.light.base-1.4.js,alipay.light.page-1.7-sizzle.js,alipay.security.base-1.2.js,alipay.security.edit-1.9.js,alipay.security.cert-1.1.js,alipay.security.otp-1.1.js,alipay.security.mobile-1.5.js,alipay.security.ctuMobile-1.0.js,alipay.security.riskMobileBank-1.0.js,alipay.security.riskMobileAccount-1.0.js,alipay.security.riskMobileCredit-1.0.js,alipay.security.riskCertificate-1.0.js,alipay.security.riskSecurityQa-1.0.js,alipay.security.riskExpressPrivacy-1.0.js,alipay.security.core-1.8.js |
| Line     | 20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

<!-- start-line=19; -->
```javascript
(function(a,b){var d=a.document,g=a.navigator,k=!1,e=function(){k||(b.write('<input type="hidden" id="__ud" style="behavior:url("#default#userData")"/>'),k=!0);return b.get("__ud")},c={cookie:null,defaultStorage:a.localStorage,set:function(a,f){if(c.cookie&&g.cookieEnabled){var j=a+"="+encodeURIComponent(f);if(c.cookie.days)var k=new Date((new Date).getTime()+864E5*c.cookie.days),j=j+("; expires="+k.toGMTString());c.cookie.domain&&(j+="; domain="+c.cookie.domain);j+="; path="+(c.cookie.path||b.urlParts[4]||
"/");d.cookie=j}if(i)c.defaultStorage.setItem(a,f);else if(j=e()){j.setAttribute(a,f);try{j.save("__ud")}catch(h){}}},get:function(a){if(c.cookie){if(g.cookieEnabled){var f=d.cookie,j=f.indexOf(a+"=");return-1!=j?(j+=a.length+1,a=f.indexOf(";",j),-1==a&&(a=f.length),b.decode(f.substring(j,a)||"")):null}return""}if(i)f=c.defaultStorage.getItem(a);else if(j=e()){try{j.load("__ud")}catch(k){}f=j.getAttribute(a)}return f||""}},i=!!c.defaultStorage;b.module("client/storage",c)})(window,light);light.extend({get:function(a){return!a?null:"string"===typeof a?!light.node||/^[\w-]+$/.test(a)?document.getElementById(a):light.node(a)[0]:a.getConfig?a[0]||null:a},write:function(a){if("complete"===document.readyState){var f=document.createElement("span");f.innerHTML=a;document.body.appendChild(f)}else document.write(a)},isHTMLElement:function(a){return a&&(1===a.nodeType||9===a.nodeType)},hasClass:function(a,f){return a?RegExp("(\\s|^)"+f+"(\\s|$)").test(a.className):!1},setStyle:function(a,f){if("string"===
light.type(f)&&2==arguments.length){var e={};e[arguments[0]]=arguments[1];f=e}for(var b in f)e=f[b],"number"===typeof e&&(e+="px"),"opacity"==b?1>e&&0<e&&(isIE&&9>light.client.info.browser.version[0]?a.style.filter="alpha(opacity="+100*e+")":a.style.opacity=1.0E-5>e?0:e):a.style["float"==b||"cssFloat"==b?void 0===typeof a.style.styleFloat?"cssFloat":"styleFloat":b]=e;return this},getStyle:function(a,f){var e=a.currentStyle?a.currentStyle[f]:document.defaultView.getComputedStyle(a,null)[f];"string"===
```

可能与 Storage 有关。

## 相关异常


## 延伸阅读
