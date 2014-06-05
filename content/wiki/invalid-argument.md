
# 参数无效。

----

| Language | Message                            | Number      |
|----------|------------------------------------|-------------|
| 简体中文 | 参数无效。                         | -2147024809 |
|          | 无法得到 display 属性。 参数无效。 | -2147024809 |
| 繁体中文 | 不正確的引數。                     |             |
|          | 引數無效。                         |             |
|          | 引數的個數錯誤或指定了不正確的屬性 |             |
| 英文     | Invalid argument.                  |             |
| 德文     | Ungültiges Argument.              |             |
| 日文     | 引数が無効です。                   |             |

## 分析

已知的可能情况有：

1. 设置样式的值不合法，如：缺少单位、负值，需要数值时提供了 NaN 或空字符串等。

    ```javascript
    elem.style.width = undefined + "px"; // 参数无效
    elem.style.width = NaN + "px"; // 参数无效
    elem.style.width = -1 + "px"; // 参数无效

    elem.style.width = "1px"; // 正确
    ```

2. IE8 及其以下，都不支持 display:inherit

    ```javascript
    elem.style.display = "inherit"; // 无法得到 display 属性。 参数无效。
    ```

| Browser | Language | Message | Number |
|---------|----------|---------|--------|
| IE      | 简体中文 |         |        |


## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | Invalid argument.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| URL      | https://cashier.alipay.com/standard/gateway/cartoonPay.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| File     | [https://a.alipayobjects.com/??...,static/ar/arale.dom-1.1.js,...](https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/arale.aspect-1.0.js,static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/aralex.base-1.1.js,cashier/cashier.Widget-1.0.js,cashier/cashier.AsyncHtml-1.2.js,cashier/cashier.Tab-1.1.js,cashier/cashier.AlieditAmount-1.0.js,cashier/cashier.module-1.5.js,static/ar/alipay.security.alieditcontrol-1.3.js) |
| Line     | 348                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

<!-- start-line=345; -->
```javascript
},setStyle:function(styles){var match;if(arale.isString(styles)&&arguments.length==2){var tmp={};
tmp[arguments[0]]=arguments[1];styles=tmp}for(var property in styles){if(property=="opacity"){this.setOpacity(styles[property])
}else{if(property=="class"||property=="className"){this.className=new String(property)
}else{this.node.style[(property=="float"||property=="cssFloat")?(arale.isUndefined(this.node.style.styleFloat)?"cssFloat":"styleFloat"):property]=styles[property]
}}}return this},setOpacity:function(value){if(value>1||value<0){return this}if(arale.isIE()&&Number(arale.browser.ver())<9){this.node.style.filter="alpha(opacity="+value*100+")"
}this.node.style.opacity=(value<0.00001)?0:value;return this},getViewportSize:function(){return{width:$D.getViewportWidth(this.node),height:$D.getViewportHeight(this.node)}
},getDocumentSize:function(){return{width:$D.getDocumentWidth(this.node),height:$D.getDocumentHeight(this.node)}
```


## 相关异常

* [类型不匹配](type-mismatch.md)

## 参考

* [javascript中调用参数无效的问题](http://zhidao.baidu.com/question/95863139) - 百度知道
* [js报参数无效（FF正常）](http://social.msdn.microsoft.com/Forums/zh-CN/295/thread/882a7815-7e48-4d51-94f7-e2daeb662a68/) - MSDN 论坛
* [无法得到display属性，参数无效](http://topic.csdn.net/u/20100427/19/d6b26d77-e804-42fb-9522-04e77509adc1.html) - CSND
