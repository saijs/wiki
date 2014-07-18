
# Error setting property on XXX!

----

| Language | Message                                           |
|----------|---------------------------------------------------|
| 英文     | Error setting property on NPObject!               |
|          | Uncaught Error: Error calling method on NPObject. |

出没于 Firefox 之中，常见于属性值不合法时。目前已知的起因是由 Flash/Object(Flash)
控件引起，搜索出来的结果大都与 ActionScript 3 相关。

## 案例

| 异常字段 | 值                                                |
|----------|---------------------------------------------------|
| Message  | Uncaught Error: Error calling method on NPObject. |
| URI      | http://www.example.com/index.htm                  |
| File     | http://www.example.com/index.htm                  |
| Line     | 225                                               |

<!-- start-line=221; -->
```javascript
if(obj.prizeType == 5){
  prizeSendId = obj.prizeSendId;
  prodCode = obj.mktPrizeParamList[0].paramName;
  $("J-flash").node.showBox(prodCode);
}else{
  prizeName = obj.prizeName;
  $("J-flash").node.showPrize(prizeName);
}
```

----

| 异常字段 | 值                                                  |
|----------|-----------------------------------------------------|
| Message  | Error setting property on scriptable plugin object! |
| URL      | https://www.example.com/index.htm                   |
| File     | https://www.example.com/index.htm                   |
| Line     | 0                                                   |

----

| 异常字段 | 值                                  |
|----------|-------------------------------------|
| Message  | Error setting property on NPObject! |

## 相关异常


## 参考

* [NPObject Error Using Firefox, Flash, and Javascript](http://danielmclaren.com/node/119)
* [Error calling method on NPObject!](http://techblog.floorplanner.com/2007/03/13/error-calling-method-on-npobject/)
* [(RESOLVED) NPObject?](http://www.webdeveloper.com/forum/archive/index.php/t-95598.html)
* [SL2: Error setting property on scriptable plugin object!](http://forums.silverlight.net/t/69914.aspx/1)
* [Javascript calling C# function under Silverlight](http://stackoverflow.com/questions/581930/javascript-calling-c-sharp-function-under-silverlight)
* [Error setting property with latest plugin - progresswrite?](http://developer.garmin.com/forum/viewtopic.php?p=746&sid=7c2cd703b53ef1403358ff775d84d277)
* [Firefox: Error enumerating properties on scriptable plugin object No Graph rendered.](http://groups.google.com/group/google-visualization-api/browse_thread/thread/e9b9ba218e5449e3?pli=1)
