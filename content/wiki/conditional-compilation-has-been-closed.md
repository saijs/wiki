
# 条件编译已关闭

----

| Language | Message        |
|----------|----------------|
| 简体中文 | 条件编译已关闭 |

## 案例

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://cashier.alipay.com/standard/payment/saveTradeInfoToPhone.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| File     | https://a.alipayobjects.com/??static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/arale.aspect-1.0.js,static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/aralex.base-1.1.js,cashier/cashier.Widget-1.0.js,cashier/cashier.AsyncHtml-1.2.js,cashier/cashier.Tab-1.1.js,cashier/cashier.AlieditAmount-1.0.js,cashier/cashier.module-1.5.js,cashier/cashier.ProvinceSelect-1.0.js,static/ar/alipay.http-1.1.js |
| Line     | 37                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

相关代码：

```javascript
36. }}return length},has:function(key){return this.obj.hasOwnProperty(key)},keyOf:function(value){var keys=[];
37. for(var key in this.obj){if(this.obj.hasOwnProperty(key)&&this.obj[key]==value){keys.push(key)
38. }}return keys.length?keys:null},hasValue:function(value){return(this.keyOf(value)!==null)
```

## 相关异常


## 延伸阅读
