
# 書き込みできません。

----

| Language | Message              |
|----------|----------------------|
| 日文     | 書き込みできません。 |

翻译：Can not write(不可写)

## 案例

| 异常字段 | 值                                                                                   |
|----------|--------------------------------------------------------------------------------------|
| URL      | https://cashier.alipay.com/standard/gateway/ebankPay.htm                             |
| File     | https://a.alipayobjects.com/??static/ar/arale.fx-1.1.js,static/ar/aralex.xbox-1.5.js |
| Line     | 155                                                                                  |

<!-- start-line=154; -->
```javascript
})}},_fixAliedit:function(){var o=$A($$("#xbox-mock .alieditContainer"));o.each(function(n){n.setStyle({visibility:"visible",opacity:"1",filter:"alpha(opacity = 1)"})
})},_getOptWidth:function(){var w;if(parent&&parent.$("xbox-iframe")&&(parent.$("xbox-iframe").attr("auto-width")>0)){w=parent.$("xbox-iframe").attr("auto-width")
}else{w=parseInt(this.width,10)}this.width=w;return w},_getOptHeight:function(){return parseInt(this.height,10)
```

这里最大的疑点是 `parent.$` 的调用，可能会出现无权限场景。

## 相关异常


## 延伸阅读
