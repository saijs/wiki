
# 调用的对象无效

----

| Langugae | Message            |
|----------|--------------------|
| 简体中文 | 调用的对象无效     |
| 繁体中文 | 呼叫物件無效       |
| 英文     | Illegal invocation |



## 案例

早期 IE6,7,8 浏览器中，有时开发者为了减少代码，使用变量指针来缓存方法：

```js
var $ = document.getElementById;
$("id").innerHTML = "";
```

但是在 IE9 及其他浏览器中，这是非法的，会抛出 `Illegal invocation` 这个异常。
因为调用 getElementById 方法需要是 document 对象，但是 `$` 默认是 `window`。
可以使用 `call` 显式指定调用对象：

```js
var $ = document.getElementById;
$.call(document, "id").innerHTML = "";
```

或者使用 `bind` 隐式将对象和方法关联：

```js
var $ = document.getElementById.bind(document);
$("id").innerHTML = "";
```

----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                          |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 呼叫物件無效                                                                                                                                                                                                                                                                                                                                                |
| URL      | https://lab.alipay.com/user/i.htm                                                                                                                                                                                                                                                                                                                           |
| File     | https://a.alipayobjects.com/ar/??arale.tmpl-1.0.js,arale.aspect-1.0.js,arale.class-1.0.js,aralex.base-1.1.js,arale.fx-1.1.js,aralex.switchable-1.1.js,aralex.slider.ScrollSlider-1.4.js,aralex.xbox-1.6.js,arale.uri-1.0.js,arale.http-1.1.js,alipay.combo-1.0.js,aralex.tipdone-1.2.js,aralex.apop-1.1.js,aralex.confirmbox-1.2.js,alipay.swfobject-1.0.js |
| Line     | 79                                                                                                                                                                                                                                                                                                                                                          |


## 相关异常


## 参考

* [Function pointer method calls](http://msdn.microsoft.com/en-us/library/gg622930%28v=VS.85%29.aspx)
  * [函数指针方法调用](http://msdn.microsoft.com/zh-cn/library/gg622930%28v=VS.85%29.aspx)
* [JavaScript的类型错误：Illegal invocation](http://www.cnblogs.com/meteoric_cry/archive/2011/04/24/2026582.html)
* [fckeditor出现调用的对象无效JS错误](http://blog.csdn.net/uianqian/article/details/8770132)
