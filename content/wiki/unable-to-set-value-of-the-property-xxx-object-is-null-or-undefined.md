
# 无法设置属性“XXX”的值: 对象为 null 或未定义

----

| Language | Message                                                                       |
|----------|-------------------------------------------------------------------------------|
| 简体中文 | 无法设置属性“XXX”的值: 对象为 null 或未定义                                 |
| 繁体中文 | 無法設定屬性 'XXX' 的值: 物件為 null 或未經定義                               |
| 日文     | プロパティ 'XXX' の値を設定できません: オブジェクトは Null または未定義です。 |
| 日文     | 未定義または NULL 参照のプロパティ 'setText' は設定できません                 |
| 韩文     | 'XXX' 속성 값을 설정할 수 없습니다. 개체가 null이거나 정의되지 않았습니다.    |
| 英文     | Unable to set value of the property 'XXX': object is null or undefined        |

## 案例

| 异常字段 | 值                                                    |
|----------|-------------------------------------------------------|
| Message  | 無法設定屬性 'Validator' 的值: 物件為 null 或未經定義 |
| URL      | https://certify.alipay.com/choose.htm                 |
| File     | https://a.alipayobjects.com/build/js/pa/pa.js         |
| Line     | 1                                                     |

整个代码被压缩成一行，但是 Validator 相关的代码有 2处，查看源码，相关部分如下：

```javascript
AP.widget.Validator = function(){
  //...
};
AP.widget.Validator.prototype = {
  //...
};
```

根据异常消息可以判定为这里展示的第 1行抛出的异常，无法设置 AP.widget 的
Validator 属性，原因是此时 AP.widget 为空或不是对象。

`AP` 及 `AP.widget` 在老版 Arale v1 中是全局的常驻对象，理论上是可以信任的
依赖对象。但是不排除网络原因这个依赖模块没有正常装载到页面上。

TODO: 关于依赖模块未正常装载部分，可以参考这篇。

----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                          |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 'DetaReset' 속성 값을 설정할 수 없습니다. 개체가 null이거나 정의되지않았습니다.                                                                                                                                                                                                                                                                             |
| URL      | https://lab.alipay.com/user/i.htm                                                                                                                                                                                                                                                                                                                           |
| File     | https://a.alipayobjects.com/ar/??arale.tmpl-1.0.js,arale.aspect-1.0.js,arale.class-1.0.js,aralex.base-1.1.js,arale.fx-1.1.js,aralex.switchable-1.1.js,aralex.slider.ScrollSlider-1.4.js,aralex.xbox-1.6.js,arale.uri-1.0.js,arale.http-1.1.js,alipay.combo-1.0.js,aralex.tipdone-1.2.js,aralex.apop-1.1.js,aralex.confirmbox-1.2.js,alipay.swfobject-1.0.js |
| Line     | 600                                                                                                                                                                                                                                                                                                                                                         |

<!-- start-line=599; -->
```javascript
}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);
if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)
}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)
```


----

| 异常字段 | 值                                                                                  |
|----------|-------------------------------------------------------------------------------------|
| Message  | プロパティ 'innerHTML' の値を設定できません: オブジェクトは Null または未定義です。 |
| URL      | https://lab.alipay.com/user/i.htm                                                   |
| File     | https://a.alipayobjects.com/ar/alipay.common.adcustomize-1.2.js                     |
| Line     | 14                                                                                  |

<!-- start-line=13; -->
```javascript
}ele.appendChild(aEle);return true}catch(e){}}return false},HTML:function(data,ele){if(!data.htmlCode){ele.style.display="none"
}else{ele.innerHTML=data.htmlCode;return true}return false},MEDIA:function(data,ele){if(!data.mediaURL||data.mediaURL=="null"){ele.style.display="none"
}else{if(data.mediaType=="SWF"){try{var width=ele.style.width||200,height=ele.style.height||100;
```


----

| 异常字段 | 值                                                                          |
|----------|-----------------------------------------------------------------------------|
| Message  | Unable to set value of the property 'disabled': object is null or undefined |

## 相关异常


## 参考
