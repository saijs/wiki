
# 缺少对象

----

| Language | Message                          | Browser | Number      |
|----------|----------------------------------|---------|-------------|
| 简体中文 | 缺少对象                         | IE      | -2146823281 |
| 繁体中文 | 必須要有物件                     |         |             |
|          | 此處需要物件                     |         |             |
| 英文     | Object expected                  |         |             |
|          | Object required                  |         |             |
| 韩文     | 개체가 필요합니다.               |         |             |
| 日文     | オブジェクトを指定してください。 |         |             |

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

## 相关异常


## 参考
