
# プロパティ 'xxx' の値を設定できません: オブジェクトは Null または未定義です。

- pubdate: 2013-03-19

------

| Language | Message                                                                       |   |
|----------|-------------------------------------------------------------------------------|---|
| 日文     | プロパティ 'xxx' の値を設定できません: オブジェクトは Null または未定義です。 |   |
| 韩文     | 'xxx' 속성 값을 설정할 수 없습니다. 개체가 null이거나 정의되지 않았습니다.    |   |

## 案例

> Message: 'DetaReset' 속성 값을 설정할 수 없습니다. 개체가 null이거나 정의되지 않았습니다.
> URL: https://lab.alipay.com/user/i.htm
> File: https://a.alipayobjects.com/ar/??arale.tmpl-1.0.js,arale.aspect-1.0.js,arale.class-1.0.js,aralex.base-1.1.js,arale.fx-1.1.js,aralex.switchable-1.1.js,aralex.slider.ScrollSlider-1.4.js,aralex.xbox-1.6.js,arale.uri-1.0.js,arale.http-1.1.js,alipay.combo-1.0.js,aralex.tipdone-1.2.js,aralex.apop-1.1.js,aralex.confirmbox-1.2.js,alipay.swfobject-1.0.js
> Line: 600

    599. }else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);
    600. if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)
    601. }}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)


> Message: プロパティ 'innerHTML' の値を設定できません: オブジェクトは Null または未定義です。
> URL: https://lab.alipay.com/user/i.htm
> File: https://a.alipayobjects.com/ar/alipay.common.adcustomize-1.2.js
> Line: 14

    13. }ele.appendChild(aEle);return true}catch(e){}}return false},HTML:function(data,ele){if(!data.htmlCode){ele.style.display="none"
    14. }else{ele.innerHTML=data.htmlCode;return true}return false},MEDIA:function(data,ele){if(!data.mediaURL||data.mediaURL=="null"){ele.style.display="none"
    15. }else{if(data.mediaType=="SWF"){try{var width=ele.style.width||200,height=ele.style.height||100;
