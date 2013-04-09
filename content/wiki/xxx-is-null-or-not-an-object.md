
# 'XXX' 为空或不是对象

----

| Language | Message                                              | Browser | Number      |
|----------|------------------------------------------------------|---------|-------------|
| 简体中文 | 'xx' 为空或不是对象                                  | IE      | -2146823281 |
| 繁体中文 | 'xx' 是 null 或不是一個物件                          |         |             |
| 日文     | 'tagName' は Null またはオブジェクトではありません。 |         |             |
| 韩文     | 'this.item'은(는) null 이거나 개체가 아닙니다.       |         |             |
| 英文     | 'undefined' is null or not an object                 | Safari  |             |
|          | xx is null                                           |         |             |
|          | Cannot read property 'b' of undefined                | Chrome  |             |
|          | xx is undefined                                      | Firefox |             |
|          | Cannot convert 'a' to object                         | Opera   |             |


##  案例

| 异常字段 | 值                                                          |
|----------|-------------------------------------------------------------|
| Message  | accountDetail is null                                       |
| URL      | https://cashier.sit.alipay.net/standard/payment/cashier.htm |
| File     | https://cashier.sit.alipay.net/standard/payment/cashier.htm |
| Line     | 163                                                         |
| Owner    | 浩初                                                        |

伯约：

1. 确切的说这个报错会出现在：“中间账户”和“非淘宝的Q用户”这2种状态下，
    因为这2种状态下只能使用网银类渠道（账户类渠道如余额，卡通等等是不能使用的）。
    前端脚本如果在同一个引用中未考虑到足够的实现场景就很有可能会出现类似的错误，
    收银台业务场景尤其复杂，这类问题更需要重点关注。
2. 相信很多同学都不了解什么是中间账户，这点主要分享给收银台小组的同学：
    看下面方法的命名，顾名思义就是一个支付宝设置的公共账号，
    这个账号一般是给收银台前置业务中，未输入支付宝账号登陆进来的用户使用的，
    目前网关支付和伪网关支付用的其实都是使用中间账户付款的。

    ```java
    public static boolean isPublicUserBuyer(String userId) {
            return ("2088001868716317".equalsIgnoreCase(userId)
                    || "2088401415536904".equalsIgnoreCase(userId)
                    || "2088401415867718".equalsIgnoreCase(userId)
                    || "2088401415890574".equalsIgnoreCase(userId)
                    || "2088401415914931".equalsIgnoreCase(userId)
                    || "2088401416025443".equalsIgnoreCase(userId)
                    || "2088401416047580".equalsIgnoreCase(userId)
                    || "2088401416067423".equalsIgnoreCase(userId)
                    || "2088401889635132".equalsIgnoreCase(userId)
                    || "2088401889651185".equalsIgnoreCase(userId)
                    || "2088401889661151".equalsIgnoreCase(userId)
                    || "2088502970098073".equalsIgnoreCase(userId)
                    ...
    ```
3. 这个问题主要还是因为通过CMS去修复线上问题时分析不足引发的病变，
    我们正在推进的CMS快速修复线上BUG的流程，如何保障快速修复的情况下，
    不出问题是需要带回去思考的：
    1. CMS修复问题时自己所写代码受众场景的分析要求需要提高，这对收银台来说是个不小的挑战，
        (浩初)蔡伦要加强小组中业务代码的走读和分享，让大家都做到心里有谱。
    2. 对于收银台这种业务高聚合的产品来说，目前缺陷快速修复仅通过判断URL、
        业务标识的方式有些简单粗暴了，后面可以考虑为对应业务Module里的方法提供修复接口，
        这样修复问题时更保险、更快捷。

更多详情请浩初、乐仪补充。

----

| 异常字段 | 值                                                                 |
|----------|--------------------------------------------------------------------|
| Message  | 'undefined' 为空或不是对象                                         |
| URL      | https://cashier.alipay.com/standard/payment/chooseConsumerCard.htm |
| File     | https://cashier.alipay.com/standard/payment/chooseConsumerCard.htm |
| Line     | 252                                                                |

异常原因：在快速付款2期中，由于相关交互需求，在tile chooseConsumerCard.vm
对应js文件chooseConsumerCard.js中添加了如下代码：

```javascript
var removeSelected = function(){
    var bussinessManager,cashierChannel;
    bussinessManager=parent.window.bussinessManager;
    bussinessManager&&(cashierChannel=bussinessManager.getCurrentChannel());
    cashierChannel&&(cashierChannel.unselected());
    bussinessManager.setPreChannel(null);
    bussinessManager.setCurrentChannel(null);
}

removeSelected();
```



其中bussinessManager是快速付款独有的业务组件，但标准收银台也会调用该tile，
所以在标准收银台执行该段代码时bussinessManager 为undefined，高亮的两句代码就会有问题


处理：后续考虑将该段代码放在快速付款模块中，以免多处执行，具体修复由初尘在23号升级包内完成

乐仪

----

| 异常字段 | 值                                                                        |
|----------|---------------------------------------------------------------------------|
| Message  | 'TextData' 为空或不是对象                                                 |
| URL      | https://taobao.alipay.com/cooperate/gateway.do                            |
| File     | https://taobao.alipay.com/cooperate/gateway.do                            |
| Line     | 31                                                                        |
| UA       | Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) [218.104.235.130] |
| Date     | 2011-07-08                                                                |

取密码控件的值。从看到的几个相关代码上看，应该不会报这样的错误的。
错误信息太少，压缩的代码又难以定位错误。

天蓬

----

1. 'current_select_item.id' 为空或不是对象
1. 'null' 为空或不是对象
1. window.document.getElementById("Password_Edit_noie") is null
1. 'current_select_item.id' 为空或不是对象
1. 'null' 为空或不是对象
1. 'null' is null or not an object
1. window.document.getElementById("Password_Edit_noie") is null
1. 'D.get(...)' 为空或不是对象
1. '0.node' is null or not an object
1. '2' 是 null 或不是一個物件

对象值为 null。运行时错误，看看逻辑，或者调用和定义之间的顺序。

类似 str.equals("str") 这种语法，一般建议使用 "str".equals(str) ，
未知的变量作为参数，避免其为 null 时 equals 方法不存在造成的错误，
当然事先判定也是一种不错的方案。

检查 ID 是否书写正确，拷贝或使用自动补全相对靠谱点。也有可能是调用的时机不宜。

## 相关异常


## 参考
