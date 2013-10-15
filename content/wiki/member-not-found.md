
# 找不到成员。

----

| Language | Message                         |
|----------|---------------------------------|
| 简体中文 | 找不到成员。                    |
| 繁体中文 | 找不到成員。                    |
| 日文     | オブジェクトがありません。      |
| 西班牙文 | No se ha encontrado el miembro. |

在 IE 浏览器中，有些对象并不总是存在的，使用定时器延时执行时可能 this 已经改变。

Firefox, Chrome 等浏览器无此问题。

```html
<button id="btn">button</button>
<script>
  btn.onclick = function(evt){
    var e = evt || window.event,
      type = e.type;

    alert(e);      // [object]
    alert(e.type); // "click"
    alert(e.asdf); // undefined.

    window.setTimeout(function(){
      alert(e);      // [object]
      alert(e.type); // throw new Error("找不到成员。");
      alert(e.asdf); // undefined.
      alert(type);   // "click".
    }, 1000);
  }
</script>
```

## 案例

jQuery 的 attr 方法，设置属性部分特定属性时，IE 兼容模式下会抛出这个异常。

```js
$("form").attr("novalidate", "novalidate");
$("input").attr("placeholder", "text");
```

jQuery 设置属性的方法如下：

```js
set : function( elem, value, name ) {
    // Set the existing or create a new attribute node
    var ret = elem.getAttributeNode( name );
    if ( !ret ) {
        ret = document.createAttribute( name );
        elem.setAttributeNode( ret );
    }
    return ( ret.nodeValue = value + "" );
}
```

![找不到成员。](../images/member-not-found.png)

其中运行到第 8 行，给 `ret.nodeValue` 设置值时抛出这个异常。
而实际调试可以看到，ret 是有 `nodeValue` 属性的，值为 `null`。
另外还有 `ie8_nodeValue` 和 `ie9_nodeValue` 属性。

![nodeValue](../images/nodeValue.png)

![ie8_nodeValue](../images/ie8_nodeValue.png)

![ie9_nodeValue](../images/ie9_nodeValue.png)


### 解决方案：

使用 `setAttribute` 方法。
不清楚 jQuery 为什么一定要用看起来貌似标准，但比较复杂的方案。


## 相关异常


## 延伸阅读

* [【已解决】ZMM 斑主　为什么提示找不到成员呢？](http://bbs.51js.com/thread-57551-1-1.html)
* [setTimeout函数中event.type出错,提示找不到成员?](http://topic.csdn.net/u/20110117/11/8921bdc1-21a1-4c33-8d0e-b2ff578edb61.html)
