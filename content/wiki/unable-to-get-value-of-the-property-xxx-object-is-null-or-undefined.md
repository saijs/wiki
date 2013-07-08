
# 无法获取属性“XXX”的值: 对象为 null 或未定义

----

| Language | Message                                                                                                                                                                   |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 简体中文 | 无法获取属性“XXX”的值: 对象为 null 或未定义                                                                                                                             |
|          | 属性“XXX”的值为 null、未定义或不是 Function 对象                                                                                                                        |
| 繁体中文 | 無法取得屬性 'XXX' 的值: 物件為 null 或未經定義                                                                                                                           |
| 繁体中文 | 無法取得未定義或 Null 參考的屬性 'XXX'                                                                                                                                    |
| 日文     | プロパティ 'XXX' の値を取得できません: オブジェクトは Null または未定義です。                                                                                             |
| 英文     | Unable to get value of the property 'XXX': object is null or undefined                                                                                                    |
|          | Uncaught TypeError: Cannot read property 'XXX' of null                                                                                                                    |
|          | Uncaught TypeError: Cannot call method 'XXX' of undefined                                                                                                                 |
|          | Uncaught TypeError: Cannot call method 'XXX' of null                                                                                                                      |
| 俄文     | Не удалось получить значение свойства "XXX": значением объекта является NULL или он не определен |
| 韩文     | 'XXX' 속성 값을 가져올 수 없습니다. 개체가 null이거나 정의되지 않았습니다.                                                                                                |
| 瑞典文   | Det går inte att hämta värdet för egenskapen XXX: objektet är null eller odefinierat                                                                                      |
| 葡萄牙文 | Não é possível obter valor da propriedade 'XXX': o objeto é nulo ou não definido                                                                                       |
| 法文     | Impossible d’obtenir la propriété « XXX » d’une référence null ou non définie                                                                                      |


一般由引用的对象不存在造成，比如元素 ID 不一致、运行时返回 null 等。

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                  |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | Object doesn't support this property or method                                                                                                                                                                                                      |
| URL      | https://cashier.alipay.com/standard/payment/cashier.htm                                                                                                                                                                                             |
| File     | https://a.alipayobjects.com/??static/ar/alipay.http-1.1.js,static/ar/alipay.security.sccheck-1.4.js,static/ar/alipay.security.counter-1.2.js,static/ar/arale.fx-1.1.js,static/ar/aralex.xbox-1.5.js,static/ar/alipay.security.credibleMobile-1.1.js |
| Line     | 280                                                                                                                                                                                                                                                 |

----

| 异常字段 | 值                                                                              |
|----------|---------------------------------------------------------------------------------|
| Message  | プロパティ 'noded' の値を取得できません: オブジェクトは Null または未定義です。 |
| URL      | https://auth.alipay.com/login/index.htm                                         |
| File     | https://assets.alipay.com/authcenter/authcenter.base-1.3.js                     |
| Line     | 10                                                                              |

相关代码

<!-- start-line=9; -->
```javascript
$random:function(b,d){return Math.floor(Math.random()*(d-b+1)+b)},error:function(b){arale.log("error:"+b)},exec:function(b){if(!b)return b;if(window.execScript)window.execScript(b);else{var d=document.createElement("script");d.setAttribute("type","text/javascript");d[arale.browser.Engine.webkit&&420>arale.browser.Engine.ver?"innerText":"text"]=b;document.getElementsByTagName("head")[0].appendChild(d);document.getElementsByTagName("head")[0].removeChild(d)}return b},hitch:function(b,d){d||(d=b,b=null);
if(arale.isString(d)){b=b||window;if(!b[d])throw['arlea.hitch: scope["',d,'"] is null (scope="',b,'")'].join("");return function(){return b[d].apply(b,arguments||[])}}return!b?d:function(){return d.apply(b,arguments||[])}},now:function(){return(new Date).getTime()},logError:function(b,d){(new Image).src="sev="+encodeURIComponent(b)+"&msg="+encodeURIComponent(d)},log:function(){araleConfig.debug&&"console"in window&&console.log.apply(console,arguments)},getUniqueId:function(b){var d=arale.getUniqueId._id||
1;arale.getUniqueId._id=++d;return b?b+d:d},getModulePath:function(b){return araleConfig.module_path+"/"+b},each:function(b,d,c){var e;if("object"===arale.typeOf(b))for(e in b)this.obj.hasOwnProperty(e)&&d.call(c,e,b[e]);else{if(Array.prototype.forEach)return[].forEach.call(b,d,c);e=0;for(var g=b.length;e<g;e++)d.call(c,b[e],e,b)}},checkVersion:function(){}};
```

----

* 无法获取属性“TextData”的值: 对象为 null 或未定义
* 无法获取属性“TextData”的值: 对象为 null 或未定义
* 无法获取属性“Validator”的值: 对象为 null 或未定义
* 无法获取属性“dispose”的值: 对象为 null 或未定义
* 无法获取属性“getElementsByTagName”的值: 对象为 null 或未定义
* 无法获取属性“node”的值: 对象为 null 或未定义
* 无法获取属性“setHtml”的值: 对象为 null 或未定义
* 无法获取属性“xBox”的值: 对象为 null 或未定义
* 属性“_360se_youxi_js_test”的值为 null、未定义或不是 Function 对象                                                                                                               |
* 無法取得屬性 'node' 的值: 物件為 null 或未經定義                                                                                                                                  |
* 無法取得未定義或 Null 參考的屬性 'innerHTML'                                                                                                                                      |
* Unable to get value of the property 'node': object is null or undefined                                                                                                           |
* Uncaught TypeError: Cannot read property 'className' of undefined
* Uncaught TypeError: Cannot read property 'TextData' of null                                                                                                                       |
* Uncaught TypeError: Cannot call method 'getAttribute' of undefined                                                                                                                |
* Uncaught TypeError: Cannot call method 'query' of null                                                                                                                            |
* プロパティ 'node' の値を取得できません: オブジェクトは Null または未定義です。                                                                                                    |
* 'L' 속성 값을 가져올 수 없습니다. 개체가 null이거나 정의되지 않았습니다.                                                                                                          |
* Не удалось получить значение свойства "toLowerCase": значением объекта является NULL или он не определен |

## 相关异常

* [意外地调用了方法或属性访问。](accidentally-call-a-method-or-property-access.md)

## 延伸阅读

* [Google Maps API一例错误处理 SCRIPT5007: 无法获取属性“firstChild”的值: 对象为 null 或未定义 main.js](http://blog.csdn.net/ldl22847/article/details/6331128)
* [无法获取属性“style”的值: 对象为 null 或未定义](http://s.yanghao.org/program/viewdetail.php?i=101743)
