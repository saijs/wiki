
# 缺少函数

----


| Language | Message                            | Browser | Number      |
|----------|------------------------------------|---------|-------------|
| 简体中文 | 缺少函数                           | IE      | -2146823286 |
| 英文     | TypeError: 'XXX' is not a function |         |             |
|          | XXX is not function                |         |             |

## 案例

```javascript
var a = {b:1};
a.b();
```

| Browser | Message                                            |
|---------|----------------------------------------------------|
| IE      | 缺少函数                                           |
| Firefox | a.b is not a function                              |
| Chrome  | Property 'b' of object #<Object> is not a function |
| Safari  | '1' is not a function                              |
| Opera   | 'a.b' is not a function                            |


----

| 异常字段 | 值                                                                                                                  |
|----------|---------------------------------------------------------------------------------------------------------------------|
| Message  | TypeError: 'undefined' is not a function                                                                            |
| URL      | https://lab.alipay.com/user/reg/complete/single.htm                                                                 |
| File     | undefined                                                                                                           |
| Line     | 0                                                                                                                   |
| UA       | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_1) AppleWebKit/534.48.3 (KHTML, like Gecko) Version/5.1 Safari/534.48.3 |


----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL      | https://cashier.alipay.com/standard/gateway/ebankPay.htm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| File     | https://a.alipayobjects.com/??static/ar/arale.class-1.0.js,static/ar/arale.tmpl-1.0.js,static/ar/arale.aspect-1.0.js,static/ar/arale.array-1.1.js,static/ar/arale.hash-1.0.js,static/ar/arale.string-1.0.js,static/ar/arale.dom-1.1.js,static/ar/arale.event-1.1.js,static/ar/aralex.base-1.1.js,static/ar/arale.uri-1.0.js,static/ar/arale.http-1.1.js,static/ar/alipay.finance.AsyncHtml-1.0.js,static/ar/alipay.finance.Flexible-1.0.js,static/ar/alipay.finance.Apop-1.4.js,static/ar/aralex.utils.IframeShim-1.2.js,static/ar/arale.json2-1.0.js,static/ar/alipay.droplist-1.3.js,cashier/cashier.Icon-1.2.js,static/ar/alipay.finance.InstallmentsAndFavorable-1.5.js,cashier/cashier.module-2.19.js,cashier/cashier.Widget-1.0.js,cashier/cashier.Tip-1.1.js,cashier/cashier.Apop-1.5.js,static/ar/alipay.security.alieditcontrol-1.6.js |
| Line     | 361                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

----

| 异常字段 | 值                                   |
|----------|--------------------------------------|
| Message  | window.attachEvent is not a function |

## 相关异常

* [对象不支持此属性或方法](./object-doesnot-support-this-property-or-method.md)

## 参考

* [对象不支持此属性或方法](./object-doesnot-support-this-property-or-method.md)
