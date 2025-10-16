
# 缺少对象

----

| Language | Message                                                    | Browser | Number      |
|----------|------------------------------------------------------------|---------|-------------|
| 简体中文 | 缺少对象                                                   | IE      | -2146823281 |
| 繁体中文 | 必須要有物件                                               |         |             |
|          | 此處需要物件                                               |         |             |
| 英文     | Object expected                                            |         |             |
|          | Object required                                            |         |             |
| 韩文     | 개체가 필요합니다.                                         |         |             |
| 日文     | オブジェクトを指定してください。                           |         |             |
| 日文     | オブジェクトがありません。                                 |         |             |
| 土耳其文 | Nesne bekleniyor                                           |         |             |
| 西班牙文 | Se esperaba un objeto                                      |         |             |
| 西班牙文 | Objeto esperado                                            |         |             |
| 法文     | Objet attendu                                              |         |             |
| 俄文     | Предполагается наличие объекта |         |             |

## 案例

| 异常字段 | 值                                                        |
|----------|-----------------------------------------------------------|
| Message  | Object expected                                           |
| URL      | https://auth.alipay.com/login/option.htm                  |
| File     | https://assets.alipay.com/ar/alipay.auth.checkcode-1.0.js |
| Line     | 9                                                         |

<!-- start-line=8; -->
```javascript
[])})```)(Loader);
var checkcodeExtend_={init:function(){this.form=$("login")&&$("login").node;this.logonId=$("logonId");this.authcode=$$(".sl-checkcode input[name=checkCode]");this.codeCnt_=$$(".sl-checkcode")[0].node;this.formToken=$$("input[name=rds_form_token]",$(this.form))[0]},bind:function(){var a=this;this.submitAspect();a.form&&E.connect($(a.form),"onclick",a,function(b){b=b.target;"safeSignCheck"==b.id&&(b.checked?a.isPerson&&a.hideCheckCode():a.failCallback.call(a))});!a.logonId||!a.logonId.node.id||!a.codeCnt_||
a.codeCnt_&&"block"==a.codeCnt_.style.display?a.failCallback.call(a):(E.connect(a.logonId,"onblur",function(){a.isLogonIdFocus&&a.send(!0)}),setTimeout(function(){try{(a.isLogonIdFocus=!0)&&a.logonId.node.focus()}catch(b){a.failCallback.call(a)}},300),E.connect(a.logonId,"onkeyup",a,function(){a.send()}))},request:function(a){if(json_ua&&json_ua.length>=this.uaMaxLength)this.failCallback(),this.jsonUaExceed();else if(!json_ua||!(json_ua.length<this.uaMinLength)||a){this.sendCode=1;var b=this;Loader.use("arale.http",
```

----

调用未定义的函数会抛出这个异常。

```html
window.onload = function(){
  notExistsFunction();
};

// 这个不会抛出异常，因为 notExistsFunction 不是函数。
window.onload = notExistsFunction;
```

至于为什么明明已经定义的函数却没有生效，有有很多种原因了。
比如 [这个案例](http://book.77169.org/ask35/how153976.htm)
里把 `JavaScript` 打成 `JavaSript`

----

有部分场景是客户端动态链接库(DLL)丢失造成的，需要重新注册，或重新安装。

开始 -&gt; 运行：

```
> regsvr32 jscript.dll
> regsvr32 vbscript.dll
```


## 相关异常

* [属性“XXX”的值为 null、未定义或不是 Function 对象](the-value-of-the-attribute-xxx-is-null-undefined-or-not-a-function-object.md)

## 参考

* [后台调用前台javascript方法报错：“缺少对象”的解决方法](http://www.cnblogs.com/heekui/archive/2007/02/08/644963.html)
  这篇中我并没有重现异常，根据后面的信息，猜测也是 language="javascript"
  写错了，但是文中的代码是后面修改正确的。
[参考](http://blog.iobit.com/object-expected-problems-javascript_311.html)
