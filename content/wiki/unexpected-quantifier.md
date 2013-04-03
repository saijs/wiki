
# 错误的数量词

----

| Language | Message               |
|----------|-----------------------|
| 简体中文 | 错误的数量词          |
|          | 意外的限定符          |
|          | 意外的数量词          |
| 繁体中文 | 非預期的數量詞        |
| 英文     | Unexpected quantifier |

正则表达式的量词（ +, *, {m,n} ）不合法，大都是在 new RegExp(str_reg) 时，
str_reg 未作安全处理时抛出。
安全的将字符串 new RegExp 应先将字符串转义处理，需转义的字符包括以下列出的部分：

```javascript
RegExp.escape = function(source){
  return String(source).replace(/([\!\\\/\.\$\*\^\(\)\[\]\{\}\?\+\-\|])/g, "\\$1");
};
```

## 案例

```javascript
new RegExp("+");
```

| Browser | Language | Message                                            | Number      |
|---------|----------|----------------------------------------------------|-------------|
| IE      | 简体中文 | 错误的数量词                                       | -2146823270 |
| Chrome  | 英文     | Invalid regular expression: /+/: Nothing to repeat |             |
| Firefox |          | invalid quantifier                                 |             |
| Opera   |          | RegExp constructor: invalid regular expression     |             |
| Safari  |          | Invalid regular expression: nothing to repeat      |             |


----

| 异常字段 | 值                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message  | 错误的数量词                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| URL      | https://lab.alipay.com/user/activeUserValid.htm                                                                                                                                                                                                                                                                                                                                                                                                  |
| File     | [https://static.alipay.com/min/?b=ar&f=...,alipay.common.PwdStrengthAnalyser-1.0.js,...&date=1320832734109&debug=1](https://static.alipay.com/min/?b=ar&f=arale.aspect-1.0.js,arale.class-1.0.js,arale.tmpl-1.0.js,aralex.base-1.1.js,alipay.common.PwdStrengthAnalyser-1.0.js,arale.uri-1.0.js,arale.http-1.1.js,alipay.http-1.1.js,aralex.validator-1.1.js,aralex.validator.PopValidator-1.0.js,aralex.apop-1.1.js&date=1320832734109&debug=1) |
| Line     | 1                                                                                                                                                                                                                                                                                                                                                                                                                                                |

密码强度算法中，使用了动态创建正则表达式来进行匹配的方法，但是这个表达式是来自用户的输入，
在用户输入某些不匹配的特殊字符时，会抛出正则表达式类异常。


线上异常相关代码：

```javascript
/**
 * 获取密码对应的评分
 * @param {string=} opt_strPassword 要检测的密码字符串，若不传入此参数，则默认取得绑定的表单元素的value值
 * @return {number} 密码强度评分
 */
getScore : function(opt_strPassword){
    var strPassword = arale.isUndefined(opt_strPassword) ?
        (this.needTrim ? S(this.domNode.node.value) : this.domNode.node.value) :
        opt_strPassword;
    //...

    //附加支付宝规则：纯数字、连续大写英文、连续小写英文、单一英文
    if(/^\d+$/.test(strPassword) || this.M_STR.UPPER.indexOf(strPassword)> -1 ||
        this.M_STR.LOWER.indexOf(strPassword)> -1 ||
        strPassword.replace(new RegExp(strPassword.substring(0,1),'g'),'').length === 0 ){
        nScore = 1;
    }

    return nScore;
},
```

这些正则表达式特殊字符，应该经过正确的转义处理。

## 相关异常

1. [正则表达式语法错误](regular-expression-syntax-error.md)
1. [正则表达式中缺少 'XXX'](expected-xxx-in-regular-expression.md)

<!-- 抛出相关异常 -->
<script type="text/javascript">
try{new RegExp(")");}catch(ex){monitor.error(ex);}
try{new RegExp("+");}catch(ex){monitor.error(ex);}
</script>

## 参考

* [非預期的數量詞](http://msdn.microsoft.com/zh-tw/library/ie/k0e76ayf(v=vs.94\).aspx)
* [意外的限定符](http://msdn.microsoft.com/zh-cn/library/k0e76ayf(v=vs.94\).aspx)
