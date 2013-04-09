
# 对象不支持此属性或方法

----

| Language | Message                                                                              | Browser | Number       |
|----------|--------------------------------------------------------------------------------------|---------|--------------|
| 简体中文 | 对象不支持此属性或方法                                                               | IE      | -2146827850 |
| 繁体中文 | 物件不支援此屬性或方法                                                               |         |              |
| 日文     | オブジェクトでサポートされていないプロパティまたはメソッドです。                     |         |              |
| 英文     | Object doesn't support this property or method                                       |         |              |
| 俄文     | Объект не поддерживает это свойство или метод |         |              |

一般是将一个非 函数/方法 当作 函数/方法 调用时造成。
检查代码中是否有函数名与元素属性/属性同名的情况。

貌似 IE 专有异常，同样的代码其他浏览器的异常信息与此不同。

```javascript
var a = {};
a.a();
```

| Browser | Message                            |
|---------|------------------------------------|
| IE      | 对象不支持此属性或方法             |
| Firefox | a.a is not a function              |
| Opera   | 'a.a' is not a function            |
| Safari  | 'undefined' is not a function      |
| Chrome  | Object #<Object> has no method 'a' |

## 案例

商家帮助中心在接入点击热图时，发现IE8中搜索结果超出一页时（此时有翻页），
点击热点脚本计算 md5 部分的代码会报错『对象不支持此属性或方法』。

md5 算法本身的相关代码都是函数式编程，并无使用面向对象的部分，只有简单的 `add()`
函数调用，及数值位运算。运行时异常的参数部分也都无异常数据。

```javascript
/* MD5 rounds functions */
function R1(A, B, C, D, X, S, T) {
    q = add(add(A, (B & C) | (~B & D)), add(X, T));
    return add((q << S) | ((q >> (32 - S)) & (Math.pow(2, S) - 1)), B);
}
```

最初以为是翻页部分的 HTML 标签不匹配，没有 `<form>` 起始标签，加上 `<form>` 标签果然没有异常了。

相关代码：

```html
<div class="PageChanger">
    <img src="http://help.p36.alipay.net/images/pre_page_simple.gif" alt="上一页" />
    <strong>1</strong>
    <a href="searchNewResult.htm?searchScope=BUSINESS&word=注册&page=2">2</a>
    <a href="searchNewResult.htm?searchScope=BUSINESS&word=注册&page=2">
        <img src="http://help.p36.alipay.net/images/next_page_act.gif" alt="下一页" title="翻到下一页" /></a>
    <script language="javascript" type="text/javascript">
        //...
    </script>
    <input type="hidden" name="q" value="注册" />
    <input type="hidden" name="word" value="注册" />
    <input type="hidden" name="s" value="0" />
    <input type="hidden" name="n" value="10" />
</form>
</div>
```

但是另一个发现是，如果删除匹配的 `<form>` 起始&结束标签，保留这些 hidden 字段，
尤其是保留 `name=q` 的元素，仍然抛出异常。

再次检查 JavaScript 代码，发现函数中 q 未定义，成为全局变量，
在 IE8 中直接引用 `input[name=q]` 的元素，为其赋值时，抛出异常。

最小重现代码，属性名为 name 或 id 均抛异常：

```html
<input name="a" />
<script type="text/javascript">
    a = 1;
</script>
```

## 相关异常

* [缺少函数](xxx-is-not-a-function.md)

## 延伸阅读

* [PRB： 错误"对象不支持此属性或方法"通过远程脚本](http://support.microsoft.com/kb/257997/zh-cn)
* [对象不支持此属性或方法](http://support.microsoft.com/kb/963264/zh-cn)
* [js 对象不支持此属性或方法](http://hi.baidu.com/imouse728/blog/item/5c4cde9b344191bdc9eaf498.html)
* [Extjs IE8 对象不支持此属性或方法的bug](http://nneverwei.iteye.com/blog/733765),
    [2](http://www.iteye.com/topic/733765)
* [解决迁移到 Internet Explorer 8 时的应用程序兼容性问题](http://technet.microsoft.com/zh-cn/library/ff955640(WS.10\).aspx)
