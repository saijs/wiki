
# 'XXX' 未定义

----

| Language       | Message                                               | Browser                   | Number      |
|----------------|-------------------------------------------------------|---------------------------|-------------|
| 简体中文       | 'XXX' 未定义                                          | IE                        | -2146823279 |
| 繁体中文       | 'XXX' 未被定義                                        |                           |             |
|                | 'XXX' 未經定義                                        | IE9                       |             |
| 英文           | 'XXX' is undefined                                    |                           |             |
|                | XXX is undefined                                      | Chrome                    |             |
|                | XXX is not defined                                    | Windows Firefox 6         |             |
|                | Uncaught ReferenceError: XXX is not defined           | Windows Chrome 12         |             |
|                | ReferenceError: Can't find variable: XXX              | Mac OSX, Windows Safari 5 |             |
|                | Unexpected token XXX                                  |                           |             |
|                | Undefined variable: XXX                               | Opera 11.50               |             |
| 韩语           | 'XXX'이(가) 정의되지 않았습니다.                      |                           |             |
| 日文           | 'XXX' は宣言されていません。                          |                           |             |
|                | 'XXX' は定義されていません。                          |                           |             |
| 西班牙文       | 'XXX' no está definido                               |                           |             |
| 土耳其文       | 'XXX' tanımsız                                      |                           |             |
| 葡萄牙文       | 'XXX' não está definido                              |                           |             |
|                | 'XXX' no está definido                               |                           |             |
| 俄文           | 'XXX' - определение отсутствует |                           |             |
| 法文           | « XXX » est indéfini                                 |                           |             |
| 意大利文       | 'XXX' non è definito                                 |                           |             |
| 南非共用荷兰文 | XXX is niet gedefinieerd                              |                           |             |
| 阿拉伯文       | 'XXX' هو غير معرّف                                     |                           |             |


多见于脚本未正常装载时发生，也有可能是定义出先错误，导致对象为定义。

## 案例

| 异常字段 | 值                                    |
|----------|---------------------------------------|
| Message  | '_gat' 未定义                         |
| URL      | https://mai.alipay.com/vtao/index.htm |
| File     | https://mai.alipay.com/vtao/index.htm |
| Line     | 1                                     |

初步判断是客户端环境安装了瑞星卡卡，或其他第三方工具，损坏了系统文件导致。
_gat 是 Google 统计的新版代码：

```html
<script type="text/javascript">
    var pageTracker = _gat._getTracker("UA-3169713-7");
    pageTracker._initData();
    pageTracker._trackPageview();
</script>
```

客户端解决方案是，开始 -> 运行：

```
regsvr32 jscript.dll
regsvr32 vbscript.dll
```

----

| 异常字段 | 值                                                      |
|----------|---------------------------------------------------------|
| Message  | Uncaught SyntaxError: Unexpected token a                |
| URL      | https://cashier.alipay.com/standard/deposit/cashier.htm |
| File     | https://cashier.alipay.com/standard/deposit/cashier.htm |
| Line     | 1                                                       |

```
Uncaught SyntaxError: Unexpected token ILLEGAL
```

----

特殊的：

| 异常字段 | 值                                                      |
|----------|---------------------------------------------------------|
| Message  | “window”未定义                                        |
| URL      | https://cashier.alipay.com/standard/payment/cashier.htm |
| File     | https://tradeexprod.alipay.com/fastpay/certCheck.htm    |
| Line     | 1435                                                    |

非常奇怪的异常，居然 window 未定义，File 居然是其他的一个页面，难道是
`script[src=https://tradeexprod.alipay.com/fastpay/certCheck.htm]` ？不应该的。

* http://bbs.phpchina.com/thread-111405-1-1.html
* http://www.ilovejs.net/archives/1079
* http://www.cnblogs.com/klvk/archive/2012/02/12/2347951.html

----

* 'Loader' 未定义
* 'aralex' 未經定義
* $(ct)[0].children is undefined
* Uncaught ReferenceError: changeCardIdRule is not defined
* ReferenceError: Can't find variable: E
* Unexpected token a
* Undefined variable: a
* 'arale'이(가) 정의되지 않았습니다.
* 'alipay' は宣言されていません。
* 'seajs' は定義されていません。
* E is not defined


## 相关异常

* [属性“XXX”的值为 null、未定义或不是 Function 对象](the-value-of-the-attribute-xxx-is-null-undefined-or-not-a-function-object.md)

## 参考

* http://www.baibudu.com/the-new-google-analytics-tracking-code-at-the-next-ie-prompts-_gat-undefined/
* http://www.iiich.com/bbs/viewtopic.php?id=84
* http://vpxcc.wordpress.com/2008/06/06/howto-solve-_gat-is-not-defined-a-google-analytics-workaround/
* http://eg-land.com/viewthread.php?tid=6234
* http://stackoverflow.com/questions/5115612/jquery-post-causes-uncaught-syntaxerror-unexpected-token
* http://stackoverflow.com/questions/5221150/why-am-i-getting-an-unexpected-token-error-in-jquery-1-4-4-min-file
* http://stackoverflow.com/questions/9437030/jquery-min-and-ajax-uncaught-syntaxerror-unexpected-token
* http://stackoverflow.com/questions/7932003/uncaught-syntaxerror-unexpected-token
