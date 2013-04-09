
# 未知名称。

----

| Language | Message    |
|----------|------------|
| 简体中文 | 未知名称。 |

## 案例

| 异常字段 | 值                                   |
|----------|--------------------------------------|
| Message  | 未知名称。                           |
| URL      | http://mofang.alipay.com/i/index.htm |
| File     | http://mofang.alipay.com/i/index.htm |
| Line     | 225                                  |

<!-- start-line=210; -->
```javascript
function callLuckyDrawParams() {
    Loader.use(['arale.http'], function() {
        Ajax.jsonp(apiURL + "campaign/campaign.json?campInfo=" + $("campInfo").node.value, {
            success : function(obj) {
                switch (obj.stat) {
                    //...
                    case 'ok':
                    var resultCode = obj.resultCode;
                    if(resultCode <= 0) {
                        showErrorMsg(resultCode);
                    } else if(resultCode > 0) {
                        if(obj.prizeType == 5) {
                            prizeSendId = obj.prizeSendId;
                            prodCode = obj.mktPrizeParamList[0].paramName;
                            $("J-flash").node.showBox(prodCode);
                        } else {
                            //...
                        }
                    }
                    break;
                    // ...
                }
            },
            failure : function() {
                //...
            }
        })
    });
}
```

## 相关异常


## 延伸阅读

* [JavaScript 错误“javascript.JSException：未知名称”](http://www.java.com/zh_CN/download/help/javascript.xml)
