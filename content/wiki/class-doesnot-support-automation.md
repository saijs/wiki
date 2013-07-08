
# 类不能支持 Automation 操作

----

| Language | Message                                  |
|----------|------------------------------------------|
| 简体中文 | 类不能支持 Automation 操作               |
|          | Automation 操作中文件名或类名未找到      |
| 繁体中文 | 該物件類別不支援 Automation              |
| 英文     | Class doesn't support Automation         |

----

|----------|---------------------------------------------------------|
| 简体中文 | Automation 服务器不能创建对象                           |
| 瑞典文   | Automation-server kan inte skapa objekt.                |
| 西班牙文 | El servidor de Automatización no puede crear el objeto |

出没于 Windows IE 浏览器之中，客户端问题。客户端重新注册以下文件即可：Windows -> Run:

```
regsvr32 msscript.ocx
regsvr32 dispex.dll
regsvr32 vbscript.dll
regsvr32 scrrun.dll
regsvr32 urlmon.dll
```

注册完后清理一下浏览器缓存

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                          |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 該物件類別不支援 Automation                                                                                                                                                                                                                                                                                                                                 |
| URL      | https://lab.alipay.com/user/i.htm                                                                                                                                                                                                                                                                                                                           |
| File     | https://a.alipayobjects.com/ar/??arale.tmpl-1.0.js,arale.aspect-1.0.js,arale.class-1.0.js,aralex.base-1.1.js,arale.fx-1.1.js,aralex.switchable-1.1.js,aralex.slider.ScrollSlider-1.4.js,aralex.xbox-1.6.js,arale.uri-1.0.js,arale.http-1.1.js,alipay.combo-1.0.js,aralex.tipdone-1.2.js,aralex.apop-1.1.js,aralex.confirmbox-1.2.js,alipay.swfobject-1.0.js |
| Line     | 600                                                                                                                                                                                                                                                                                                                                                         |

<!-- start-line=599; -->
```javascript
}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);
if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)
}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)
```

创建 ActiveXObject 对象相关的问题，详细情况待分析。

```javascript
new ActiveXObject(); //! Automation 服务器不能创建对象
```


## 相关异常


## 延伸阅读

* [Class doesn't support Automation (Error 430)](http://msdn.microsoft.com/en-us/library/aa264512(v=vs.60\).aspx)
* [BT9021: IE 中可以使用 ActiveXObject 创建 Automation 对象，同时该对象的方法及属性名称大小写不敏感](http://w3help.org/zh-cn/causes/BT9021)
* [Error in IE (Class doesn't support Automation)](http://docwiki.cisco.com/wiki/Error_in_IE_(Class_doesn't_support_Automation\))
* [IE7上出现Class doesn't support Automation的错误和解决办法](http://www.cnblogs.com/super119/archive/2011/03/20/1989362.html)
* [Class Doesn't Support Automation](https://getsatisfaction.com/resqtech/topics/class_doesnt_support_automation)
* [Class Doesn't Support Automation error in Internet Explorer](http://blog.mundy.co/Internet-Explorer/class-doesnt-support-automation-error-in-internet-explorer)
